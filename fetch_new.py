import os
import requests
import subprocess
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm  # 新增：用於顯示進度條

def download_single_file(full_url, file_path, filename):
    """Handles the downloading of a single file."""
    try:
        response = requests.get(full_url, timeout=60)
        response.raise_for_status()
        
        with open(file_path, 'wb') as file:
            file.write(response.content)
        # 成功時不再回傳成功訊息，保持畫面乾淨
        return True, filename, ""
    except requests.exceptions.RequestException as e:
        # 失敗時回傳錯誤訊息
        return False, filename, str(e)

def download_railway_schedules():
    target_url = "https://ods.railway.gov.tw/tra-ods-web/ods/download/dataResource/railway_schedule/JSON/list"
    base_url = "https://ods.railway.gov.tw"
    download_dir = "data_official"
    
    os.makedirs(download_dir, exist_ok=True)
    print(f"Fetching link directory from {target_url}...")
    
    try:
        response = requests.get(target_url, timeout=30)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Failed to fetch the webpage: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    links = soup.find_all('a')
    
    download_tasks = []
    for link in links:
        href = link.get('href')
        filename = link.text.strip()
        
        if href and filename.endswith('.json'):
            full_url = urljoin(base_url, href)
            file_path = os.path.join(download_dir, filename)
            download_tasks.append((full_url, file_path, filename))
            
    total_files = len(download_tasks)
    if total_files == 0:
        print("No JSON files found to download.")
        return
        
    print(f"Found {total_files} files. Starting multithreaded download and conversion...\n")

    successful_dates = []
    script_path = os.path.join("data_official", "convert_new_data.py")

    # 建立進度條
    with tqdm(total=total_files, desc="Processing", unit="file") as pbar:
        with ThreadPoolExecutor(max_workers=5) as executor:
            future_to_file = {
                executor.submit(download_single_file, url, path, name): name 
                for url, path, name in download_tasks
            }
            
            for future in as_completed(future_to_file):
                success, filename, error_msg = future.result()
                date_str = filename.replace('.json', '')
                
                if success:
                    try:
                        # capture_output=True 會把 convert_new_data.py 的 print 訊息攔截下來
                        # 這樣就不會洗掉進度條的畫面
                        result = subprocess.run(
                            ["python", script_path, date_str], 
                            check=True, 
                            capture_output=True, 
                            text=True
                        )
                        
                        # 如果 convert_new_data.py 有印出 Error，我們就把它顯示出來
                        if "Error" in result.stdout or "Error" in result.stderr:
                            # 使用 tqdm.write 可以在不破壞進度條排版的情況下印出文字
                            tqdm.write(f"[x] {date_str} 轉換出現錯誤: {result.stdout.strip()} {result.stderr.strip()}")
                        else:
                            # 完全成功，加入成功清單
                            successful_dates.append(date_str)
                            
                    except subprocess.CalledProcessError as e:
                        # 如果腳本執行崩潰 (exit code 不為 0)
                        tqdm.write(f"[x] {date_str} 轉換失敗: {e}\n{e.stdout}\n{e.stderr}")
                else:
                    tqdm.write(f"[x] {filename} 下載錯誤: {error_msg}")
                
                # 每處理完一個檔案，進度條加 1
                pbar.update(1)

    # --- 最後統一列出成功的檔案 ---
    print("\n" + "="*30)
    print("           作業完成")
    print("="*30)
    
    if successful_dates:
        # 將日期由新到舊排序以便閱讀
        successful_dates.sort(reverse=True)
        print(f"成功下載並轉換共 {len(successful_dates)} 個檔案：")
        
        # 每 10 個日期換一行，讓版面更整齊
        for i in range(0, len(successful_dates), 10):
            print(", ".join(successful_dates[i:i+10]))
    else:
        print("沒有成功轉換任何檔案。")

if __name__ == "__main__":
    download_railway_schedules()