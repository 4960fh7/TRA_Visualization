import json
import os
import sys

# --- Configurations & Reference Lists ---
# Add any missing station mappings to this list as needed
station_list = station_list = ['0900-基隆','0910-三坑','0920-八堵','0930-七堵','0940-百福','0950-五堵','0960-汐止','0970-汐科','0980-南港','0990-松山','1000-臺北','1001-臺北_環島','1010-萬華','1020-板橋','1030-浮洲','1040-樹林','1050-南樹林','1060-山佳','1070-鶯歌','1075-鳳鳴','1080-桃園','1090-內壢','1100-中壢','1110-埔心','1120-楊梅','1130-富岡','1140-新富','1150-北湖','1160-湖口','1170-新豐','1180-竹北','1190-北新竹','1191-千甲','1192-新莊','1193-竹中','1194-六家','1201-上員','1202-榮華','1203-竹東','1204-橫山','1205-九讚頭','1206-合興','1207-富貴','1208-內灣','1210-新竹','1220-三姓橋','1230-香山','1240-崎頂','1250-竹南','2110-談文','2120-大山','2130-後龍','2140-龍港','2150-白沙屯','2160-新埔','2170-通霄','2180-苑裡','2190-日南','2200-大甲','2210-臺中港','2220-清水','2230-沙鹿','2240-龍井','2250-大肚','2260-追分','3140-造橋','3150-豐富','3160-苗栗','3170-南勢','3180-銅鑼','3190-三義','3210-泰安','3220-后里','3230-豐原','3240-栗林','3250-潭子','3260-頭家厝','3270-松竹','3280-太原','3290-精武','3300-臺中','3310-五權','3320-大慶','3330-烏日','3340-新烏日','3350-成功','3360-彰化','3370-花壇','3380-大村','3390-員林','3400-永靖','3410-社頭','3420-田中','3430-二水','3431-源泉','3432-濁水','3433-龍泉','3434-集集','3435-水里','3436-車埕','3450-林內','3460-石榴','3470-斗六','3480-斗南','3490-石龜','4050-大林','4060-民雄','4070-嘉北','4080-嘉義','4090-水上','4100-南靖','4110-後壁','4120-新營','4130-柳營','4140-林鳳營','4150-隆田','4160-拔林','4170-善化','4180-南科','4190-新市','4200-永康','4210-大橋','4220-臺南','4250-保安','4260-仁德','4270-中洲','4271-長榮大學','4272-沙崙','4290-大湖','4300-路竹','4310-岡山','4320-橋頭','4330-楠梓','4340-新左營','4350-左營','4360-內惟','4370-美術館','4380-鼓山','4390-三塊厝','4400-高雄','4410-民族','4420-科工館','4430-正義','4440-鳳山','4450-後庄','4460-九曲堂','4470-六塊厝','5000-屏東','5010-歸來','5020-麟洛','5030-西勢','5040-竹田','5050-潮州','5060-崁頂','5070-南州','5080-鎮安','5090-林邊','5100-佳冬','5110-東海','5120-枋寮','5130-加祿','5140-內獅','5160-枋山','5190-大武','5200-瀧溪','5210-金崙','5220-太麻里','5230-知本','5240-康樂','6000-臺東','6010-山里','6020-鹿野','6030-瑞源','6040-瑞和','6050-關山','6060-海端','6070-池上','6080-富里','6090-東竹','6100-東里','6110-玉里','6120-三民','6130-瑞穗','6140-富源','6150-大富','6160-光復','6170-萬榮','6180-鳳林','6190-南平','6200-林榮新光','6210-豐田','6220-壽豐','6230-平和','6240-志學','6250-吉安','7000-花蓮','7010-北埔','7020-景美','7030-新城','7040-崇德','7050-和仁','7060-和平','7070-漢本','7080-武塔','7090-南澳','7100-東澳','7110-永樂','7120-蘇澳','7130-蘇澳新','7150-冬山','7160-羅東','7170-中里','7180-二結','7190-宜蘭','7200-四城','7210-礁溪','7220-頂埔','7230-頭城','7240-外澳','7250-龜山','7260-大溪','7270-大里','7280-石城','7290-福隆','7300-貢寮','7310-雙溪','7320-牡丹','7330-三貂嶺','7331-大華','7332-十分','7333-望古','7334-嶺腳','7335-平溪','7336-菁桐','7350-猴硐','7360-瑞芳','7361-海科館','7362-八斗子','7380-四腳亭','7390-暖暖']

car_class_map = {
    "1101": "太魯閣",
    "1107": "普悠瑪",
    "1102": "PP自強",
    "1108": "PP自強",
    "1109": "PP自強",
    "110A": "PP自強",
    "1100": "柴聯自強",
    "1103": "柴聯自強",
    "110D": "柴聯自強",
    "110E": "柴聯自強",
    "110F": "柴聯自強",
    "1104": "自強專列",
    "1105": "自強專列",
    "1106": "自強專列",
    "110G": "新自強",
    "110H": "新自強",
    "110K": "新自強",
    "110M": "新自強",
    "1110": "莒光",
    "1111": "莒光",
    "1114": "莒光",
    "1115": "莒光",
    "1112": "莒光專列",
    "1113": "莒光專列",
    "1131": "區間",
    "1132": "區間快",
    "1130": "普通專列",
    "1150": "普通專列"
}

line_map = {"0": "-", "1": "山線", "2": "海線", "3": "成追線"}

img_config = [
    ("OverNightStn", "跨日列車"),
    ("Everyday", "每日列車"),
    ("BreastFeed", "哺集乳室車廂"),
    ("Package", "行李託運服務"),
    ("Dinning", "餐車"),
    ("FoodSrv", "訂餐"),
    ("Cripple", "輪椅座"),
    ("Bike", "腳踏車設施"),
    ("ExtraTrain", "加班車"),
]


# --- Helper Functions ---
def parse_time_to_minutes(time_str):
    """Converts 'HH:MM:SS' string into total minutes from midnight as a float."""
    if not time_str:
        return 0.0
    parts = time_str.split(":")
    hours = int(parts[0])
    minutes = int(parts[1])
    seconds = int(parts[2]) if len(parts) > 2 else 0
    if hours < 3: hours += 24
    return float(hours * 60 + minutes + seconds / 60)


def format_short_time(time_str):
    """Converts 'HH:MM:SS' to 'HH:MM'."""
    if not time_str:
        return ""
    return ":".join(time_str.split(":")[:2])


def get_drive_days(note):
    """Determines operation calendar sequence from train Note text."""
    if "每日行駛" in note:
        return "1234567"
    elif "民國" in note and "行駛" in note:
        return "0"
    elif "週五行" in note:
        return "5"
    elif "週六行" in note:
        return "6"
    elif "週日行" in note:
        return "7"
    elif "週一、六行" in note:
        return "16"
    elif "週五、六行" in note:
        return "56"
    elif "週五、日行" in note:
        return "57"
    elif "週六、日行" in note:
        return "67"
    elif "週五至日行" in note:
        return "567"
    elif "週一、五至日行" in note:
        return "1567"
    elif "週一、六、日行" in note:
        return "167"
    elif "週六、日及例假日行" in note:
        return "678"
    elif "週六停" in note:
        return "123457"
    elif "週日停" in note:
        return "123456"
    elif "週五、六停" in note:
        return "12347"
    elif "週六、日停" in note:
        return "12345"
    elif "週五至日停" in note:
        return "1234"
    elif "週六、日及例假日停" in note:
        return "123459"
    return ""


# --- Main Conversion Routine ---
def main():
    date = sys.argv[1]

    input_filename = f"data_official/{date}.json"
    output_filename = f"data_new/{date}.json"

    if not os.path.exists(input_filename):
        print(f"Error: Target file '{input_filename}' not found.")
        return

    # Parse station definitions lookup dictionary
    station_map = {}
    for entry in station_list:
        if "-" in entry:
            code, name = entry.split("-", 1)
            station_map[code.strip()] = name.strip()

    # Load source JSON format data
    with open(input_filename, "r", encoding="utf-8") as f:
        src_data = json.load(f)

    transformed_trains = []

    for info in src_data.get("TrainInfos", []):
        # Resolve train type classifications
        car_class = info.get("CarClass", "")
        # Defaults to generic text '區間' if code isn't explicitly bound inside mapping dictionary
        train_type = car_class_map.get(car_class, "未知")

        # Create structured status arrays
        img_tags = []
        for key, text in img_config:
            val = info.get(key, "")
            if val and val not in ["N", "0", "None", "null"]:
                img_tags.append(text)
        img_str = " ".join(img_tags)

        # Map timeline events
        time_infos = sorted(
            info.get("TimeInfos", []), key=lambda k: int(k.get("Order", 0))
        )

        station_data_points = []
        for t_info in time_infos:
            stn_code = t_info.get("Station", "")
            stn_name = station_map.get(stn_code, stn_code)

            arr_min = parse_time_to_minutes(t_info.get("ARRTime", ""))
            dep_min = parse_time_to_minutes(t_info.get("DEPTime", ""))

            # Format 2 requires separate sequential coordinate points for ARR and DEP actions
            station_data_points.append({"x": stn_name, "y": arr_min})
            station_data_points.append({"x": stn_name, "y": dep_min})

        # Calculate trip bounds summary data parameters
        start_stn = station_data_points[0]["x"] if station_data_points else ""
        end_stn = station_data_points[-1]["x"] if station_data_points else ""

        start_time = (
            format_short_time(time_infos[0].get("DEPTime", ""))
            if time_infos
            else ""
        )
        end_time = (
            format_short_time(time_infos[-1].get("ARRTime", ""))
            if time_infos
            else ""
        )

        note_text = info.get("Note", "")

        # Assemble new format schema structures
        new_train_object = {
            "train": train_type,
            "number": int(info.get("Train", 0))
            if info.get("Train", "").isdigit()
            else info.get("Train"),
            "data": station_data_points,
            "info": {
                "start": f"{start_time} {start_stn}".strip(),
                "end": f"{end_time} {end_stn}".strip(),
                "via": line_map.get(info.get("Line", ""), ""),
                "drive": get_drive_days(note_text),
                "note": note_text,
                "img": img_str,
            },
        }
        transformed_trains.append(new_train_object)

    # Output structured output targets
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(transformed_trains, f, separators=(',', ':'), ensure_ascii=False)

    print(
        f"Success: Processed data written out successfully to '{output_filename}'"
    )


if __name__ == "__main__":
    main()