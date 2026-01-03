# ====================
#     ENVIRONMENT
# ====================

import requests
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt
import sys
from datetime import datetime
from tqdm import tqdm

plt.rcParams['font.sans-serif'] = ['Microsoft JhengHei']
plt.rcParams['axes.unicode_minus'] = False

# ====================
#     STATION LIST
# ====================

all_list = ['0900-基隆','0910-三坑','0920-八堵','0930-七堵','0940-百福','0950-五堵','0960-汐止','0970-汐科','0980-南港','0990-松山','1000-臺北','1001-臺北-環島','1010-萬華','1020-板橋','1030-浮洲','1040-樹林','1050-南樹林','1060-山佳','1070-鶯歌','1075-鳳鳴','1080-桃園','1090-內壢','1100-中壢','1110-埔心','1120-楊梅','1130-富岡','1140-新富','1150-北湖','1160-湖口','1170-新豐','1180-竹北','1190-北新竹','1191-千甲','1192-新莊','1193-竹中','1194-六家','1201-上員','1202-榮華','1203-竹東','1204-橫山','1205-九讚頭','1206-合興','1207-富貴','1208-內灣','1210-新竹','1220-三姓橋','1230-香山','1240-崎頂','1250-竹南','2110-談文','2120-大山','2130-後龍','2140-龍港','2150-白沙屯','2160-新埔','2170-通霄','2180-苑裡','2190-日南','2200-大甲','2210-臺中港','2220-清水','2230-沙鹿','2240-龍井','2250-大肚','2260-追分','3140-造橋','3150-豐富','3160-苗栗','3170-南勢','3180-銅鑼','3190-三義','3210-泰安','3220-后里','3230-豐原','3240-栗林','3250-潭子','3260-頭家厝','3270-松竹','3280-太原','3290-精武','3300-臺中','3310-五權','3320-大慶','3330-烏日','3340-新烏日','3350-成功','3360-彰化','3370-花壇','3380-大村','3390-員林','3400-永靖','3410-社頭','3420-田中','3430-二水','3431-源泉','3432-濁水','3433-龍泉','3434-集集','3435-水里','3436-車埕','3450-林內','3460-石榴','3470-斗六','3480-斗南','3490-石龜','4050-大林','4060-民雄','4070-嘉北','4080-嘉義','4090-水上','4100-南靖','4110-後壁','4120-新營','4130-柳營','4140-林鳳營','4150-隆田','4160-拔林','4170-善化','4180-南科','4190-新市','4200-永康','4210-大橋','4220-臺南','4250-保安','4260-仁德','4270-中洲','4271-長榮大學','4272-沙崙','4290-大湖','4300-路竹','4310-岡山','4320-橋頭','4330-楠梓','4340-新左營','4350-左營','4360-內惟','4370-美術館','4380-鼓山','4390-三塊厝','4400-高雄','4410-民族','4420-科工館','4430-正義','4440-鳳山','4450-後庄','4460-九曲堂','4470-六塊厝','5000-屏東','5010-歸來','5020-麟洛','5030-西勢','5040-竹田','5050-潮州','5060-崁頂','5070-南州','5080-鎮安','5090-林邊','5100-佳冬','5110-東海','5120-枋寮','5130-加祿','5140-內獅','5160-枋山','5190-大武','5200-瀧溪','5210-金崙','5220-太麻里','5230-知本','5240-康樂','6000-臺東','6010-山里','6020-鹿野','6030-瑞源','6040-瑞和','6050-關山','6060-海端','6070-池上','6080-富里','6090-東竹','6100-東里','6110-玉里','6120-三民','6130-瑞穗','6140-富源','6150-大富','6160-光復','6170-萬榮','6180-鳳林','6190-南平','6200-林榮新光','6210-豐田','6220-壽豐','6230-平和','6240-志學','6250-吉安','7000-花蓮','7010-北埔','7020-景美','7030-新城','7040-崇德','7050-和仁','7060-和平','7070-漢本','7080-武塔','7090-南澳','7100-東澳','7110-永樂','7120-蘇澳','7130-蘇澳新','7150-冬山','7160-羅東','7170-中里','7180-二結','7190-宜蘭','7200-四城','7210-礁溪','7220-頂埔','7230-頭城','7240-外澳','7250-龜山','7260-大溪','7270-大里','7280-石城','7290-福隆','7300-貢寮','7310-雙溪','7320-牡丹','7330-三貂嶺','7331-大華','7332-十分','7333-望古','7334-嶺腳','7335-平溪','7336-菁桐','7350-猴硐','7360-瑞芳','7361-海科館','7362-八斗子','7380-四腳亭','7390-暖暖']
# 環島鐵路
main_station_list = [i for i in all_list if ((int(i[3]) == 0) or (int(i[:4]) == 1075))]
# 縱貫線北段：基隆～竹南
west_north_station_list = [i for i in main_station_list if (int(i[0:4]) < 2000)]
west_north_station_dist = [0, 1.5, 3.9, 6.2, 8.9, 11.9, 13.3, 14.6, 19.3, 22.1, 28.5, 31.3, 35.7, 38.1, 41.1, 43.1, 45, 49.4, 54.4, 57.6, 63.5, 67.5, 73.3, 77.3, 84.1, 85.8, 87.3, 89.8, 96, 100.8, 105.2, 106.6, 111.4, 114.6, 120.8, 125.3]
# 山線：竹南～彰化，經台中
west_mountain_station_list = [i for i in main_station_list if (3000 < int(i[0:4]) <= 3360) or (int(i[0:4]) == 1250)]
west_mountain_station_dist = [125.3, 130.7, 136.6, 140.6, 147.2, 151.4, 158.8, 169.7, 172.3, 179, 181.6, 184.1, 186, 187.7, 189.5, 191.2, 193.1, 195.3, 197.4, 200.5, 201.4, 203.8, 210.9]
# 海線：竹南～彰化，經沙鹿
west_sea_station_list = [i for i in main_station_list if (1250 <= int(i[0:4]) < 3000) or (int(i[0:4]) == 3360)]
west_sea_station_dist = [125.3, 129.8, 136.6, 140.3, 143.9, 152, 155.1, 160.9, 167, 174.7, 179.4, 184.6, 190.6, 193.8, 198.4, 203.4, 208.4, 215.6]
# 縱貫線南段：彰化～高雄
west_south_station_list = [i for i in main_station_list if (3360 <= int(i[0:4]) <= 4400)]
west_south_station_dist = [210.9, 217.5, 222.1, 225.6, 229.1, 232.8, 237.1, 242.9, 251, 255.8, 260.6, 268.2, 272.1, 276.7, 282.5, 289.2, 291.8, 298.4, 301, 307, 314.7, 318, 321.9, 327.4, 329.6, 334.2, 337.1, 341.8, 346.8, 350.5, 353.2, 360.8, 362.2, 364.7, 367.6, 370.6, 378.4, 382, 386.2, 391.3, 393.3, 394.4, 396.1, 397.3, 399, 399.9]
# 屏東線：高雄～枋寮
pingtung_station_list = [i for i in main_station_list if (4400 <= int(i[0:4]) <= 5120)]
pingtung_station_dist = [399.9, 401.2, 402.3, 404.1, 405.4, 409.3, 413.5, 418.5, 420.8, 423.4, 425.7, 428.1, 431.8, 435.8, 440.7, 443.1, 446.9, 450, 453.9, 457, 461.1]
# 西部幹線：基隆～枋寮，經台中
west_all_station_list = [i for i in main_station_list if (int(i[0:4]) < 2000) or (3000 < int(i[0:4]) <= 5120)]
west_all_station_dist = west_north_station_dist + west_mountain_station_dist[1:] + west_south_station_dist[1:] + pingtung_station_dist[1:]
# 南迴線：枋寮～台東
south_link_station_list = [i for i in main_station_list if (5120 <= int(i[0:4]) <= 6000)]
south_link_station_dist = [461.1, 466.4, 469.9, 474.7, 504.9, 516.6, 525, 535.9, 547.6, 554.7, 559.2]
# 宜蘭線：八堵～蘇澳
yilan_station_list = [i for i in main_station_list if (int(i[0:4]) == 920)] + [i for i in main_station_list if (7120 <= int(i[0:4]) < 8000)][::-1]
yilan_station_dist = [0, 1.6, 3.9, 8.9, 13.5, 16, 19.5, 22.9, 28.2, 32, 37.4, 40.1, 44.8, 49.4, 52.9, 56.6, 58.8, 62.9, 67.6, 71.3, 77.1, 78.3, 80.1, 85.1, 90.2, 93.5]
# 北迴線：蘇澳新～花蓮
north_link_station_list = [i for i in main_station_list if (7000 <= int(i[0:4]) <= 7110) or (int(i[0:4]) == 7130)][::-1]
north_link_station_dist = [90.2, 95.4, 101.1, 109.1, 112.8, 125.7, 130.1, 138, 148, 153.3, 158.6, 165.1, 169.7]
# 台東線：花蓮～台東
taitung_station_list = [i for i in main_station_list if (6000 <= int(i[0:4]) <= 7000)][::-1]
taitung_station_dist = [169.7, 173.2, 182, 185, 186.8, 189.6, 195.8, 198, 202.2, 207.1, 212.7, 220.2, 223.4, 232.5, 241.9, 252.7, 259.5, 265.5, 271.6, 278.4, 284.1, 290.6, 298.1, 300.8, 306.3, 312.4, 320.6]
# 東部幹線：八堵～台東
east_all_station_list = [i for i in main_station_list if (int(i[0:4]) == 920)] + [i for i in main_station_list if (6000 <= int(i[0:4]) < 8000) and (int(i[0:4]) != 7120)][::-1]
east_all_station_dist = yilan_station_dist[:-1] + north_link_station_dist[1:] + taitung_station_dist[1:]

print(west_all_station_list, len(west_all_station_list))
print(west_all_station_dist, len(west_all_station_dist))
# ====================
#       CONTROL
# ====================
try:
    route = sys.argv[1].replace("幹線", "").replace("線", "").replace("鐵路", "").replace("段", "")
except Exception:
    route = "縱貫"
match route:
    case "縱貫" | "西部":
        station_list = west_all_station_list
        station_dist = west_all_station_dist
        title = "西部幹線"
        filename = "west_all"
    case "縱貫北" | "西部北":
        station_list = west_north_station_list
        station_dist = west_north_station_dist
        title = "西部幹線北段"
        filename = "west_north"
    case "縱貫南" | "西部南":
        station_list = west_south_station_list
        station_dist = west_south_station_dist
        title = "西部幹線南段"
        filename = "west_south"
    case "縱貫山" | "西部山" | "山":
        station_list = west_mountain_station_list
        station_dist = west_mountain_station_dist
        title = "西部幹線山線"
        filename = "west_mountain"
    case "縱貫山" | "西部海" | "海":
        station_list = west_sea_station_list
        station_dist = west_sea_station_dist
        title = "西部幹線海線"
        filename = "west_sea"
    case "屏東" | "高屏":
        station_list = pingtung_station_list
        station_dist = pingtung_station_dist
        title = "屏東線"
        filename = "pingtung"
    case "南迴" | "南回":
        station_list = south_link_station_list
        station_dist = south_link_station_dist
        title = "南迴線"
        filename = "south_link"
    case "東部":
        station_list = east_all_station_list
        station_dist = east_all_station_dist
        title = "東部幹線"
        filename = "east_all"
    case "宜蘭":
        station_list = yilan_station_list
        station_dist = yilan_station_dist
        title = "宜蘭線"
        filename = "yilan"
    case "北迴" | "北回":
        station_list = north_link_station_list
        station_dist = north_link_station_dist
        title = "北迴線"
        filename = "north_link"
    case "台東" | "臺東":
        station_list = taitung_station_list
        station_dist = taitung_station_dist
        title = "台東線"
        filename = "taitung"
    case _:
        station_list = west_all_station_list
        station_dist = west_all_station_dist
        title = "西部幹線"
        filename = "west_all"
station_index = {station_list[i][5:]: i for i in range(len(station_list))}
try:
    filename = sys.argv[2]
except Exception:
    filename = filename + ".svg"

# ====================
#      TRAIN LIST
# ====================

train_list = set()

def list_trains(station_name, direc):
    url = f"https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/querybystationblank?rideDate=2026/01/03&station={station_name}"
    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")
    if direc == 2:
        direction = soup.find_all("tbody")[0]
        for train in direction.find_all("tr"):
            try:
                content = train.find_all("td")
                train_id = content[1].find("a").get_text()
                if "自強(3000)" in train_id:
                    train_list.add(("新自強", train_id[8:]))
                elif "區間快" in train_id or "普悠瑪" in train_id or "太魯閣" in train_id:
                    train_list.add((train_id[:3], train_id[3:]))
                else:
                    train_list.add((train_id[:2], train_id[2:]))
            except Exception:
                continue
        direction = soup.find_all("tbody")[1]
        for train in direction.find_all("tr"):
            try:
                content = train.find_all("td")
                train_id = content[1].find("a").get_text()
                if "自強(3000)" in train_id:
                    train_list.add(("新自強", train_id[8:]))
                elif "區間快" in train_id or "普悠瑪" in train_id or "太魯閣" in train_id:
                    train_list.add((train_id[:3], train_id[3:]))
                else:
                    train_list.add((train_id[:2], train_id[2:]))
            except Exception:
                continue
    else:
        direction = soup.find_all("tbody")[direc]
        for train in direction.find_all("tr"):
            try:
                content = train.find_all("td")
                train_id = content[1].find("a").get_text()
                if "自強(3000)" in train_id:
                    train_list.add(("新自強", train_id[8:]))
                elif "區間快" in train_id or "普悠瑪" in train_id or "太魯閣" in train_id:
                    train_list.add((train_id[:3], train_id[3:]))
                else:
                    train_list.add((train_id[:2], train_id[2:]))
            except Exception:
                continue

# ====================
#     DRAW TRAINS
# ====================

ymin = 10000
ymax = 0
def plot_train(train_type, train_number):
    xpos = []
    ypos = []
    global ymax, ymin
    
    url = f"https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/querybytrainno?rideDate=2026/01/03&trainNo={train_number}"
    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")

    try:
        direction = soup.find_all("tbody")[1]
    except Exception:
        return
    for train in direction.find_all("tr"):
        try:
            content = train.find_all("td")
            station = content[0].get_text()
            arr_time = content[1].get_text()
            dep_time = content[2].get_text()
            if not (arr_time[1] == ":" or arr_time[2] == ":"):
                continue
            if station not in station_index.keys():
                continue
            time = datetime.strptime(arr_time, "%H:%M").hour * 60 + datetime.strptime(arr_time, "%H:%M").minute
            time = time if time > 240 else time + 1440
            if arr_time == dep_time:
                xpos.append(time-0.5)
            else:
                xpos.append(time)
            ypos.append(station_dist[station_index[station]])
            time = datetime.strptime(dep_time, "%H:%M").hour * 60 + datetime.strptime(dep_time, "%H:%M").minute
            time = time if time > 240 else time + 1440
            if arr_time == dep_time:
                xpos.append(time+0.5)
            else:
                xpos.append(time)
            ypos.append(station_dist[station_index[station]])
        except Exception:
            continue

    color_dict = {"普悠瑪":"red", "太魯閣":"orange", "新自強":"purple", "自強":"green", "莒光":"yellow", "區間快":"blue", "區間":"black"}
    ymax = max(ymax, max(ypos))
    ymin = min(ymin, min(ypos))
    layer = 10 if train_type == "區間" else 15
    plt.plot(xpos, ypos, "-", color=color_dict[train_type], zorder=layer)
    return [train_type, train_number, xpos, ypos]

plt.figure(figsize=(10, 8))
if ("北" in route or "南" in route) and not ("回" in route or "迴" in route):
    print(f"route: {route[:-1]}線{route[-1]}段")
elif (route == "西部" or route == "東部"):
    print(f"route: {route}幹線")
else:
    print(f"route: {route}線")
print(f"filename: {filename}")
print("fetching train list...")
for i in tqdm(range(len(station_list))):
    list_trains(station_list[i], 2) # 0: clockwise, 1:counterclockwise, 2:both
print("fetching train data...")
for (train_type, train) in tqdm(list(train_list)):
    plot_train(train_type, train)
# with open("train_list.txt", "w") as f:
#     f.write(str(train_list))
# with open("train_data.txt", "w") as g:
#     for (train_type, train) in list(train_list):
#         g.write(str(plot_train(train_type, train)))
#         g.write("\n")
print("drawing...")
xticks = range(240, 1680, 60)
xtick_labels = [f"{t//60:02d}" for t in xticks]
yticks = station_dist
ytick_labels = [station_list[s][5:] for s in range(len(yticks))]

# ====================
#    DRAW TIMELINE
# ====================

for x in range(240, 1630, 10):
    if x % 60 == 0:
        plt.plot([x, x], [ymin-3, ymax+3], "-", color="darkgrey", zorder=5)
    else:
        plt.plot([x, x], [ymin-3, ymax+3], "-", color="gainsboro", zorder=0)

# ====================
#     DRAW STATION
# ====================

for y in station_dist:
    plt.plot([240, 1620], [y, y], "-", color="gainsboro", zorder=0)

plt.gca().invert_yaxis()
plt.xticks(xticks, xtick_labels)
plt.yticks(yticks, ytick_labels)
plt.title(title)
plt.tight_layout()
plt.savefig(filename, dpi=1000)
print(f"Saved figure to {filename}")
plt.show()