const lightcolorPalette = { "普悠瑪": "#F12F2F", "太魯閣": "#F57C00", "新自強": "#7B1FA2", "自強": "#00994D", "PP自強": "#00994D", "柴聯自強": "#236900", "自強專列": "#00994D", "莒光": "#FBC02D", "莒光專列": "#FBC02D", "區間快": "#1A1AFF", "區間": "#262626", "普通專列": "#c11b92" }
const darkcolorPalette = { "普悠瑪": "#FF5252", "太魯閣": "#FF9800", "新自強": "#BB99FF", "自強": "#66FF6A", "PP自強": "#66FF6A", "柴聯自強": "#baff66", "自強專列": "#66FF6A", "莒光": "#FDD835", "莒光專列": "#FDD835", "區間快": "#33CCFF", "區間": "#E6E6E6", "普通專列": "#ff77d8" };
const allStationDistances = { '基隆': -39, '三坑': -24, '八堵': 0, '七堵': 23, '百福': 50, '五堵': 80, '汐止': 94, '汐科': 107, '南港': 154, '松山': 182, '臺北': 246, '臺北_環島': 246, '萬華': 274, '板橋': 318, '浮洲': 342, '樹林': 372, '南樹林': 392, '山佳': 411, '鶯歌': 455, '鳳鳴': 505, '桃園': 537, '內壢': 596, '中壢': 636, '埔心': 694, '楊梅': 734, '富岡': 802, '新富': 819, '北湖': 834, '湖口': 859, '新豐': 921, '竹北': 969, '北新竹': 1013, '千甲': 991, '新莊': 961, '竹中': 948, '六家': 917, '上員': 921, '榮華': 877, '竹東': 861, '橫山': 826, '九讚頭': 806, '合興': 784, '富貴': 770, '內灣': 748, '新竹': 1027, '三姓橋': 1075, '香山': 1107, '崎頂': 1169, '竹南': 1214, '談文': 1259, '大山': 1327, '後龍': 1364, '龍港': 1400, '白沙屯': 1481, '新埔': 1512, '通霄': 1570, '苑裡': 1631, '日南': 1708, '大甲': 1755, '臺中港': 1807, '清水': 1867, '沙鹿': 1899, '龍井': 1945, '大肚': 1995, '追分': 2045, '造橋': 1268, '豐富': 1327, '苗栗': 1367, '南勢': 1433, '銅鑼': 1475, '三義': 1549, '泰安': 1658, '后里': 1684, '豐原': 1751, '栗林': 1777, '潭子': 1802, '頭家厝': 1821, '松竹': 1838, '太原': 1856, '精武': 1873, '臺中': 1892, '五權': 1914, '大慶': 1935, '烏日': 1966, '新烏日': 1975, '成功': 1999, '彰化': 2070, '花壇': 2136, '大村': 2182, '員林': 2217, '永靖': 2252, '社頭': 2289, '田中': 2332, '二水': 2390, '源泉': 2420, '濁水': 2498, '龍泉': 2547, '集集': 2590, '水里': 2664, '車埕': 2686, '林內': 2471, '石榴': 2519, '斗六': 2567, '斗南': 2643, '石龜': 2682, '大林': 2728, '民雄': 2786, '嘉北': 2853, '嘉義': 2879, '水上': 2945, '南靖': 2971, '後壁': 3031, '新營': 3108, '柳營': 3141, '林鳳營': 3180, '隆田': 3235, '拔林': 3257, '善化': 3303, '南科': 3332, '新市': 3379, '永康': 3429, '大橋': 3466, '臺南': 3493, '保安': 3569, '仁德': 3583, '中洲': 3608, '長榮大學': 3634, '沙崙': 3665, '大湖': 3637, '路竹': 3667, '岡山': 3745, '橋頭': 3781, '楠梓': 3823, '新左營': 3874, '左營': 3894, '內惟': 3905, '美術館': 3922, '鼓山': 3934, '三塊厝': 3951, '高雄': 3960, '民族': 3973, '科工館': 3984, '正義': 4002, '鳳山': 4015, '後庄': 4054, '九曲堂': 4096, '六塊厝': 4146, '屏東': 4169, '歸來': 4195, '麟洛': 4218, '西勢': 4242, '竹田': 4279, '潮州': 4319, '崁頂': 4368, '南州': 4392, '鎮安': 4430, '林邊': 4461, '佳冬': 4500, '東海': 4531, '枋寮': 4572, '加祿': 4625, '內獅': 4660, '枋山': 4708, '大武': 5010, '瀧溪': 5127, '金崙': 5211, '太麻里': 5320, '知本': 5437, '康樂': 5508, '臺東': 5553, '山里': 5635, '鹿野': 5696, '瑞源': 5751, '瑞和': 5778, '關山': 5853, '海端': 5918, '池上': 5975, '富里': 6043, '东竹': 6104, '東里': 6164, '玉里': 6232, '三民': 6340, '瑞穗': 6434, '富源': 6525, '大富': 6557, '光復': 6632, '萬榮': 6688, '鳳林': 6737, '南平': 6779, '林榮新光': 6801, '豐田': 6863, '壽豐': 6891, '平和': 6909, '志學': 6939, '吉安': 7027, '花蓮': 7062, '北埔': 7108, '景美': 7173, '新城': 7226, '崇德': 7279, '和仁': 7379, '和平': 7458, '漢本': 7502, '武塔': 7631, '南澳': 7668, '東澳': 7748, '永樂': 7805, '蘇澳': 7824, '蘇澳新': 7857, '冬山': 7908, '羅東': 7958, '中里': 7976, '二結': 7988, '宜蘭': 8046, '四城': 8083, '礁溪': 8130, '頂埔': 8171, '頭城': 8193, '外澳': 8230, '龜山': 8265, '大溪': 8311, '大里': 8358, '石城': 8385, '福隆': 8439, '貢寮': 8477, '雙溪': 8530, '牡丹': 8564, '三貂嶺': 8599, '大華': 8563, '十分': 8535, '望古': 8518, '嶺腳': 8497, '平溪': 8487, '菁桐': 8470, '猴硐': 8624, '瑞芳': 8670, '海科館': 8713, '八斗子': 8717, '四腳亭': 8720, '暖暖': 8743 };
const mountStationDistances = { '八堵': 0, '七堵': 23, '百福': 50, '五堵': 80, '汐止': 94, '汐科': 107, '南港': 154, '松山': 182, '臺北': 246, '臺北_環島': 246, '萬華': 274, '板橋': 318, '浮洲': 342, '樹林': 372, '南樹林': 392, '山佳': 411, '鶯歌': 455, '鳳鳴': 505, '桃園': 537, '內壢': 596, '中壢': 636, '埔心': 694, '楊梅': 734, '富岡': 802, '新富': 819, '北湖': 834, '湖口': 859, '新豐': 921, '竹北': 969, '北新竹': 1013, '新竹': 1027, '三姓橋': 1075, '香山': 1107, '崎頂': 1169, '竹南': 1214, '造橋': 1268, '豐富': 1327, '苗栗': 1367, '南勢': 1433, '銅鑼': 1475, '三義': 1549, '泰安': 1658, '后里': 1684, '豐原': 1751, '栗林': 1777, '潭子': 1802, '頭家厝': 1821, '松竹': 1838, '太原': 1856, '精武': 1873, '臺中': 1892, '五權': 1914, '大慶': 1935, '烏日': 1966, '新烏日': 1975, '成功': 1999, '彰化': 2070, '花壇': 2136, '大村': 2182, '員林': 2217, '永靖': 2252, '社頭': 2289, '田中': 2332, '二水': 2390, '林內': 2471, '石榴': 2519, '斗六': 2567, '斗南': 2643, '石龜': 2682, '大林': 2728, '民雄': 2786, '嘉北': 2853, '嘉義': 2879, '水上': 2945, '南靖': 2971, '後壁': 3031, '新營': 3108, '柳營': 3141, '林鳳營': 3180, '隆田': 3235, '拔林': 3257, '善化': 3303, '南科': 3332, '新市': 3379, '永康': 3429, '大橋': 3466, '臺南': 3493, '保安': 3569, '仁德': 3583, '中洲': 3608, '大湖': 3637, '路竹': 3667, '岡山': 3745, '橋頭': 3781, '楠梓': 3823, '新左營': 3874, '左營': 3894, '內惟': 3905, '美術館': 3922, '鼓山': 3934, '三塊厝': 3951, '高雄': 3960, '民族': 3973, '科工館': 3984, '正義': 4002, '鳳山': 4015, '後庄': 4054, '九曲堂': 4096, '六塊厝': 4146, '屏東': 4169, '歸來': 4195, '麟洛': 4218, '西勢': 4242, '竹田': 4279, '潮州': 4319, '崁頂': 4368, '南州': 4392, '鎮安': 4430, '林邊': 4461, '佳冬': 4500, '東海': 4531, '枋寮': 4572, '加祿': 4625, '內獅': 4660, '枋山': 4708, '大武': 5010, '瀧溪': 5127, '金崙': 5211, '太麻里': 5320, '知本': 5437, '康樂': 5508, '臺東': 5553, '山里': 5635, '鹿野': 5696, '瑞源': 5751, '瑞和': 5778, '關山': 5853, '海端': 5918, '池上': 5975, '富里': 6043, '東竹': 6104, '東里': 6164, '玉里': 6232, '三民': 6340, '瑞穗': 6434, '富源': 6525, '大富': 6557, '光復': 6632, '萬榮': 6688, '鳳林': 6737, '南平': 6779, '林榮新光': 6801, '豐田': 6863, '壽豐': 6891, '平和': 6909, '志學': 6939, '吉安': 7027, '花蓮': 7062, '北埔': 7108, '景美': 7173, '新城': 7226, '崇德': 7279, '和仁': 7379, '和平': 7458, '漢本': 7502, '武塔': 7631, '南澳': 7668, '東澳': 7748, '永樂': 7805, '蘇澳新': 7857, '冬山': 7908, '羅東': 7958, '中里': 7976, '二結': 7988, '宜蘭': 8046, '四城': 8083, '礁溪': 8130, '頂埔': 8171, '頭城': 8193, '外澳': 8230, '龜山': 8265, '大溪': 8311, '大里': 8358, '石城': 8385, '福隆': 8439, '貢寮': 8477, '雙溪': 8530, '牡丹': 8564, '三貂嶺': 8599, '猴硐': 8624, '瑞芳': 8670, '四腳亭': 8720, '暖暖': 8743 };
const seaStationDistances = { '八堵': 0, '七堵': 23, '百福': 50, '五堵': 80, '汐止': 94, '汐科': 107, '南港': 154, '松山': 182, '臺北': 246, '臺北_環島': 246, '萬華': 274, '板橋': 318, '浮洲': 342, '樹林': 372, '南樹林': 392, '山佳': 411, '鶯歌': 455, '鳳鳴': 505, '桃園': 537, '內壢': 596, '中壢': 636, '埔心': 694, '楊梅': 734, '富岡': 802, '新富': 819, '北湖': 834, '湖口': 859, '新豐': 921, '竹北': 969, '北新竹': 1013, '新竹': 1027, '三姓橋': 1075, '香山': 1107, '崎頂': 1169, '竹南': 1214, '談文': 1259, '大山': 1327, '後龍': 1364, '龍港': 1400, '白沙屯': 1481, '新埔': 1512, '通霄': 1570, '苑裡': 1631, '日南': 1708, '大甲': 1755, '臺中港': 1807, '清水': 1867, '沙鹿': 1899, '龍井': 1945, '大肚': 1995, '追分': 2045, '彰化': 2117, '花壇': 2183, '大村': 2229, '員林': 2264, '永靖': 2299, '社頭': 2336, '田中': 2379, '二水': 2437, '林內': 2518, '石榴': 2566, '斗六': 2614, '斗南': 2690, '石龜': 2729, '大林': 2775, '民雄': 2833, '嘉北': 2900, '嘉義': 2926, '水上': 2992, '南靖': 3018, '後壁': 3078, '新營': 3155, '柳營': 3188, '林鳳營': 3227, '隆田': 3282, '拔林': 3304, '善化': 3350, '南科': 3379, '新市': 3426, '永康': 3476, '大橋': 3513, '臺南': 3540, '保安': 3616, '仁德': 3630, '中洲': 3655, '大湖': 3684, '路竹': 3714, '岡山': 3792, '橋頭': 3828, '楠梓': 3870, '新左營': 3921, '左營': 3941, '內惟': 3952, '美術館': 3969, '鼓山': 3981, '三塊厝': 3998, '高雄': 4007, '民族': 4020, '科工館': 4031, '正義': 4049, '鳳山': 4062, '後庄': 4101, '九曲堂': 4143, '六塊厝': 4193, '屏東': 4216, '歸來': 4242, '麟洛': 4265, '西勢': 4289, '竹田': 4326, '潮州': 4366, '崁頂': 4415, '南州': 4439, '鎮安': 4477, '林邊': 4508, '佳冬': 4547, '東海': 4578, '枋寮': 4619, '加祿': 4672, '內獅': 4707, '枋山': 4755, '大武': 5057, '瀧溪': 5174, '金崙': 5258, '太麻里': 5367, '知本': 5484, '康樂': 5555, '臺東': 5600, '山里': 5682, '鹿野': 5743, '瑞源': 5798, '瑞和': 5825, '關山': 5900, '海端': 5965, '池上': 6022, '富里': 6090, '東竹': 6151, '東里': 6211, '玉里': 6279, '三民': 6387, '瑞穗': 6481, '富源': 6572, '大富': 6604, '光復': 6679, '萬榮': 6735, '鳳林': 6784, '南平': 6826, '林榮新光': 6848, '豐田': 6910, '壽豐': 6938, '平和': 6956, '志學': 6986, '吉安': 7074, '花蓮': 7109, '北埔': 7155, '景美': 7220, '新城': 7273, '崇德': 7326, '和仁': 7426, '和平': 7505, '漢本': 7549, '武塔': 7678, '南澳': 7715, '東澳': 7795, '永樂': 7852, '蘇澳新': 7904, '冬山': 7955, '羅東': 8005, '中里': 8023, '二結': 8035, '宜蘭': 8093, '四城': 8130, '礁溪': 8177, '頂埔': 8218, '頭城': 8240, '外澳': 8277, '龜山': 8312, '大溪': 8358, '大里': 8405, '石城': 8432, '福隆': 8486, '貢寮': 8524, '雙溪': 8577, '牡丹': 8611, '三貂嶺': 8646, '猴硐': 8671, '瑞芳': 8717, '四腳亭': 8767, '暖暖': 8790 };
const mainStationList = new Set(["基隆", "七堵", "汐止", "松山", "臺北", "臺北_環島", "板橋", "樹林", "鶯歌", "桃園", "中壢", "北湖", "六家", "竹東", "內灣", "新竹", "竹南", "通霄", "大甲", "沙鹿", "苗栗", "豐原", "臺中", "新烏日", "彰化", "員林", "田中", "二水", "車埕", "斗六", "斗南", "嘉義", "新營", "善化", "永康", "臺南", "中洲", "沙崙", "岡山", "楠梓", "新左營", "高雄", "鳳山", "屏東", "潮州", "枋寮", "大武", "知本", "臺東", "關山", "池上", "玉里", "瑞穗", "光復", "壽豐", "花蓮", "新城", "和平", "東澳", "蘇澳新", "羅東", "宜蘭", "頭城", "福隆", "雙溪", "十分", "菁桐", "瑞芳", "八斗子"]);
const mountStationList = new Set(['八堵', '七堵', '百福', '五堵', '汐止', '汐科', '南港', '松山', '臺北', "臺北_環島", '萬華', '板橋', '浮洲', '樹林', '南樹林', '山佳', '鶯歌', '鳳鳴', '桃園', '內壢', '中壢', '埔心', '楊梅', '富岡', '新富', '北湖', '湖口', '新豐', '竹北', '北新竹', '新竹', '三姓橋', '香山', '崎頂', '竹南', '造橋', '豐富', '苗栗', '南勢', '銅鑼', '三義', '泰安', '后里', '豐原', '栗林', '潭子', '頭家厝', '松竹', '太原', '精武', '臺中', '五權', '大慶', '烏日', '新烏日', '成功', '彰化', '花壇', '大村', '員林', '永靖', '社頭', '田中', '二水', '林內', '石榴', '斗六', '斗南', '石龜', '大林', '民雄', '嘉北', '嘉義', '水上', '南靖', '後壁', '新營', '柳營', '林鳳營', '隆田', '拔林', '善化', '南科', '新市', '永康', '大橋', '臺南', '保安', '仁德', '中洲', '大湖', '路竹', '岡山', '橋頭', '楠梓', '新左營', '左營', '內惟', '美術館', '鼓山', '三塊厝', '高雄', '民族', '科工館', '正義', '鳳山', '後庄', '九曲堂', '六塊厝', '屏東', '歸來', '麟洛', '西勢', '竹田', '潮州', '崁頂', '南州', '鎮安', '林邊', '佳冬', '東海', '枋寮', '加祿', '內獅', '枋山', '大武', '瀧溪', '金崙', '太麻里', '知本', '康樂', '臺東', '山里', '鹿野', '瑞源', '瑞和', '關山', '海端', '池上', '富里', '東竹', '東里', '玉里', '三民', '瑞穗', '富源', '大富', '光復', '萬榮', '鳳林', '南平', '林榮新光', '豐田', '壽豐', '平和', '志學', '吉安', '花蓮', '北埔', '景美', '新城', '崇德', '和仁', '和平', '漢本', '武塔', '南澳', '東澳', '永樂', '蘇澳新', '冬山', '羅東', '中里', '二結', '宜蘭', '四城', '礁溪', '頂埔', '頭城', '外澳', '龜山', '大溪', '大里', '石城', '福隆', '貢寮', '雙溪', '牡丹', '三貂嶺', '猴硐', '瑞芳', '四腳亭', '暖暖']);
const seaStationList = new Set(['八堵', '七堵', '百福', '五堵', '汐止', '汐科', '南港', '松山', '臺北', "臺北_環島", '萬華', '板橋', '浮洲', '樹林', '南樹林', '山佳', '鶯歌', '鳳鳴', '桃園', '內壢', '中壢', '埔心', '楊梅', '富岡', '新富', '北湖', '湖口', '新豐', '竹北', '北新竹', '新竹', '三姓橋', '香山', '崎頂', '竹南', "談文", "大山", "後龍", "龍港", "白沙屯", "新埔", "通霄", "苑裡", "日南", "大甲", "臺中港", "清水", "沙鹿", "龍井", "大肚", "追分", '彰化', '花壇', '大村', '員林', '永靖', '社頭', '田中', '二水', '林內', '石榴', '斗六', '斗南', '石龜', '大林', '民雄', '嘉北', '嘉義', '水上', '南靖', '後壁', '新營', '柳營', '林鳳營', '隆田', '拔林', '善化', '南科', '新市', '永康', '大橋', '臺南', '保安', '仁德', '中洲', '大湖', '路竹', '岡山', '橋頭', '楠梓', '新左營', '左營', '內惟', '美術館', '鼓山', '三塊厝', '高雄', '民族', '科工館', '正義', '鳳山', '後庄', '九曲堂', '六塊厝', '屏東', '歸來', '麟洛', '西勢', '竹田', '潮州', '崁頂', '南州', '鎮安', '林邊', '佳冬', '東海', '枋寮', '加祿', '內獅', '枋山', '大武', '瀧溪', '金崙', '太麻里', '知本', '康樂', '臺東', '山里', '鹿野', '瑞源', '瑞和', '關山', '海端', '池上', '富里', '東竹', '東里', '玉里', '三民', '瑞穗', '富源', '大富', '光復', '萬榮', '鳳林', '南平', '林榮新光', '豐田', '壽豐', '平和', '志學', '吉安', '花蓮', '北埔', '景美', '新城', '崇德', '和仁', '和平', '漢本', '武塔', '南澳', '東澳', '永樂', '蘇澳新', '冬山', '羅東', '中里', '二結', '宜蘭', '四城', '礁溪', '頂埔', '頭城', '外澳', '龜山', '大溪', '大里', '石城', '福隆', '貢寮', '雙溪', '牡丹', '三貂嶺', '猴硐', '瑞芳', '四腳亭', '暖暖']);
const mainStationDict = { "ㄅㄉ": "八堵", "ㄑㄉ": "七堵", "ㄨㄉ": "五堵", "ㄒㄓ": "汐止", "ㄋㄍ": "南港", "ㄙㄥ": "松山", "ㄊㄞ": "臺北", "ㄨㄢ": "萬華", "ㄅㄢ": "板橋", "ㄈㄓ": "浮洲", "ㄕㄨ": "樹林", "ㄕㄢ": "山佳", "ㄧㄥ": "鶯歌", "ㄊㄠ": "桃園", "ㄋㄌ": "內壢", "ㄓㄌ": "中壢", "ㄅㄒㄣ": "埔心", "ㄧㄤ": "楊梅", "ㄈㄍ": "富岡", "ㄏㄨ": "湖口", "ㄒㄈ": "新豐", "ㄓㄅ": "竹北", "ㄒㄣ": "新竹", "ㄒㄤ": "香山", "ㄑㄧ": "崎頂", "ㄓㄋ": "竹南", "ㄨㄣ": "談文", "ㄉㄚ": "大山", "ㄏㄡ": "後龍", "ㄌㄍ": "龍港", "ㄅㄕㄚ": "白沙屯", "ㄒㄅ": "新埔", "ㄊㄒ": "通霄", "ㄩㄢ": "苑裡", "ㄖㄢ": "日南", "ㄐㄚ": "大甲", "ㄊㄓㄍ": "臺中港", "ㄑㄥ": "清水", "ㄕㄚ": "沙鹿", "ㄌㄐ": "龍井", "ㄉㄉ": "大肚", "ㄓㄟ": "追分", "ㄗㄠ": "造橋", "ㄈㄈ": "豐富", "ㄇㄠ": "苗栗", "ㄋㄕ": "南勢", "ㄊㄌ": "銅鑼", "ㄢㄧ": "三義", "ㄊㄞㄢ": "泰安", "ㄏㄌ": "后里", "ㄈㄥ": "豐原", "ㄊㄗ": "潭子", "ㄊㄓ": "臺中", "ㄨㄖ": "烏日", "ㄔㄥㄍ": "成功", "ㄓㄤ": "彰化", "ㄊㄢ": "花壇", "ㄩㄌ": "員林", "ㄥㄐ": "永靖", "ㄕㄜ": "社頭", "ㄊㄧㄢ": "田中", "ㄦㄕ": "二水", "ㄌㄣ": "林內", "ㄌㄧㄡ": "石榴", "ㄉㄡ": "斗六", "ㄉㄋ": "斗南", "ㄕㄍㄟ": "石龜", "ㄉㄌㄣ": "大林", "ㄇㄣ": "民雄", "ㄐㄧ": "嘉義", "ㄕㄟ": "水上", "ㄋㄐ": "南靖", "ㄏㄅ": "後壁", "ㄒㄥ": "新營", "ㄌㄧ": "柳營", "ㄌㄈ": "林鳳營", "ㄌㄥㄊ": "隆田", "ㄅㄚㄌ": "拔林", "ㄕㄏ": "善化", "ㄒㄕ": "新市", "ㄎㄤ": "永康", "ㄊㄋ": "臺南", "ㄠㄢ": "保安", "ㄓㄡ": "中洲", "ㄉㄏㄨ": "大湖", "ㄌㄨ": "路竹", "ㄍㄤ": "岡山", "ㄑㄠ": "橋頭", "ㄋㄗ": "楠梓", "ㄒㄗㄛ": "新左營", "ㄗㄛ": "左營", "ㄋㄨ": "內惟", "ㄍㄕ": "鼓山", "ㄙㄎㄘ": "三塊厝", "ㄍㄠ": "高雄", "ㄈㄕ": "鳳山", "ㄏㄓ": "後庄", "ㄐㄡ": "九曲堂", "ㄌㄡ": "六塊厝", "ㄆㄥ": "屏東", "ㄨㄞ": "歸來", "ㄌㄧㄣ": "麟洛", "ㄒㄧㄕ": "西勢", "ㄓㄨ": "竹田", "ㄔㄠ": "潮州", "ㄎㄉ": "崁頂", "ㄋㄓ": "南州", "ㄓㄣ": "鎮安", "ㄌㄅ": "林邊", "ㄐㄉ": "佳冬", "ㄉㄏㄞ": "東海", "ㄤㄌ": "枋寮", "ㄐㄌㄨ": "加祿", "ㄋㄟㄕ": "內獅", "ㄤㄕ": "枋山", "ㄤㄧ": "枋野", "ㄉㄚㄨ": "大武", "ㄌㄨㄥ": "瀧溪", "ㄐㄌㄣ": "金崙", "ㄊㄇㄌ": "太麻里", "ㄓㄅㄣ": "知本", "ㄎㄌ": "康樂", "ㄎㄌ": "康樂", "ㄊㄞㄉ": "臺東", "ㄕㄢㄌ": "山里", "ㄌㄧㄝ": "鹿野", "ㄖㄩ": "瑞源", "ㄖㄏ": "瑞和", "ㄍㄢㄕ": "關山", "ㄏㄉ": "海端", "ㄔㄕ": "池上", "ㄈㄌㄧ": "富里", "ㄉㄓ": "東竹", "ㄉㄥㄌ": "東里", "ㄩㄌㄧ": "玉里", "ㄙㄇ": "三民", "ㄖㄟ": "瑞穗", "ㄈㄩ": "富源", "ㄉㄈㄩ": "大富", "ㄍㄈ": "光復", "ㄨㄢㄖ": "萬榮", "ㄈㄌㄣ": "鳳林", "ㄋㄆ": "南平", "ㄌㄖ": "林榮新光", "ㄈㄊ": "豐田", "ㄕㄈ": "壽豐", "ㄥㄏ": "平和", "ㄓㄝ": "志學", "ㄐㄢ": "吉安", "ㄌㄧㄢ": "花蓮", "ㄅㄟㄅ": "北埔", "ㄐㄥ": "景美", "ㄒㄔ": "新城", "ㄔㄥㄉ": "崇德", "ㄏㄖ": "和仁", "ㄏㄆㄥ": "和平", "ㄏㄢ": "漢本", "ㄨㄊ": "武塔", "ㄋㄠ": "南澳", "ㄉㄠ": "東澳", "ㄩㄌㄜ": "永樂", "ㄙㄒㄣ": "蘇澳新", "ㄉㄥ": "冬山", "ㄌㄛ": "羅東", "ㄓㄥ": "中里", "ㄦㄐ": "二結", "ㄧㄌ": "宜蘭", "ㄙㄔ": "四城", "ㄐㄠ": "礁溪", "ㄉㄅ": "頂埔", "ㄊㄔ": "頭城", "ㄨㄠ": "外澳", "ㄍㄟ": "龜山", "ㄉㄑ": "大溪", "ㄉㄌ": "大里", "ㄕㄔ": "石城", "ㄈㄌ": "福隆", "ㄍㄌ": "貢寮", "ㄕㄤㄑ": "雙溪", "ㄇㄉ": "牡丹", "ㄙㄉㄌ": "三貂嶺", "ㄏㄊ": "猴硐", "ㄖㄈ": "瑞芳", "ㄙㄐㄠ": "四腳亭", "ㄋㄋ": "暖暖", };
const reverseStationDict = {};
Object.entries(mainStationDict).forEach(([key, value]) => { reverseStationDict[value] = key; });
let isLight = false;
let colorPalette = darkcolorPalette;
let deckInstance = null;
let realtime = false;
let notime = false;
let onlystart = false;
let trainConnection = false;
let actualDriving = false;
let calcScheduleData = null;
let stationCodeToName = {};
let stationInfoByName = {};
let rawData = [];
let yrawData = [];
let allTrainsSource = [];
let state = {
    selectedLine: null, showSchedule: false, currentZoom: 0,
    enabledTypes: new Set(['普悠瑪', '太魯閣', '新自強', '柴聯自強', 'PP自強', '自強專列', '莒光', '莒光專列', '區間快', '區間', '普通專列']),
    stationList: mountStationList, stationDistances: mountStationDistances, focusedStation: null,
    activeBranches: new Set(),
    period: 8759, initialY: 246, currentTimeMinutes: 0
};

const branchConfigs = {
    'keelung': {
        name: '基隆線',
        junction: '八堵',
        stations: ['基隆', '三坑', '八堵'], // ordered from branch end to junction
        gap: 40 // distance units
    },
    'liujia': {
        name: '六家線',
        junction: '北新竹',
        stations: ['六家', '竹中', '新莊', '千甲', '北新竹'],
        gap: 40
    },
    'neiwan': {
        name: '內灣線',
        junction: '北新竹',
        stations: ['內灣', '富貴', '合興', '九讚頭', '橫山', '竹東', '榮華', '上員', '竹中', '新莊', '千甲', '北新竹'],
        gap: 40
    },
    'jiji': {
        name: '集集線',
        junction: '二水',
        stations: ['車埕', '水里', '集集', '龍泉', '濁水', '源泉', '二水'],
        gap: 40
    },
    'shalun': {
        name: '沙崙線',
        junction: '中洲',
        stations: ['沙崙', '長榮大學', '中洲'],
        gap: 40
    },
    'suao': {
        name: '蘇澳線',
        junction: '蘇澳新',
        stations: ['蘇澳', '蘇澳新'],
        gap: 40
    },
    'pingxi': {
        name: '平溪線',
        junction: '三貂嶺',
        stations: ['菁桐', '平溪', '嶺腳', '望古', '十分', '大華', '三貂嶺'],
        gap: 40
    },
    'shenao': {
        name: '深澳線',
        junction: '瑞芳',
        stations: ['八斗子', '海科館', '瑞芳'],
        gap: 40
    }
};
let gridData = {
    denseLabels: [], normalLabels: [], sparseLabels: [], simpleLabels: [],
    thickLines: [], thinLines: [],
    denseLabelData: [], normalLabelData: [], sparseLabelData: [], mainLabelData: [], leftonlyLabelData: [],
    minDistance: 0, maxDistance: 0
};
let layers = {
    baseLayers: [], offsetLayers: [], mainPlotLayers: [], currentTimeLayers: [], scatterLayers: [], selectionLayers: [], axisLabels: [], axisLabelsHighlight: []
};
const searchInput = document.getElementById('global-search');
const searchBtn = document.getElementById('search-btn');
const searchError = document.getElementById('search-error');
const dateSelector = document.getElementById('date-selector');
let today = new Date();
if (today.getHours() < 2) { today.setDate(today.getDate() - 1); }
dateSelector.value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('d')) {
    let dStr = urlParams.get('d');
    if (dStr.length === 6) dStr = `20${dStr.slice(0, 2)}-${dStr.slice(2, 4)}-${dStr.slice(4, 6)}`;
    if (dStr.length === 10) dateSelector.value = dStr;
}
today.setDate(today.getDate() - 1);
const yesterday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

function getSelectedDateFilename() { return realtime ? `data_new/${dateSelector.value.replace(/-/g, '')}_realtime.json` : `data_new/${dateSelector.value.replace(/-/g, '')}.json`; }
function getYesterdayFilename() {
    const selectedDate = new Date(dateSelector.value + 'T00:00:00');
    selectedDate.setDate(selectedDate.getDate() - 1);
    const yesterday = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    return realtime ? `data_new/${yesterday.replace(/-/g, '')}_realtime.json` : `data_new/${yesterday.replace(/-/g, '')}.json`;
}

// const serviceIcons = { "腳踏車設施": "🚲", "自由座": "💺", "騰雲座艙": "✨", "哺乳室": "🍼", "輪椅座": "♿", "訂便當服務": "🍱", "桌型座": "🪑", "跨日列車": "🌙" };
const serviceIcons = {
    "腳踏車設施": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-bicy.png",
    "自由座": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-freeSeat.jpg",
    "騰雲座艙": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-business.svg",
    "親子車廂": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-parenting.png",
    "哺乳室": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-nursingroom.png",
    "輪椅座": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-wheelchair.png",
    "訂便當服務": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-lunchbox.png",
    "桌型座": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-table.png",
    "跨日列車": "https://www.railway.gov.tw/tra-tip-web/static/images/serve-crossday.png",
    "柴聯自強號": "https://cdn-icons-png.flaticon.com/512/5909/5909920.png",
    "花東民眾優先購票": "https://cdn-icons-png.flaticon.com/512/3769/3769080.png"
};

const sidebar = document.getElementById('sidebar');
const wrapper = document.getElementById('main-wrapper');
const toggleBtn = document.getElementById('sidebar-toggle');
const toggleIcon = toggleBtn.querySelector('.icon');
toggleBtn.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    toggleBtn.style.right = isCollapsed ? '0px' : '25vw';
    toggleIcon.textContent = isCollapsed ? '❮' : '❯';
    wrapper.classList.toggle('sidebar-collapsed');
    if (window.triggerRender) window.triggerRender();
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeIcon.textContent = '🌙';
    isLight = true;
}

function updateBottomPanel() {
    const trainView = document.getElementById('view-train');
    const stationView = document.getElementById('view-station');
    const nullView = document.getElementById('view-null');
    [trainView, stationView, nullView].forEach(v => v.classList.add('hidden'));
    if (state.selectedLine) {
        trainView.classList.remove('hidden');
    }
    else if (state.focusedStation) {
        stationView.classList.remove('hidden');
    }
    else {
        nullView.classList.remove('hidden');
    }
}

document.addEventListener('submit', async (e) => {
    if (e.target && e.target.id === 'feedback-form') {
        e.preventDefault();

        const feedbackForm = e.target;
        const submitBtn = feedbackForm.querySelector('.submit-btn');
        const statusMsg = feedbackForm.querySelector('#submit-status');
        const feedbackText = feedbackForm.querySelector('#feedback-text');

        if (submitBtn) {
            submitBtn.innerText = "傳送中...";
            submitBtn.disabled = true;
        }

        const formData = new FormData(feedbackForm);

        try {
            const response = await fetch(feedbackForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                if (statusMsg) statusMsg.style.display = "block";
                if (feedbackText) feedbackText.style.boxShadow = "0 0 15px var(--text-color)";

                feedbackForm.reset();
                if (submitBtn) submitBtn.innerText = "傳送";

                setTimeout(() => {
                    if (statusMsg) statusMsg.style.display = "none";
                    if (feedbackText) feedbackText.style.boxShadow = "none";
                    if (submitBtn) submitBtn.disabled = false;
                }, 3000);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || "Submission failed");
            }
        } catch (error) {
            console.error("Formspree Error:", error);
            alert("傳送失敗，請重試。");
            if (submitBtn) {
                submitBtn.innerText = "RETRY";
                submitBtn.disabled = false;
            }
        }
    }
});

async function initMap() {
    const loadStartTime = Date.now();
    const DOM = {
        infoBox: document.getElementById('info-content'),
        stationBox: document.getElementById('station-info-content'),
        valZoom: document.getElementById('val-zoom'),
        valX: document.getElementById('val-x'),
        valY: document.getElementById('val-y'),
        pillContainer: document.getElementById('pill-container'),
        pills: document.querySelectorAll('.pill:not(.utility):not(.line-pill):not(.branch-pill)'),
        trainPills: document.querySelectorAll('.pill[data-type]'),
        typeFilters: document.querySelectorAll('.type-filter'),
        linePills: document.querySelectorAll('.line-pill'),
        btnSelectAll: document.getElementById('btn-select-all'),
        btnDeselectAll: document.getElementById('btn-deselect-all'),
        btnClearSelection: document.getElementById('btn-clear-selection'),
        viewMonitor: document.getElementById('view-monitor'),
        branchPills: document.querySelectorAll('.branch-pill')
    };

    function calculateDynamicDistances() {
        const baseList = isMountain ? mountStationList : seaStationList;
        const baseDistances = isMountain ? mountStationDistances : seaStationDistances;
        const basePeriod = isMountain ? 8759 : 8806;

        let newList = new Set(baseList);
        let newDistances = { ...baseDistances };

        newList.add('八堵_top');
        newDistances['八堵_top'] = basePeriod;

        let currentPeriod = basePeriod;

        let activeBranchesArr = Array.from(state.activeBranches);
        let normalBranches = activeBranchesArr.filter(b => b !== 'keelung').sort((a, b) => {
            return baseDistances[branchConfigs[a].junction] - baseDistances[branchConfigs[b].junction];
        });

        let branchShifts = {};
        function calculateBranchShift(branch) {
            if (branchShifts[branch]) return branchShifts[branch];
            const config = branchConfigs[branch];
            const junc = config.junction;

            let len = Math.abs(allStationDistances[junc] - allStationDistances[config.stations[0]]);
            let shift = config.gap + 2 * len;

            branchShifts[branch] = shift;
            return shift;
        }

        let shiftOffsets = [];
        let hasCombined = state.activeBranches.has('liujia') && state.activeBranches.has('neiwan');
        if (hasCombined) {
            normalBranches = normalBranches.filter(b => b !== 'liujia' && b !== 'neiwan');
            let len_shared = Math.abs(allStationDistances['北新竹'] - allStationDistances['竹中']);
            let len_liujia = Math.abs(allStationDistances['竹中'] - allStationDistances['六家']);
            let len_neiwan = Math.abs(allStationDistances['竹中'] - allStationDistances['內灣']);
            let shift = 2 * len_shared + 2 * len_liujia + 40 + 2 * len_neiwan + 40;
            shiftOffsets.push({
                branch: 'combined',
                junction: '北新竹',
                junc_d: baseDistances['北新竹'],
                shift: shift
            });
        }

        normalBranches.forEach(branch => {
            const config = branchConfigs[branch];
            shiftOffsets.push({
                branch,
                junction: config.junction,
                junc_d: baseDistances[config.junction],
                shift: calculateBranchShift(branch)
            });
        });

        shiftOffsets.sort((a, b) => a.junc_d - b.junc_d);

        let cumulativeOffset = 0;
        let sortedStations = Array.from(baseList).sort((a, b) => baseDistances[a] - baseDistances[b]);

        let juncIndex = 0;
        sortedStations.forEach(s => {
            let s_d = baseDistances[s];
            while (juncIndex < shiftOffsets.length && s_d > shiftOffsets[juncIndex].junc_d) {
                cumulativeOffset += shiftOffsets[juncIndex].shift;
                juncIndex++;
            }
            newDistances[s] = s_d + cumulativeOffset;
        });

        let getVisualDist = (name) => {
            let d = state.stationDistances[name];
            if (d !== undefined) return d;
            d = state.stationDistances[name + '_bottom'];
            if (d !== undefined) return d;
            return allStationDistances[name.split('_')[0]] || 0;
        };

        function assignBranchCoords(branch, startY, suffixPrefix) {
            const config = branchConfigs[branch];
            const junc = config.junction;

            let stations = config.stations.slice(0, -1).reverse();

            let currentY = startY;
            let prev_d = allStationDistances[junc];

            stations.forEach(s => {
                let s_d = allStationDistances[s];
                currentY += Math.abs(s_d - prev_d);
                prev_d = s_d;

                let finalName = s + suffixPrefix + '_bottom';
                newDistances[finalName] = currentY;
                newList.add(finalName);
                if (!suffixPrefix) newList.delete(s);
            });

            currentY += config.gap;

            stations.slice().reverse().forEach(s => {
                let finalName = s + suffixPrefix + '_top';
                newDistances[finalName] = currentY;
                newList.add(finalName);

                let s_d = allStationDistances[s];
                let next_s = stations[stations.indexOf(s) - 1];
                let next_d = next_s ? allStationDistances[next_s] : allStationDistances[junc];
                currentY += Math.abs(s_d - next_d);
            });

            return currentY;
        }

        function assignCombinedBranchCoords(startY) {
            let currentY = startY;
            let prev_d = allStationDistances['北新竹'];

            // Shared _bottom
            ['千甲', '新莊', '竹中'].forEach(s => {
                let s_d = allStationDistances[s];
                currentY += Math.abs(s_d - prev_d);
                prev_d = s_d;
                let finalName = s + '_bottom';
                newDistances[finalName] = currentY;
                newList.add(finalName);
                newList.delete(s);
            });

            // Liujia _bottom
            let s_d_liujia = allStationDistances['六家'];
            currentY += Math.abs(s_d_liujia - prev_d);
            newDistances['六家_bottom'] = currentY;
            newList.add('六家_bottom');
            newList.delete('六家');

            currentY += 40; // gap 1

            // Liujia _top
            newDistances['六家_top'] = currentY;
            newList.add('六家_top');

            currentY += Math.abs(allStationDistances['竹中'] - allStationDistances['六家']);
            newDistances['竹中_middle'] = currentY;
            newList.add('竹中_middle');

            // Neiwan _bottom
            let neiwanStations = ['上員', '榮華', '竹東', '橫山', '九讚頭', '合興', '富貴', '內灣'];
            prev_d = allStationDistances['竹中'];
            neiwanStations.forEach(s => {
                let s_d = allStationDistances[s];
                currentY += Math.abs(s_d - prev_d);
                prev_d = s_d;
                let finalName = s + '_bottom';
                newDistances[finalName] = currentY;
                newList.add(finalName);
                newList.delete(s);
            });

            currentY += 40; // gap 2

            // Neiwan _top
            let neiwanStationsRev = [...neiwanStations].reverse();
            neiwanStationsRev.forEach(s => {
                newDistances[s + '_top'] = currentY;
                newList.add(s + '_top');

                let s_d = allStationDistances[s];
                let next_s = neiwanStationsRev[neiwanStationsRev.indexOf(s) + 1] || '竹中';
                let next_d = allStationDistances[next_s];
                currentY += Math.abs(s_d - next_d);
            });

            newDistances['竹中_top'] = currentY;
            newList.add('竹中_top');

            // Shared _top
            let sharedStationsRev = ['新莊', '千甲'];
            prev_d = allStationDistances['竹中'];
            sharedStationsRev.forEach(s => {
                let s_d = allStationDistances[s];
                currentY += Math.abs(s_d - prev_d);
                prev_d = s_d;
                let finalName = s + '_top';
                newDistances[finalName] = currentY;
                newList.add(finalName);
            });
        }

        shiftOffsets.forEach(so => {
            let junc = so.junction;
            newList.add(junc + '_bottom');
            newList.add(junc + '_top');
            newDistances[junc + '_bottom'] = newDistances[junc];
            newDistances[junc + '_top'] = newDistances[junc] + so.shift;

            if (so.branch === 'combined') {
                assignCombinedBranchCoords(newDistances[junc]);
            } else {
                assignBranchCoords(so.branch, newDistances[junc], '');
            }
        });

        let totalNormalShift = shiftOffsets.reduce((sum, so) => sum + so.shift, 0);
        currentPeriod = basePeriod + totalNormalShift;
        newDistances['八堵_top'] = currentPeriod;

        if (state.activeBranches.has('keelung')) {
            const config = branchConfigs['keelung'];
            const gap = config.gap;
            const branchLen = Math.abs(allStationDistances['基隆']);

            newList.add('基隆_top');
            newList.add('三坑_top');
            newList.add('基隆_bottom');
            newList.add('三坑_bottom');

            newDistances['基隆_bottom'] = allStationDistances['基隆'];
            newDistances['三坑_bottom'] = allStationDistances['三坑'];

            newDistances['三坑_top'] = currentPeriod + (0 - allStationDistances['三坑']);
            newDistances['基隆_top'] = currentPeriod + (0 - allStationDistances['基隆']);

            currentPeriod += gap + 2 * branchLen;
        }

        state.stationList = newList;
        state.stationDistances = newDistances;
        state.period = currentPeriod;
    }

    function preprocessTrainData(trainData) {
        if (state.activeBranches.size === 0) return [trainData];

        let virtualBranchConfigs = { ...branchConfigs };
        let activeBranchesArr = Array.from(state.activeBranches);
        let hasCombined = activeBranchesArr.includes('liujia') && activeBranchesArr.includes('neiwan');
        let branchesToProcess = new Set(activeBranchesArr);

        if (hasCombined) {
            branchesToProcess.delete('liujia');
            branchesToProcess.delete('neiwan');
            branchesToProcess.add('combined');
            virtualBranchConfigs['combined'] = {
                junction: '北新竹',
                stations: ['六家', '內灣', '富貴', '合興', '九讚頭', '橫山', '竹東', '榮華', '上員', '竹中', '新莊', '千甲', '北新竹']
            };
        }

        let interpolated = [];
        for (let i = 0; i < trainData.length; i++) {
            interpolated.push(trainData[i]);
            if (i < trainData.length - 1) {
                const p1 = trainData[i];
                const p2 = trainData[i + 1];
                const d1 = allStationDistances[p1.x];
                const d2 = allStationDistances[p2.x];
                if (d1 !== undefined && d2 !== undefined) {
                    let insertedJunctions = [];
                    let crossesEastWest = (d1 > 6000 && d2 < 1000) || (d1 < 1000 && d2 > 6000);
                    if (crossesEastWest) {
                        let d1_wrap = d1 > 6000 ? d1 - 8759 : d1;
                        let d2_wrap = d2 > 6000 ? d2 - 8759 : d2;
                        let ratio = (0 - d1_wrap) / (d2_wrap - d1_wrap);
                        if (p1.x !== '八堵' && p2.x !== '八堵') {
                            insertedJunctions.push({ x: '八堵', y: p1.y + ratio * (p2.y - p1.y), isSeam: true });
                        }
                    }

                    branchesToProcess.forEach(branch => {
                        const config = virtualBranchConfigs[branch];
                        const junc = config.junction;
                        const junc_d = allStationDistances[junc];

                        let physicalStations = config.stations.slice(0, -1);

                        const isD1Branch = physicalStations.includes(p1.x);
                        const isD2Branch = physicalStations.includes(p2.x);

                        if ((isD1Branch && !isD2Branch) || (!isD1Branch && isD2Branch)) {
                            const baseList = isMountain ? mountStationList : seaStationList;
                            const isP1Visible = baseList.has(p1.x) || Array.from(state.activeBranches).some(b => branchConfigs[b].stations.includes(p1.x));
                            const isP2Visible = baseList.has(p2.x) || Array.from(state.activeBranches).some(b => branchConfigs[b].stations.includes(p2.x));

                            if (!isP1Visible || !isP2Visible) return;

                            let dist1, dist2;
                            if (branch === 'keelung') {
                                if (isD1Branch && d2 > 6000) {
                                    dist1 = Math.abs(d1);
                                    dist2 = Math.abs(d2 - 8759);
                                } else if (d1 > 6000 && isD2Branch) {
                                    dist1 = Math.abs(d1 - 8759);
                                    dist2 = Math.abs(d2);
                                } else {
                                    dist1 = Math.abs(d1);
                                    dist2 = Math.abs(d2);
                                }
                            } else {
                                dist1 = Math.abs(d1 - junc_d);
                                dist2 = Math.abs(d2 - junc_d);
                            }
                            let ratio = dist1 / (dist1 + dist2);
                            if (!(branch === 'keelung' && crossesEastWest)) {
                                insertedJunctions.push({ x: junc, y: p1.y + ratio * (p2.y - p1.y) });
                            }
                        } else if (!isD1Branch && !isD2Branch) {
                            let min_d = Math.min(d1, d2);
                            let max_d = Math.max(d1, d2);
                            let crossed = false;
                            let dist1, dist2;

                            if (crossesEastWest) {
                                if (junc_d <= min_d || junc_d >= max_d) {
                                    crossed = true;
                                    if (d1 < d2) {
                                        if (junc_d <= d1) {
                                            dist1 = Math.abs(d1 - junc_d);
                                            dist2 = junc_d + (8759 - d2);
                                        } else {
                                            dist1 = d1 + (8759 - junc_d);
                                            dist2 = Math.abs(junc_d - d2);
                                        }
                                    } else {
                                        if (junc_d >= d1) {
                                            dist1 = Math.abs(d1 - junc_d);
                                            dist2 = (8759 - junc_d) + d2;
                                        } else {
                                            dist1 = (8759 - d1) + junc_d;
                                            dist2 = Math.abs(junc_d - d2);
                                        }
                                    }
                                }
                            } else {
                                if (junc_d >= min_d && junc_d <= max_d) {
                                    crossed = true;
                                    dist1 = Math.abs(d1 - junc_d);
                                    dist2 = Math.abs(d2 - junc_d);
                                }
                            }

                            if (crossed) {
                                let ratio = dist1 / (dist1 + dist2);
                                insertedJunctions.push({ x: junc, y: p1.y + ratio * (p2.y - p1.y) });
                            }
                        }
                    });

                    insertedJunctions.sort((a, b) => a.y - b.y);
                    insertedJunctions.forEach(j => {
                        if (p1.x !== j.x && p2.x !== j.x) {
                            interpolated.push({ x: j.x, y: j.y });
                        }
                    });
                }
            }
        }

        let finalSegments = [interpolated];

        // Process Badu seam first
        let nextSegments = [];
        finalSegments.forEach(seg => {
            let baduIndices = [];
            for (let i = 0; i < seg.length; i++) {
                if (seg[i].x === '八堵') baduIndices.push(i);
            }
            if (baduIndices.length > 0) {
                let firstBadu = baduIndices[0];
                let lastBadu = baduIndices[baduIndices.length - 1];
                let isPrevEast = firstBadu > 0 ? allStationDistances[seg[firstBadu - 1].x.split('_')[0]] > 6000 : false;
                let isNextEast = lastBadu < seg.length - 1 ? allStationDistances[seg[lastBadu + 1].x.split('_')[0]] > 6000 : false;

                if (firstBadu === 0) isPrevEast = !isNextEast;
                if (lastBadu === seg.length - 1) isNextEast = !isPrevEast;

                if (isPrevEast !== isNextEast) {
                    let seg1 = seg.slice(0, lastBadu + 1).map(p => {
                        if (p.x === '八堵') return { ...p, x: isPrevEast ? '八堵_top' : '八堵' };
                        return p;
                    });
                    let seg2 = seg.slice(firstBadu).map(p => {
                        if (p.x === '八堵') return { ...p, x: isNextEast ? '八堵_top' : '八堵' };
                        return p;
                    });
                    nextSegments.push(seg1);
                    nextSegments.push(seg2);
                } else {
                    let newSeg = seg.map(p => {
                        if (p.x === '八堵') return { ...p, x: isPrevEast ? '八堵_top' : '八堵' };
                        return p;
                    });
                    nextSegments.push(newSeg);
                }
            } else {
                nextSegments.push(seg);
            }
        });
        finalSegments = nextSegments;

        let normalBranches = activeBranchesArr.filter(b => b !== 'keelung').sort((a, b) => {
            return allStationDistances[branchConfigs[a].junction] - allStationDistances[branchConfigs[b].junction];
        });

        let getVisualDist = (name) => {
            let d = state.stationDistances[name];
            if (d !== undefined) return d;
            d = state.stationDistances[name + '_bottom'];
            if (d !== undefined) return d;
            return allStationDistances[name.split('_')[0]] || 0;
        };

        if (hasCombined) {
            normalBranches = normalBranches.filter(b => b !== 'liujia' && b !== 'neiwan');
            normalBranches.push('combined');
        }

        normalBranches.forEach(branch => {
            const config = virtualBranchConfigs[branch];
            const junc = config.junction;

            let physicalStations = config.stations.slice(0, -1);

            let currentSegments = [];
            finalSegments.forEach(seg => {
                let hasBranch = seg.some(p => physicalStations.includes(p.x.split('_')[0]));
                let comesFromSouth = false;

                if (hasBranch) {
                    let branchJuncIndex = seg.findIndex(p => p.x.split('_')[0] === junc);
                    if (branchJuncIndex !== -1) {
                        let current_j_visual = getVisualDist(seg[branchJuncIndex].x);
                        for (let i = 0; i < seg.length; i++) {
                            let base = seg[i].x.split('_')[0];
                            if (!physicalStations.includes(base) && base !== junc) {
                                const baseList = isMountain ? mountStationList : seaStationList;
                                const isVis = baseList.has(base) || Array.from(state.activeBranches).some(b => branchConfigs[b] && branchConfigs[b].stations.includes(base));
                                if (isVis) {
                                    if (getVisualDist(seg[i].x) > current_j_visual) {
                                        comesFromSouth = true;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }

                let newSegmentsList = [[]];
                let duplicateSegmentsList = [[]];

                if (hasBranch) {
                    let curNewSeg = newSegmentsList[0];
                    let curDupSeg = duplicateSegmentsList[0];

                    for (let i = 0; i < seg.length; i++) {
                        let p = seg[i];
                        let base = p.x.split('_')[0];

                        let isInsideBranch = config.stations.slice(0, -1).includes(base);
                        let new_suffix = comesFromSouth ? '_top' : '_bottom';
                        let dup_suffix = comesFromSouth ? '_bottom' : '_top';
                        let new_name = base;
                        let dup_name = base;

                        if (isInsideBranch || base === junc) {
                            new_name = base + new_suffix;
                            dup_name = base + dup_suffix;
                        }

                        if (branch === 'combined' && i > 0) {
                            let prev_p = seg[i - 1];
                            let prev_base = prev_p.x.split('_')[0];

                            let isNeiwanJump = (prev_base === '竹中' && base === '上員') || (prev_base === '上員' && base === '竹中');
                            if (isNeiwanJump) {
                                if (new_suffix === '_bottom') {
                                    if (base === '竹中') curNewSeg.push({ ...p, x: '竹中_middle' });
                                    curNewSeg = [];
                                    newSegmentsList.push(curNewSeg);
                                    if (prev_base === '竹中') curNewSeg.push({ ...prev_p, x: '竹中_middle' });
                                }
                                if (dup_suffix === '_bottom') {
                                    if (base === '竹中') curDupSeg.push({ ...p, x: '竹中_middle' });
                                    curDupSeg = [];
                                    duplicateSegmentsList.push(curDupSeg);
                                    if (prev_base === '竹中') curDupSeg.push({ ...prev_p, x: '竹中_middle' });
                                }
                            }

                            let isLiujiaJump = (prev_base === '竹中' && base === '六家') || (prev_base === '六家' && base === '竹中');
                            if (isLiujiaJump) {
                                if (new_suffix === '_top') {
                                    if (base === '竹中') curNewSeg.push({ ...p, x: '竹中_middle' });
                                    curNewSeg = [];
                                    newSegmentsList.push(curNewSeg);
                                    if (prev_base === '竹中') curNewSeg.push({ ...prev_p, x: '竹中_middle' });
                                }
                                if (dup_suffix === '_top') {
                                    if (base === '竹中') curDupSeg.push({ ...p, x: '竹中_middle' });
                                    curDupSeg = [];
                                    duplicateSegmentsList.push(curDupSeg);
                                    if (prev_base === '竹中') curDupSeg.push({ ...prev_p, x: '竹中_middle' });
                                }
                            }
                        }

                        if (isInsideBranch || base === junc) {
                            curNewSeg.push({ ...p, x: new_name });
                            curDupSeg.push({ ...p, x: dup_name });
                        } else {
                            curNewSeg.push(p);
                        }
                    }

                    newSegmentsList.forEach(s => { if (s.length > 0) currentSegments.push(s); });
                    duplicateSegmentsList.forEach(s => { if (s.length > 0) currentSegments.push(s); });
                } else {
                    let juncIndices = [];
                    for (let i = 0; i < seg.length; i++) {
                        if (seg[i].x.split('_')[0] === junc) juncIndices.push(i);
                    }

                    if (juncIndices.length > 0) {
                        let firstJunc = juncIndices[0];
                        let lastJunc = juncIndices[juncIndices.length - 1];

                        let current_j_visual = getVisualDist(seg[firstJunc].x);
                        let isPrevSouth = firstJunc > 0 ? getVisualDist(seg[firstJunc - 1].x) > current_j_visual : false;
                        let last_j_visual = getVisualDist(seg[lastJunc].x);
                        let isNextSouth = lastJunc < seg.length - 1 ? getVisualDist(seg[lastJunc + 1].x) > last_j_visual : false;

                        if (firstJunc === 0) isPrevSouth = !isNextSouth;
                        if (lastJunc === seg.length - 1) isNextSouth = !isPrevSouth;

                        if (isPrevSouth !== isNextSouth) {
                            let seg1 = seg.slice(0, lastJunc + 1).map(p => {
                                if (p.x.split('_')[0] === junc) return { ...p, x: p.x + (isPrevSouth ? '_top' : '_bottom') };
                                return p;
                            });
                            let seg2 = seg.slice(firstJunc).map(p => {
                                if (p.x.split('_')[0] === junc) return { ...p, x: p.x + (isNextSouth ? '_top' : '_bottom') };
                                return p;
                            });
                            currentSegments.push(seg1);
                            currentSegments.push(seg2);
                        } else {
                            let newSeg = seg.map(p => {
                                if (p.x.split('_')[0] === junc) return { ...p, x: p.x + (isPrevSouth ? '_top' : '_bottom') };
                                return p;
                            });
                            currentSegments.push(newSeg);
                        }
                    } else {
                        currentSegments.push(seg);
                    }
                }
            });
            finalSegments = currentSegments;
        });

        if (state.activeBranches.has('keelung')) {
            let nextSegments = [];
            finalSegments.forEach(seg => {
                let hasKeelung = seg.some(p => p.x.split('_')[0] === '基隆' || p.x.split('_')[0] === '三坑');
                let comesFromEast = false;

                if (hasKeelung) {
                    for (let i = 0; i < seg.length; i++) {
                        let base = seg[i].x.split('_')[0];
                        if (base !== '八堵' && base !== '三坑' && base !== '基隆') {
                            if (allStationDistances[base] > 6000) {
                                comesFromEast = true;
                            }
                        }
                    }

                    let currentSegment = [];
                    let duplicateSegment = [];
                    for (let i = 0; i < seg.length; i++) {
                        let p = seg[i];
                        let base = p.x.split('_')[0];
                        if (base === '基隆' || base === '三坑') {
                            if (comesFromEast) {
                                currentSegment.push({ ...p, x: base + '_top' });
                                duplicateSegment.push({ ...p, x: base + '_bottom' });
                            } else {
                                currentSegment.push({ ...p, x: base + '_bottom' });
                                duplicateSegment.push({ ...p, x: base + '_top' });
                            }
                        } else if (base === '八堵') {
                            if (comesFromEast) {
                                currentSegment.push({ ...p, x: '八堵_top' });
                                duplicateSegment.push({ ...p, x: '八堵' });
                            } else {
                                currentSegment.push({ ...p, x: '八堵' });
                                duplicateSegment.push({ ...p, x: '八堵_top' });
                            }
                        } else {
                            currentSegment.push(p);
                        }
                    }
                    if (currentSegment.length > 0) nextSegments.push(currentSegment);
                    if (duplicateSegment.length > 0) nextSegments.push(duplicateSegment);
                } else {
                    nextSegments.push(seg);
                }
            });
            finalSegments = nextSegments;
        }

        return finalSegments;
    }

    function fixMonotonicY(data) {
        if (!data) return;
        data.forEach(train => {
            let current_y_offset = 0;
            let prev_raw_y = -1;
            train.data.forEach(p => {
                if (p.y !== -1) {
                    if (prev_raw_y !== -1 && p.y < prev_raw_y - 720) {
                        current_y_offset += 1440;
                    }
                    prev_raw_y = p.y;
                    p.y += current_y_offset;
                }
            });
        });
    }

    const response = await fetch(realtime ? `data_new/${dateSelector.value.replace(/-/g, '')}_realtime.json` : `data_new/${dateSelector.value.replace(/-/g, '')}.json`);
    let rawData = await response.json();
    await new Promise(r => requestAnimationFrame(r));
    fixMonotonicY(rawData);
    
    const yresponse = await fetch(realtime ? `data_new/${yesterday.replace(/-/g, '')}_realtime.json` : `data_new/${yesterday.replace(/-/g, '')}.json`);
    let yrawData = await yresponse.json();
    await new Promise(r => requestAnimationFrame(r));
    fixMonotonicY(yrawData);
    await new Promise(r => requestAnimationFrame(r));

    try {
        const stationsRes = await fetch('stations.json');
        const stationsJson = await stationsRes.json();
        stationsJson.forEach(s => {
            let sName = s.stationName;
            if (sName === '台北') sName = '臺北';
            if (sName === '台中') sName = '臺中';
            if (sName === '台南') sName = '臺南';
            if (sName === '台东') sName = '臺東';
            if (sName === '台東') sName = '臺東';
            sName = sName.replace(/台/g, '臺');
            stationCodeToName[s.stationCode] = sName;
            stationInfoByName[sName] = s;
        });
    } catch (err) {
        console.error("Failed to load stations data", err);
    }

    async function loadCalcSchedule() {
        if (!calcScheduleData) {
            try {
                const calcRes = await fetch('CalcSchedule.json');
                const calcJson = await calcRes.json();
                calcScheduleData = {};
                calcJson.forEach(t => {
                    calcScheduleData[t.No] = t.data;
                });
            } catch (err) {
                console.error("Failed to load CalcSchedule data", err);
            }
        }
    }
    let todaySegments = [];
    let yesterdaySegments = [];

    function getTrainTypeName(train, number) {
        const trainMapping = {
            6094: '鳴日號', 6011: '鳴日號', 6006: '鳴日號', 6007: '鳴日號', 6022: '鳴日號',
            6010: '鳴日號', 6081: '鳴日號', 6057: '鳴日號', 6088: '鳴日號', 6090: '鳴日號',
            6099: '鳴日號', 6050: '鳴日號', 6075: '鳴日號',
            5898: '藍皮解憂', 5899: '藍皮解憂',
            6629: '海風號', 6630: '海風號', 6637: '海風號', 6638: '海風號', 6652: '海風號', 6655: '海風號',
            6631: '山嵐號', 6632: '山嵐號', 6633: '山嵐號', 6676: '山嵐號', 6677: '山嵐號',
            4666: '仲夏寶島', 4667: '仲夏寶島',
            1: '環島之星', 2: '環島之星',
            6611: '慧燈專車', 6615: '慧燈專車', 6616: '慧燈專車'
        };
        const numKey = Number(number);
        if (trainMapping[numKey]) {
            return `${trainMapping[numKey]} ${numKey}`;
        }
        return `${train} ${numKey}`;
    }

    async function loadData() {
        const filename = getSelectedDateFilename();
        const yfilename = getYesterdayFilename();
        try {
            const response = await fetch(filename);
            rawData = await response.json();
            fixMonotonicY(rawData);
        } catch (err) {
            alert("可選擇日期範圍: 2026/06/01 ~ ");
            console.error(err);
        }
        try {
            const yresponse = await fetch(yfilename);
            yrawData = await yresponse.json();
            fixMonotonicY(yrawData);
        } catch (err) {
            console.error(err);
        }
        if (state.selectedLine) { state.selectedLine = rawData.find(t => t.number === state.selectedLine.number) || yrawData.find(t => t.number === state.selectedLine.number) || null; }
        updateInfoBox();
        renderDataLayers();
        renderBaseLayers();
    }

    state.currentTimeMinutes = today.getHours() * 60 + today.getMinutes();
    if (state.currentTimeMinutes < 120) state.currentTimeMinutes += 1440;
    const deckInstance = new deck.DeckGL({
        container: 'container',
        views: [new deck.OrthographicView({ id: 'ortho' })],
        initialViewState: {
            target: [state.currentTimeMinutes * 3 + 180, state.initialY, 0],
            zoom: 0, minZoom: -3.75, maxZoom: 1.5
        },
        controller: true,
        pickingRadius: 10,
        getTooltip: ({ object, layer }) => {
            if (!object) return null;
            if (layer && layer.id.startsWith('station-layer')) {
                return { text: object[0].split('_')[0] };
            }
            if (object.number !== undefined) {
                return {
                    text: `${getTrainTypeName(object.train, object.number)}`
                };
            } else if (object.text === undefined) {
                return {
                    text: `${String(object).split(',')[0]}`
                }
            }
        },

        onViewStateChange: ({ viewState }) => {
            if (viewState.target[1] > state.period) viewState.target[1] -= state.period;
            else if (viewState.target[1] < 0) viewState.target[1] += state.period;
            viewState.target[0] = Math.min(Math.max(viewState.target[0], 20), 5020);
            state.currentZoom = viewState.zoom;

            if (DOM.viewMonitor.style.display === 'block') {
                DOM.valZoom.innerText = viewState.zoom.toFixed(2);
                DOM.valX.innerText = Math.round(viewState.target[0]);
                DOM.valY.innerText = Math.round(viewState.target[1]);
            }

            const clampedZoom = Math.min(Math.max(viewState.zoom, -3.75), 1.5);
            const nextViewState = { ...viewState, zoom: clampedZoom };
            deckInstance.setProps({ viewState: nextViewState });
            renderBaseLayers();
        },

        onClick: (info) => {
            if (info.object && (info.layer.id.includes('main-path-layer') || info.layer.id.includes('json-layer'))) {
                window.selectTrain(info.object.number, true);
            } else if (info.object && (info.layer.id.includes('station-layer') || info.layer.id.includes('station-labels'))) {
                const stationName = Array.isArray(info.object) ? info.object[0] : info.object.text;
                window.selectStation(stationName.split('_')[0], false);
            } else {
                state.selectedLine = null;
                state.showSchedule = false;
                state.focusedStation = null;
                updateBottomPanel();
                updateStationGridData();
                renderDataLayers();
                renderBaseLayers();
                updateInfoBox();
            }
        }
    });

    function syncPillStyles() {
        DOM.trainPills.forEach(pill => {
            const type = pill.getAttribute('data-type');
            if (state.enabledTypes.has(type)) {
                pill.classList.add('active');
                pill.style.backgroundColor = colorPalette[type];
                pill.style.color = isLight ? '#ddd' : '#222';
            } else {
                pill.classList.remove('active');
                pill.style.backgroundColor = isLight ? '#ccc' : '#333';
                pill.style.color = '#888';
            }
        });
    }

    function updateInfoBox() {
        DOM.btnClearSelection.style.display = 'block';
        const formatTime = (totalMin) => {
            const h = Math.floor((totalMin % 1440) / 60);
            const m = Math.floor(totalMin % 60);
            return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        };
        if (state.selectedLine) {
            const daysLabel = ["加", "一", "二", "三", "四", "五", "六", "日", "例"];
            const sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const viaText = state.selectedLine.info.via !== '-' ? `(${(state.selectedLine.info.via).replace(/線/g, '')})` : '';
            const viaColor = (viaText.includes("山")) ? "#4CAF50"
                : (viaText.includes("海")) ? "#2196F3"
                    : (viaText.includes("成追")) ? "#FF5722" : "#888";
            let rawNote = state.selectedLine.info.note || "";
            let specialNote = (rawNote.includes('。') ? rawNote.slice(0, rawNote.indexOf('。')) : "");

            const tooltipAttr = specialNote ? `data-tooltip="${specialNote.trim()}" onclick="this.classList.add('show-tooltip'); setTimeout(() => { this.classList.remove('show-tooltip'); }, 3000);"` : '';
            let boxesHtml = `<div class="day-container" ${tooltipAttr}>`;
            sequence.forEach(num => {
                const driveStr = state.selectedLine.info.drive;
                const isActive = driveStr.includes(num.toString());
                if (num === 8) {
                    boxesHtml += `<div class="day-box ${isActive ? 'active' : ''} ${driveStr.includes("9") ? 'special-rule' : ''}">${daysLabel[num]}</div>`;
                } else {
                    boxesHtml += `<div class="day-box ${isActive ? 'active' : ''}">${daysLabel[num]}</div>`;
                }
            });
            boxesHtml += '</div>';
            let iconsHtml = '<div class="service-container">';
            Object.entries(serviceIcons).forEach(([name, url]) => {
                if (state.selectedLine.info.img.includes(name) || state.selectedLine.info.note.includes(name)) {
                    iconsHtml += `
                        <div class="service-box" title="${name}">
                            <img src="${url}" alt="${name}">
                        </div>`;
                }
            });
            iconsHtml += '</div>';
            const stopsMap = getTrainData(state.selectedLine).reduce((acc, curr) => {
                if (curr.isVirtual) return acc;
                if (!acc[curr.x]) acc[curr.x] = { arr: null, dep: null };
                if (acc[curr.x].arr === null) acc[curr.x].arr = Math.ceil(curr.y);
                else acc[curr.x].dep = Math.floor(curr.y);
                return acc;
            }, {});
            const stationsHtml = Object.entries(stopsMap).map(([name, times]) => {
                const arrStr = times.arr !== null ? formatTime(times.arr) : "--:--";
                const depStr = times.dep !== null ? formatTime(times.dep) : (times.arr !== null ? formatTime(times.arr) : "--:--");
                const isFocused = name === state.focusedStation ? 'border-bottom: 2px solid #fff; font-weight: bold;' : '';
                return `
                    <span onclick="selectStation('${name}')"
                        style="width: 50px; text-align: center; display: inline-block; white-space: nowrap;
                        ${isFocused} cursor: pointer; transition: opacity 0.2s;"
                        onmouseover="this.style.opacity=0.6" onmouseout="this.style.opacity=1">
                        <span style="font-size: 0.8em;">${name}<br><span style="font-size: 0.6em; opacity: 0.7;">${arrStr}<br>${depStr}</span></span>
                    </span>
                `;
            }).join('<b style="opacity: 0.5; align-self: center;">→</b>');
            DOM.infoBox.innerHTML = `
                <div style="display: flex; align-items: stretch; gap: 15px;">
                    <span class="info-segment train-id" style="color: ${colorPalette[state.selectedLine.train]}; 
                        position: sticky; left: -15px; z-index: 25; gap: 15px; background: var(--panel-bg); 
                        border-right: 1px solid var(--border-color); padding: 0 20px; height: 15vh; white-space: nowrap; ">
                        <strong>${getTrainTypeName(state.selectedLine.train, state.selectedLine.number)}</strong>
                    </span>
                    <span style="display: flex; align-items: center;">
                        <span class="info-segment via-label" style="color: ${viaColor}">${viaText}</span>
                        <span class="info-segment route-display">${state.selectedLine.info.start} → ${state.selectedLine.info.end}</span>
                        ${boxesHtml}
                        ${iconsHtml}
                    </span>
                    <span style="display: flex; flex-direction: row; align-items: center; padding-left: 20px; padding-right: 50vw;">${stationsHtml}</span>
                </div>
            `;
        }
        else if (state.focusedStation) {
            if (notime) {
                try {
                    const allAvailableTrains = [...todaySegments, ...yesterdaySegments];
                    const typeCounts = {};
                    const startCounts = {};
                    const orderedTypes = Array.from(DOM.trainPills).map(p => p.getAttribute('data-type'));

                    rawData.forEach(train => {
                        if (state.enabledTypes.has(train.train)) {
                            const stop = getTrainData(train).findLast(p => !p.isVirtual && p.x.split('_')[0] === state.focusedStation);
                            if (stop) {
                                typeCounts[train.train] = (typeCounts[train.train] || 0) + 1;
                                const firstValid = getTrainData(train).find(p => !p.isVirtual);
                                if (firstValid && firstValid.x.split('_')[0] === state.focusedStation) {
                                    startCounts[train.train] = (startCounts[train.train] || 0) + 1;
                                }
                            }
                        }
                    });

                    const formatCounts = (counts) => orderedTypes
                        .filter(type => counts[type] > 0)
                        .map(type => `<span style="color: ${colorPalette[type]}">${type}：${counts[type]}</span>`)
                        .join(' &nbsp; ');

                    let line1 = formatCounts(typeCounts);
                    let line2 = formatCounts(startCounts);

                    let line1Text = line1 ? `今日運行列車數量：${line1}` : `今日運行列車數量：無`;
                    let line2Text = line2 ? `本站始發列車數量：${line2}` : `本站始發列車數量：無`;

                    DOM.stationBox.innerHTML = `
                        <div style="display: flex; align-items: stretch; gap: 15px;">
                            <div class="info-segment" style="position: sticky; left: -15px; display: flex; align-items: center; z-index: 20;
                                font-size: 1.3em; white-space: nowrap; background: var(--panel-bg); border-right: 1px solid var(--border-color); 
                                padding-left: 20px; padding-right: 20px; height: 15vh; ">
                                <strong>${state.focusedStation}站</strong>
                            </div>
                            <div style="display: flex; flex-direction: column; justify-content: center; line-height: 1.6; font-size: 0.95em; padding-right: 30vw">
                                <div>${line1Text}</div>
                                <div>${line2Text}</div>
                            </div>
                        </div>
                    `;
                } catch (e) {
                    DOM.stationBox.innerHTML = `<div style="color: red; padding: 20px;">Error: ${e.message} <br> ${e.stack}</div>`;
                }
            } else {
                const allAvailableTrains = [...todaySegments, ...yesterdaySegments];
                const seenTrainNumbers = new Set();
                const nextTrains = allAvailableTrains
                    .map(train => {
                        const stop = train.data.findLast(p => !p.isVirtual && p.x.split('_')[0] === state.focusedStation);
                        const stopDistances = train.data.filter(p => !p.isVirtual).map(p => allStationDistances[p.x]).filter(d => d !== undefined);
                        return stop ? {
                            number: train.number,
                            type: train.train,
                            dest: train.info.end.slice(6),
                            time: stop.y,
                            isClockwise: (allStationDistances[train.info.start.slice(6)] > allStationDistances[train.info.end.slice(6)]) ^ (Math.max(...stopDistances) - Math.min(...stopDistances) > 6000)
                        } : null;
                    })
                    .filter(t => {
                        if (t !== null && t.time >= state.currentTimeMinutes && !seenTrainNumbers.has(t.number)) {
                            seenTrainNumbers.add(t.number);
                            return true;
                        }
                        return false;
                    })
                    .sort((a, b) => a.time - b.time);
                const cwTrains = nextTrains.filter(t => t.isClockwise);
                const ccwTrains = nextTrains.filter(t => !t.isClockwise);
                const cwtext = nextTrains.length > 0 ? cwTrains.map(t => `
            <span class="panel-train-info" onclick="selectTrain('${t.number}')"
                style="cursor: pointer; transition: opacity 0.2s;"
                onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
                <span style="color: ${colorPalette[t.type]}; opacity: ${t.dest == state.focusedStation ? 0.5 : 1};">${getTrainTypeName(t.type, t.number)}</span>
                <span style="opacity: ${t.dest == state.focusedStation ? 0.5 : 1};"> ${formatTime(t.time)} 往 ${t.dest}</span>
            </span>`).join(' <b style="opacity: 0.5;">>></b> ') : "";
                const ccwtext = nextTrains.length > 0 ? ccwTrains.map(t => `
            <span class="panel-train-info" onclick="selectTrain('${t.number}')"
                style="cursor: pointer; transition: opacity 0.2s;"
                onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
                <span style="color: ${colorPalette[t.type]}; opacity: ${t.dest == state.focusedStation ? 0.5 : 1};">${getTrainTypeName(t.type, t.number)}</span>
                <span style="opacity: ${t.dest == state.focusedStation ? 0.5 : 1};"> ${formatTime(t.time)} 往 ${t.dest}</span>
            </span>`).join(' <b style="opacity: 0.5;">>></b> ') : "";
                let actualStationName = state.focusedStation === "臺北_環島" ? "臺北" : state.focusedStation;
                let stationInfo = stationInfoByName[actualStationName];
                let cwTitle = stationInfo && stationInfo.CW ? `順行 往 ${stationInfo.CW}` : `順行`;
                let ccwTitle = stationInfo && stationInfo.CCW ? `逆行 往 ${stationInfo.CCW}` : `逆行`;

                let maxLen = Math.max(cwTitle.length, ccwTitle.length) - 2;
                let cwTitleSpan = `<span style="display: inline-block; width: ${maxLen}em;">${cwTitle}</span>`;
                let ccwTitleSpan = `<span style="display: inline-block; width: ${maxLen}em;">${ccwTitle}</span>`;

                let trainsHtml = nextTrains.length == 0 ? `<span class="placeholder" style="padding-left: 10px;">今日無後續車次</span>`
                    : cwtext != "" && ccwtext == "" ? `<span>${cwTitleSpan} <b style="opacity: 0.5;">>></b> ${cwtext}<br>${ccwTitleSpan} 無後續車次</span>`
                        : cwtext == "" && ccwtext != "" ? `<span>${cwTitleSpan} 無後續車次<br>${ccwTitleSpan} <b style="opacity: 0.5;">>></b> ${ccwtext}</span>`
                            : `<span>${cwTitleSpan} <b style="opacity: 0.5;">>></b> ${cwtext}<br>${ccwTitleSpan} <b style="opacity: 0.5;">>></b> ${ccwtext}</span>`;

                DOM.stationBox.innerHTML = `
                <div style="display: flex; align-items: stretch; gap: 15px;">
                    <div class="info-segment" style="position: sticky; left: -15px; display: flex; align-items: center; z-index: 20;
                        font-size: 1.3em; white-space: nowrap; background: var(--panel-bg); border-right: 1px solid var(--border-color); 
                        padding-left: 20px; padding-right: 20px; height: 15vh; ">
                        <strong>${state.focusedStation}站</strong>
                    </div>
                    <div style="display: flex; flex-direction: row; gap: 15px; align-items: center; line-height: 1.4; font-size: 0.95em; padding-right: 30vw">
                        ${trainsHtml}
                    </div>
                </div>
            `;
            }
        } else {
            DOM.stationBox.innerHTML = '';
            DOM.infoBox.innerHTML = '';

            const nullView = document.getElementById('view-null');
            if (nullView) {
                if (notime) {
                    const typeCounts = {};
                    const orderedTypes = Array.from(DOM.trainPills).map(p => p.getAttribute('data-type'));
                    rawData.forEach(train => {
                        if (state.enabledTypes.has(train.train)) {
                            typeCounts[train.train] = (typeCounts[train.train] || 0) + 1;
                        }
                    });

                    const formatCounts = (counts) => orderedTypes
                        .filter(type => counts[type] > 0)
                        .map(type => `<span style="color: ${colorPalette[type]}">${type}：${counts[type]}</span>`)
                        .join(' &nbsp; ');

                    let line1 = formatCounts(typeCounts);
                    let line1Text = line1 ? `今日運行列車數量：${line1}` : `今日運行列車數量：無`;

                    nullView.style.opacity = '';
                    nullView.style.justifyContent = '';
                    nullView.innerHTML = `
                        <h2>列車資訊</h2>
                        <div class="scrollable">
                            <div style="display: flex; align-items: stretch; gap: 15px;">
                                <span style="display: flex; align-items: center; padding: 0 10px; white-space: nowrap;">
                                    ${line1Text}
                                </span>
                            </div>
                        </div>
                    `;
                } else {
                    nullView.style.opacity = '';
                    nullView.style.justifyContent = '';
                    nullView.innerHTML = `
                        <h2>列車資訊</h2>
                        <div class="scrollable">
                            <div style="display: flex; align-items: stretch; gap: 15px;">
                                <span style="display: flex; align-items: center; padding: 0 10px; white-space: nowrap;">
                                    點選列車或車站以顯示資訊
                                </span>
                            </div>
                        </div>
                    `;
                }
            }
        }
    }

    function updateStationGridData() {
        Object.keys(gridData).forEach(key => Array.isArray(gridData[key]) ? gridData[key] = [] : null);

        Object.entries(state.stationDistances).forEach(([name, yValue]) => {
            if (state.stationList.has(name) && name !== "臺北_環島") {
                const displayName = name.split('_')[0];
                const entry = { text: displayName, y: yValue };
                if (mainStationList.has(displayName)) {
                    gridData.mainLabelData.push(entry);
                    gridData.leftonlyLabelData.push(entry);
                }
                gridData.sparseLabelData.push(entry);
                gridData.normalLabelData.push(entry);
                gridData.denseLabelData.push(entry);
            }
        });

        const distances = Array.from(state.stationList).map(name => state.stationDistances[name]);
        gridData.minDistance = Math.min(...distances);
        gridData.maxDistance = Math.max(...distances);

        let startX = 120;
        let endX = 1560;

        if (notime) {
            startX = state.focusedStation ? 120 - 1440 : 120;
            endX = 1560;
        }

        for (let x = startX; x <= endX; x += 10) {
            const path = [[x * 3, gridData.minDistance - state.period], [x * 3, gridData.maxDistance + state.period]];
            (x % 60 === 0) ? gridData.thickLines.push({ path }) : gridData.thinLines.push({ path });
        }

        for (let x = startX; x <= endX; x += 10) {
            let labelText = '';
            if (notime) {
                let absX = Math.abs(x - 120);
                let sign = x - 120 < 0 ? '-' : '';
                labelText = `${sign}${Math.floor(absX / 60)}:${(absX % 60).toString().padStart(2, '0')}`;
            } else {
                labelText = `${Math.floor(x / 60).toString().padStart(2, '0')}${(x % 60).toString().padStart(2, '0')}`;
            }
            const label = { text: labelText, x: (x * 3) + 5 };
            gridData.denseLabels.push(label);
            if (x % 30 === 0) gridData.normalLabels.push(label);
            if (x % 60 === 0) {
                gridData.sparseLabels.push(label);
                if (x % 120 === 0) gridData.simpleLabels.push(label);
            }
        }
    }

    const panel = document.getElementById('bottompanel');
    panel.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            panel.scrollLeft += event.deltaY * 3;
        }
    }, { passive: false });

    DOM.typeFilters.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const type = e.target.value;
            e.target.checked ? state.enabledTypes.add(type) : state.enabledTypes.delete(type);
            if (state.selectedLine && state.selectedLine.type === type && !e.target.checked) {
                state.selectedLine = null;
                updateInfoBox();
            }
            renderDataLayers();
        });
    });

    DOM.pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const type = pill.getAttribute('data-type');
            if (state.enabledTypes.has(type)) {
                state.enabledTypes.delete(type);
                if (state.selectedLine && state.selectedLine.train === type) {
                    state.selectedLine = null;
                }
            } else {
                state.enabledTypes.add(type);
            }
            syncPillStyles();
            renderDataLayers();
            updateInfoBox();
        });
    });

    dateSelector.addEventListener('change', () => { loadData(); });

    DOM.btnSelectAll.addEventListener('click', () => {
        Object.keys(colorPalette).forEach(type => state.enabledTypes.add(type));
        syncPillStyles();
        renderDataLayers();
        updateInfoBox();
    });
    DOM.btnDeselectAll.addEventListener('click', () => {
        state.enabledTypes.clear();
        state.selectedLine = null;
        syncPillStyles();
        renderDataLayers();
        updateInfoBox();
    });

    let isMountain = true;
    DOM.linePills.forEach(pill => {
        pill.addEventListener('click', () => {
            DOM.linePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const lineType = pill.getAttribute('data-line');
            isMountain = lineType === 'mountain';
            calculateDynamicDistances();

            if (state.selectedLine) {
                const updatedMatch = rawData.find(t =>
                    t.number === state.selectedLine.number &&
                    getTrainData(t).some(p => state.stationList.has(p.x) || state.stationList.has(p.x + '_top') || state.stationList.has(p.x + '_bottom'))
                );
                const yupdatedMatch = yrawData.find(t =>
                    t.number === state.selectedLine.number &&
                    getTrainData(t).some(p => state.stationList.has(p.x) || state.stationList.has(p.x + '_top') || state.stationList.has(p.x + '_bottom'))
                );
                if (updatedMatch) { state.selectedLine = updatedMatch; }
                else if (yupdatedMatch) { state.selectedLine = yupdatedMatch; }
                else {
                    state.selectedLine = null;
                    state.showSchedule = false;
                    updateInfoBox();
                }
            }
            updateStationGridData();
            updateInfoBox();
            renderDataLayers();
            renderBaseLayers();
        });
    });

    DOM.branchPills.forEach(pill => {
        pill.addEventListener('click', () => {
            pill.classList.toggle('active');
            const branch = pill.getAttribute('data-branch');
            if (pill.classList.contains('active')) {
                state.activeBranches.add(branch);
            } else {
                state.activeBranches.delete(branch);
            }
            calculateDynamicDistances();

            updateStationGridData();
            updateInfoBox();
            renderDataLayers();
            renderBaseLayers();
        });
    });

    DOM.btnClearSelection.onclick = () => {
        state.selectedLine = null;
        state.showSchedule = false;
        updateInfoBox();
        updateBottomPanel();
        renderDataLayers();
    };

    function updateAdvancedButtons() {
        const btnModeTimetable = document.getElementById('btn-mode-timetable');
        const btnModeDrivingTime = document.getElementById('btn-mode-driving-time');
        const btnModeActualDriving = document.getElementById('btn-mode-actual-driving');
        const optionsContainer = document.getElementById('driving-time-options');
        const btnStartTrain = document.getElementById('btn-start-train');
        const btnTrainConnection = document.getElementById('btn-train-connection');

        if (btnModeTimetable && btnModeDrivingTime && btnModeActualDriving && optionsContainer) {
            if (notime) {
                btnModeTimetable.classList.remove('active');
                btnModeDrivingTime.classList.add('active');
                btnModeActualDriving.classList.remove('active');
                optionsContainer.style.display = 'flex';
            } else if (actualDriving) {
                btnModeTimetable.classList.remove('active');
                btnModeDrivingTime.classList.remove('active');
                btnModeActualDriving.classList.add('active');
                optionsContainer.style.display = 'none';
            } else {
                btnModeTimetable.classList.add('active');
                btnModeDrivingTime.classList.remove('active');
                btnModeActualDriving.classList.remove('active');
                optionsContainer.style.display = 'none';
            }
        }

        if (btnStartTrain) {
            if (onlystart) {
                btnStartTrain.classList.add('active');
            } else {
                btnStartTrain.classList.remove('active');
            }
        }

        if (btnTrainConnection) {
            if (trainConnection) {
                btnTrainConnection.classList.add('active');
            } else {
                btnTrainConnection.classList.remove('active');
            }
        }
    }

    const btnModeTimetable = document.getElementById('btn-mode-timetable');
    if (btnModeTimetable) {
        btnModeTimetable.addEventListener('click', () => {
            if (notime || actualDriving) {
                notime = false;
                onlystart = false;
                trainConnection = false;
                actualDriving = false;
                state.showSchedule = true;
                updateAdvancedButtons();
                updateStationGridData();
                renderBaseLayers();
                renderDataLayers();
                updateInfoBox();
            }
        });
    }

    const btnModeDrivingTime = document.getElementById('btn-mode-driving-time');
    if (btnModeDrivingTime) {
        btnModeDrivingTime.addEventListener('click', () => {
            if (!notime) {
                notime = true;
                actualDriving = false;
                state.showSchedule = false;
                updateAdvancedButtons();
                updateStationGridData();
                renderBaseLayers();
                renderDataLayers();
                updateInfoBox();
            }
        });
    }

    const btnModeActualDriving = document.getElementById('btn-mode-actual-driving');
    if (btnModeActualDriving) {
        btnModeActualDriving.addEventListener('click', () => {
            if (!actualDriving) {
                notime = false;
                onlystart = false;
                trainConnection = false;
                actualDriving = true;
                state.showSchedule = true;
                loadCalcSchedule().then(() => {
                    updateAdvancedButtons();
                    updateStationGridData();
                    renderBaseLayers();
                    renderDataLayers();
                    updateInfoBox();
                });
            }
        });
    }

    const btnStartTrain = document.getElementById('btn-start-train');
    if (btnStartTrain) {
        btnStartTrain.addEventListener('click', () => {
            if (notime) {
                onlystart = !onlystart;
                updateAdvancedButtons();
                updateStationGridData();
                renderBaseLayers();
                renderDataLayers();
                updateInfoBox();
            }
        });
    }

    const btnTrainConnection = document.getElementById('btn-train-connection');
    if (btnTrainConnection) {
        btnTrainConnection.addEventListener('click', () => {
            if (notime) {
                trainConnection = !trainConnection;
                updateAdvancedButtons();
                renderDataLayers();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'h' && state.selectedLine) {
            state.showSchedule = !state.showSchedule;
            renderDataLayers();
        }
        if (key === 'm') {
            DOM.viewMonitor.style.display = (DOM.viewMonitor.style.display === 'block') ? 'none' : 'block';
        }
        if (key === 'r') {
            // realtime = !realtime;
            // loadData();
        }
        if (key === 'o') {
            notime = false;
            onlystart = false;
            trainConnection = false;
            state.showSchedule = true;
            updateAdvancedButtons();
            updateStationGridData();
            renderBaseLayers();
            renderDataLayers();
        }
        if (key === 's') {
            if (notime) {
                onlystart = !onlystart;
                updateAdvancedButtons();
                updateStationGridData();
                renderBaseLayers();
                renderDataLayers();
            }
        }
        if (key === 't') {
            if (!notime) {
                notime = true;
                state.showSchedule = false;
            } else {
                notime = false;
                onlystart = false;
                trainConnection = false;
                state.showSchedule = true;
            }
            updateAdvancedButtons();
            updateStationGridData();
            renderBaseLayers();
            renderDataLayers();
        }
        if (key === "escape" || e.keyCode === 27) {
            state.focusedStation = null;
            state.selectedLine = null;
            state.showSchedule = false;
            const infoModal = document.getElementById('info-modal');
            if (infoModal) infoModal.style.display = 'none';
            const questionModal = document.getElementById('question-modal');
            if (questionModal) questionModal.style.display = 'none';
            updateInfoBox();
            updateBottomPanel();
            updateStationGridData();
            renderBaseLayers();
            renderDataLayers();
        }
    });

    window.triggerRender = function () {
        renderDataLayers();
        renderBaseLayers();
    };

    function processActualDriving(dataList) {
        if (!dataList || !calcScheduleData) return;
        dataList.forEach(train => {
            if (train.actualData) return;
            let calcDataRaw = calcScheduleData[train.number];
            if (!calcDataRaw) {
                train.actualData = train.data;
                return;
            }
            let originalStops = [];
            let i = 0;
            while (i < train.data.length) {
                let p1 = train.data[i];
                let p2 = (i + 1 < train.data.length && train.data[i + 1].x === p1.x) ? train.data[i + 1] : p1;
                originalStops.push({ x: p1.x, arr: p1.y, dep: p2.y, isSeam: p1.isSeam });
                i += (p2 === p1) ? 1 : 2;
            }
            let calcStops = [];
            calcDataRaw.forEach(p => {
                let stName = stationCodeToName[p.StationID];
                if (stName) {
                    let [h, m, s] = p.Time.split(':').map(Number);
                    calcStops.push({ x: stName, time: h * 60 + m + s / 60 });
                }
            });
            if (calcStops.length === 0) {
                train.actualData = train.data;
                return;
            }
            let calcOffset = 0;
            let firstMatchOrig = originalStops.find(o => calcStops.some(c => c.x === o.x.split('_')[0]));
            if (firstMatchOrig) {
                let firstCalc = calcStops.find(c => c.x === firstMatchOrig.x.split('_')[0]);
                calcOffset = Math.round((firstMatchOrig.dep - firstCalc.time) / 1440) * 1440;
            }
            let calc_prev_raw_y = -1;
            let calc_current_offset = calcOffset;
            calcStops.forEach(p => {
                let raw_y = p.time;
                if (calc_prev_raw_y !== -1 && raw_y < calc_prev_raw_y - 720) calc_current_offset += 1440;
                else if (calc_prev_raw_y !== -1 && raw_y > calc_prev_raw_y + 720) calc_current_offset -= 1440;
                calc_prev_raw_y = raw_y;
                p.time = raw_y + calc_current_offset;
            });
            let mergedStops = [];
            let origIdx = 0;
            let calcIdx = 0;
            while (origIdx < originalStops.length || calcIdx < calcStops.length) {
                let orig = originalStops[origIdx];
                let calc = calcStops[calcIdx];
                if (orig && calc && orig.x.split('_')[0] === calc.x) {
                    let duration = orig.dep - orig.arr;
                    if (duration > 0 && duration < 1) duration = 1;
                    mergedStops.push({ x: orig.x, arr: calc.time - duration, dep: calc.time, isSeam: orig.isSeam, isMatched: true, delay: calc.time - orig.dep });
                    origIdx++; calcIdx++;
                } else {
                    let origInCalc = orig ? calcStops.slice(calcIdx).findIndex(c => c.x === orig.x.split('_')[0]) : -1;
                    let calcInOrig = calc ? originalStops.slice(origIdx).findIndex(o => o.x.split('_')[0] === calc.x) : -1;

                    if (!calc) {
                        mergedStops.push({ x: orig.x, arr: orig.arr, dep: orig.dep, isSeam: orig.isSeam, isOrigOnly: true });
                        origIdx++;
                    } else if (!orig) {
                        mergedStops.push({ x: calc.x, arr: calc.time, dep: calc.time, isVirtual: true });
                        calcIdx++;
                    } else if (calcInOrig === -1 && origInCalc !== -1) {
                        mergedStops.push({ x: calc.x, arr: calc.time, dep: calc.time, isVirtual: true });
                        calcIdx++;
                    } else if (origInCalc === -1 && calcInOrig !== -1) {
                        mergedStops.push({ x: orig.x, arr: orig.arr, dep: orig.dep, isSeam: orig.isSeam, isOrigOnly: true });
                        origIdx++;
                    } else {
                        if (calc.time < orig.arr) {
                            mergedStops.push({ x: calc.x, arr: calc.time, dep: calc.time, isVirtual: true });
                            calcIdx++;
                        } else {
                            mergedStops.push({ x: orig.x, arr: orig.arr, dep: orig.dep, isSeam: orig.isSeam, isOrigOnly: true });
                            origIdx++;
                        }
                    }
                }
            }
            for (let j = 0; j < mergedStops.length; j++) {
                if (mergedStops[j].isOrigOnly) {
                    let prevMatchedIdx = -1;
                    for (let k = j - 1; k >= 0; k--) {
                        if (mergedStops[k].isMatched) { prevMatchedIdx = k; break; }
                    }
                    let nextMatchedIdx = -1;
                    for (let k = j + 1; k < mergedStops.length; k++) {
                        if (mergedStops[k].isMatched) { nextMatchedIdx = k; break; }
                    }

                    let offset = 0;
                    if (prevMatchedIdx !== -1 && nextMatchedIdx !== -1) {
                        offset = (mergedStops[prevMatchedIdx].delay + mergedStops[nextMatchedIdx].delay) / 2;
                    } else if (prevMatchedIdx !== -1) {
                        offset = mergedStops[prevMatchedIdx].delay;
                    } else if (nextMatchedIdx !== -1) {
                        offset = mergedStops[nextMatchedIdx].delay;
                    }

                    mergedStops[j].arr += offset;
                    mergedStops[j].dep += offset;
                }
            }
            let newActualData = [];
            mergedStops.forEach(stop => {
                let p1 = { x: stop.x, y: stop.arr };
                if (stop.isSeam) p1.isSeam = true;
                if (stop.isVirtual) p1.isVirtual = true;
                let p2 = { x: stop.x, y: stop.dep };
                if (stop.isVirtual) p2.isVirtual = true;
                newActualData.push(p1);
                if (p2.y !== p1.y) newActualData.push(p2);
                else newActualData.push({ x: stop.x, y: stop.arr, isVirtual: stop.isVirtual });
            });
            train.actualData = newActualData;
        });
    }

    function getTrainData(train) {
        if (!train) return [];
        if (actualDriving) {
            if (!train.actualData) processActualDriving([train]);
            return train.actualData || train.data;
        }
        return train.data;
    }

    function renderDataLayers() {
        const currentVS = deckInstance.props.viewState || state.viewState || { target: [state.currentTimeMinutes * 3 + 180, state.initialY, 0], zoom: 0 };
        const container = document.getElementById('container');
        const width = container ? container.clientWidth : window.innerWidth;
        const scale = Math.pow(2, currentVS.zoom);
        const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
        const isMobile = window.innerWidth <= 768;
        const visibleRightOffset = (isCollapsed || isMobile) ? width / 2 : width * 0.25;

        const leftX = currentVS.target[0] - (width / 2) / scale;
        const rightX = currentVS.target[0] + visibleRightOffset / scale;

        const yOffsets = [-state.period, 0, state.period];

        todaySegments = rawData
            .filter(train => {
                const isEnabled = state.enabledTypes.has(train.train);
                const passesStation = state.focusedStation ? getTrainData(train).some(p => !p.isVirtual && p.x.split('_')[0] === state.focusedStation) : true;
                const firstValid = getTrainData(train).find(p => !p.isVirtual);
                const startingStation = (notime && state.focusedStation && onlystart) ? (firstValid && firstValid.x.split('_')[0] === state.focusedStation) : true;
                return isEnabled && passesStation && startingStation;
            })
            .flatMap(train => {
                let globalFirstY = null;
                if (notime) {
                    const firstValidPoint = getTrainData(train).find(p => p.y !== -1);
                    if (!firstValidPoint) return [];
                    const currentStation = state.focusedStation ? getTrainData(train).find(p => p.x.split('_')[0] === state.focusedStation) : null;
                    globalFirstY = currentStation ? currentStation.y : firstValidPoint.y;
                }

                const preprocessedSegments = preprocessTrainData(getTrainData(train));
                return preprocessedSegments.flatMap(segment => {
                    const filteredData = segment.filter((p, index) =>
                        (index === 0 || p.x !== segment[index - 1].x) && state.stationList.has(p.x)
                    );

                    if (notime) {
                        if (filteredData.length === 0) return [];
                        let cumulativeOffset = 0;
                        const processedData = [];
                        for (let i = 0; i < filteredData.length; i++) {
                            const p = filteredData[i];
                            if (p.y === -1) continue;
                            const currentRawDist = state.stationDistances[p.x];
                            if (processedData.length > 0) {
                                const prevPoint = processedData[processedData.length - 1];
                                const prevRawDist = state.stationDistances[prevPoint.x];
                                if (prevRawDist < 1000 && currentRawDist > 6000) cumulativeOffset -= state.period;
                                else if (prevRawDist > 6000 && currentRawDist < 1000) cumulativeOffset += state.period;
                            }

                            processedData.push({
                                ...p,
                                y: p.y - globalFirstY + 120,
                                adjustedDist: currentRawDist + cumulativeOffset
                            });
                        }

                        return [{ ...train, data: processedData }];
                    }

                    const segments = [];
                    let currentSegment = [];
                    let cumulativeOffset = 0;
                    for (let i = 0; i < segment.length; i++) {
                        const p = segment[i];
                        if (p.y == -1) {
                            continue;
                        }
                        if (p.y >= 1560) {
                            if (currentSegment.length > 0) {
                                const prevPoint = currentSegment[currentSegment.length - 1];
                                if (prevPoint.y >= 1560) continue;
                                const prevDist = state.stationDistances[prevPoint.x];
                                const currentDist = state.stationDistances[p.x];
                                currentSegment.push({ ...p, y: 1560, adjustedDist: prevDist + (currentDist - prevDist) * (1560 - prevPoint.y) / (p.y - prevPoint.y) + cumulativeOffset });
                            }
                            continue;
                        }
                        const currentRawDist = state.stationDistances[p.x];
                        if (currentSegment.length > 0) {
                            const prevPoint = currentSegment[currentSegment.length - 1];
                            const prevRawDist = state.stationDistances[prevPoint.x];

                            if (prevRawDist < 1000 && currentRawDist > 6000) cumulativeOffset -= state.period;
                            else if (prevRawDist > 6000 && currentRawDist < 1000) cumulativeOffset += state.period;

                            if (currentRawDist === undefined) {
                                const currentCalcDist = allStationDistances[p.x];
                                const prevCalcDist = allStationDistances[prevPoint.x.split('_')[0]];
                                if (currentCalcDist !== undefined && prevCalcDist !== undefined) {
                                    if (currentCalcDist > 1230 && prevCalcDist < 1210) {
                                        currentSegment.push({ ...p, y: prevPoint.y + (p.y - prevPoint.y) * (1214 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['竹南'] + cumulativeOffset });
                                    }
                                    if (currentCalcDist < 2050 && prevCalcDist > 2080 && train.info.via == "海線" && isMountain) {
                                        currentSegment.push({ ...p, y: prevPoint.y + (p.y - prevPoint.y) * (2070 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                    if (currentCalcDist < 2100 && prevCalcDist > 2125 && train.info.via == "山線" && !isMountain) {
                                        currentSegment.push({ ...p, y: prevPoint.y + (p.y - prevPoint.y) * (2117 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                }
                            }
                        }
                        if (i > 0 && currentRawDist !== undefined) {
                            const prevPoint = segment[i - 1];
                            const prevRawDist = state.stationDistances[prevPoint.x];
                            if (prevRawDist === undefined) {
                                const prevCalcDist = allStationDistances[prevPoint.x.split('_')[0]];
                                const currentCalcDist = allStationDistances[p.x.split('_')[0]];
                                if (prevCalcDist !== undefined && currentCalcDist !== undefined) {
                                    if (prevCalcDist > 1230 && currentCalcDist < 1210) {
                                        currentSegment.push({ ...p, y: p.y + (prevPoint.y - p.y) * (1214 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['竹南'] + cumulativeOffset });
                                    }
                                    if (prevCalcDist < 2050 && currentCalcDist > 2080 && train.info.via == "海線" && isMountain) {
                                        currentSegment.push({ ...p, y: p.y + (prevPoint.y - p.y) * (2070 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                    if (prevCalcDist < 2100 && currentCalcDist > 2125 && train.info.via == "山線" && !isMountain) {
                                        currentSegment.push({ ...p, y: p.y + (prevPoint.y - p.y) * (2117 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                }
                            }
                        }
                        if (currentRawDist === undefined) {
                            if (currentSegment.length > 1) {
                                segments.push({ ...train, data: currentSegment });
                            }
                            currentSegment = [];
                            continue;
                        }
                        currentSegment.push({ ...p, adjustedDist: currentRawDist + cumulativeOffset });
                    }

                    if (currentSegment.length > 1) {
                        segments.push({ ...train, data: currentSegment });
                    }

                    return segments;
                });
            })
            .filter(train => train.data.length > 1);

        yesterdaySegments = notime ? [] : yrawData
            .filter(train => {
                const isEnabled = state.enabledTypes.has(train.train);
                const passesStation = state.focusedStation ? getTrainData(train).some(p => !p.isVirtual && p.x.split('_')[0] === state.focusedStation) : true;
                return isEnabled && passesStation;
            })
            .flatMap(train => {
                const preprocessedSegments = preprocessTrainData(getTrainData(train));
                return preprocessedSegments.flatMap(segment => {
                    const segments = [];
                    let currentSegment = [];
                    let cumulativeOffset = 0;
                    for (let i = 0; i < segment.length; i++) {
                        const p = segment[i];
                        if (p.y < 1560) { continue; }
                        let tmpy = p.y - 1440;
                        const currentRawDist = state.stationDistances[p.x];
                        if (currentSegment.length > 0) {
                            const prevPoint = currentSegment[currentSegment.length - 1];
                            const prevRawDist = state.stationDistances[prevPoint.x];
                            let tmpprey = (prevPoint.y >= 1560) ? prevPoint.y - 1440 : prevPoint.y;

                            if (prevRawDist < 1000 && currentRawDist > 6000) cumulativeOffset -= state.period;
                            else if (prevRawDist > 6000 && currentRawDist < 1000) cumulativeOffset += state.period;

                            if (currentRawDist === undefined) {
                                const currentCalcDist = allStationDistances[p.x];
                                const prevCalcDist = allStationDistances[prevPoint.x.split('_')[0]];
                                if (currentCalcDist !== undefined && prevCalcDist !== undefined) {
                                    if (currentCalcDist > 1230 && prevCalcDist < 1210) {
                                        currentSegment.push({ ...p, y: tmpprey + (tmpy - tmpprey) * (1214 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['竹南'] + cumulativeOffset });
                                    }
                                    if (currentCalcDist < 2050 && prevCalcDist > 2080 && train.info.via == "海線" && isMountain) {
                                        currentSegment.push({ ...p, y: tmpprey + (tmpy - tmpprey) * (2070 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                    if (currentCalcDist < 2100 && prevCalcDist > 2125 && train.info.via == "山線" && !isMountain) {
                                        currentSegment.push({ ...p, y: tmpprey + (tmpy - tmpprey) * (2117 - prevCalcDist) / (currentCalcDist - prevCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                }
                            }
                        } else {
                            if (i > 0) {
                                const prevPoint = segment[i - 1];
                                if (prevPoint.y >= 1560) continue;
                                const prevDist = state.stationDistances[prevPoint.x];
                                const currentDist = state.stationDistances[p.x];
                                currentSegment.push({ ...p, y: 120, adjustedDist: prevDist + (currentDist - prevDist) * (1560 - prevPoint.y) / (p.y - prevPoint.y) + cumulativeOffset });
                            }
                        }
                        if (i > 0 && currentRawDist !== undefined) {
                            const prevPoint = segment[i - 1];
                            const prevRawDist = state.stationDistances[prevPoint.x];
                            if (prevRawDist === undefined) {
                                const prevCalcDist = allStationDistances[prevPoint.x.split('_')[0]];
                                const currentCalcDist = allStationDistances[p.x.split('_')[0]];
                                if (prevCalcDist !== undefined && currentCalcDist !== undefined) {
                                    if (prevCalcDist > 1230 && currentCalcDist < 1210) {
                                        currentSegment.push({ ...p, y: tmpy + (tmpprey - tmpy) * (1214 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['竹南'] + cumulativeOffset });
                                    }
                                    if (prevCalcDist < 2050 && currentCalcDist > 2080 && train.info.via == "海線" && isMountain) {
                                        currentSegment.push({ ...p, y: tmpy + (tmpprey - tmpy) * (2070 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                    if (prevCalcDist < 2100 && currentCalcDist > 2125 && train.info.via == "山線" && !isMountain) {
                                        currentSegment.push({ ...p, y: tmpy + (tmpprey - tmpy) * (2117 - currentCalcDist) / (prevCalcDist - currentCalcDist), adjustedDist: state.stationDistances['彰化'] + cumulativeOffset });
                                    }
                                }
                            }
                        }
                        if (currentRawDist === undefined) {
                            if (currentSegment.length > 1) {
                                segments.push({ ...train, data: currentSegment });
                            }
                            currentSegment = [];
                            continue;
                        }

                        currentSegment.push({ ...p, y: tmpy, adjustedDist: currentRawDist + cumulativeOffset });
                    }

                    if (currentSegment.length > 1) {
                        segments.push({ ...train, data: currentSegment });
                    }

                    return segments;
                });
            })
            .filter(train => train.data.length > 1);

        const processedSegments = [...todaySegments, ...yesterdaySegments];

        let scheduleData = [];
        if (state.showSchedule && state.selectedLine) {
            const selectedNum = state.selectedLine.number;
            const isTodayTrain = todaySegments.some(t => t.number === selectedNum);
            const isYesterdayTrain = yesterdaySegments.some(t => t.number === selectedNum);

            const rawGrouped = {};
            getTrainData(state.selectedLine).forEach(p => {
                if (p.isVirtual) return;
                if (state.stationDistances[p.x] !== undefined) {
                    if (!rawGrouped[p.x]) rawGrouped[p.x] = [];
                    rawGrouped[p.x].push(p.y);
                }
                if (state.stationDistances[p.x + '_top'] !== undefined) {
                    if (!rawGrouped[p.x + '_top']) rawGrouped[p.x + '_top'] = [];
                    rawGrouped[p.x + '_top'].push(p.y);
                }
                if (state.stationDistances[p.x + '_bottom'] !== undefined) {
                    if (!rawGrouped[p.x + '_bottom']) rawGrouped[p.x + '_bottom'] = [];
                    rawGrouped[p.x + '_bottom'].push(p.y);
                }
                if (state.stationDistances[p.x + '_middle'] !== undefined) {
                    if (!rawGrouped[p.x + '_middle']) rawGrouped[p.x + '_middle'] = [];
                    rawGrouped[p.x + '_middle'].push(p.y);
                }
            });

            Object.entries(rawGrouped).forEach(([name, times]) => {
                const displayName = name.split('_')[0];
                const sortedTimes = times.sort((a, b) => a - b);
                const arrRaw = sortedTimes[0];
                const depRaw = sortedTimes[sortedTimes.length - 1];

                if (isTodayTrain && arrRaw < 1560) {
                    scheduleData.push({
                        station: displayName,
                        arr: Math.ceil(arrRaw),
                        dep: Math.floor(depRaw),
                        yCoord: state.stationDistances[name],
                        renderX: Math.min(Math.floor(depRaw), 1560)
                    });
                }

                if (isYesterdayTrain && depRaw >= 1560) {
                    scheduleData.push({
                        station: displayName,
                        arr: Math.ceil(arrRaw - 1440),
                        dep: Math.floor(depRaw - 1440),
                        yCoord: state.stationDistances[name],
                        renderX: Math.max(Math.floor(depRaw - 1440), 120)
                    });
                }
            });
        }

        const activeLabelData = state.currentZoom > 0.4 ? gridData.denseLabelData :
            state.currentZoom > -1.2 ? gridData.normalLabelData :
                state.currentZoom > -2.2 ? gridData.sparseLabelData : [];

        layers.mainPlotLayers = yOffsets.flatMap(offset => [
            new deck.PathLayer({
                id: `main-path-layer-${offset}`,
                data: processedSegments,
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: !notime, autoHighlight: true, highlightColor: [255, 255, 255, 150],
                getPath: d => d.data.map(p => [p.y * 3, p.adjustedDist + offset]),
                getColor: d => {
                    const hexcolor = colorPalette[d.train];
                    const r = parseInt(hexcolor.substring(1, 3), 16);
                    const g = parseInt(hexcolor.substring(3, 5), 16);
                    const b = parseInt(hexcolor.substring(5, 7), 16);
                    return [r, g, b];
                },
                getWidth: (notime && !trainConnection) ? 0.001 : 1.5, widthMaxPixels: 2, widthMinPixels: 0
            })
        ]);

        layers.selectionLayers = yOffsets.flatMap(offset => [
            new deck.PathLayer({
                id: `selection-layer-${offset}`,
                data: state.selectedLine && state.enabledTypes.has(state.selectedLine.train) ? processedSegments.filter(s => s.number === state.selectedLine.number) : [],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: false,
                getPath: d => d.data.map(p => [p.y * 3, p.adjustedDist + offset]),
                getColor: isLight ? [255, 214, 0] : [255, 196, 0],
                getWidth: 4, widthMaxPixels: 4.5, widthMinPixels: 0
            }),
            new deck.TextLayer({
                id: `train-schedule-labels-${offset}`,
                data: notime ? [] : scheduleData,
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPosition: d => [(d.renderX + 1.5) * 3, d.yCoord + offset, 0],
                getText: d => {
                    const format = (val) => `${Math.floor(val / 60).toString().padStart(2, '0')}${(val % 60).toString().padStart(2, '0')}`;
                    return `${format(d.arr)}-${format(d.dep)} ${d.station}`;
                },
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                getSize: 13, getColor: isLight ? [0, 0, 0] : [255, 255, 255], characterSet: 'auto',
                getTextAnchor: 'start', getAlignmentBaseline: 'center', pixelOffset: [15, 0],
                background: true, getBackgroundColor: isLight ? [255, 255, 255, 180] : [0, 0, 0, 180]
            }),
            new deck.PathLayer({
                id: `station-layer-highlight-${offset}`,
                data: Object.entries(state.stationDistances).filter(([name]) => name === state.focusedStation),
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: true, autoHighlight: true, highlightColor: [220, 220, 220, 150],
                getPath: d => [[(notime && state.focusedStation) ? -3960 : 270, d[1] + offset], [4770, d[1] + offset]],
                getColor: isLight ? [189, 146, 8] : [232, 252, 13],
                getWidth: 3, widthMaxPixels: 2, widthMinPixels: 0
            })
        ]);



        layers.scatterLayers = yOffsets.flatMap(offset => [
            new deck.ScatterplotLayer({
                id: `json-layer-${offset}`,
                data: processedSegments.flatMap(g => g.data.map(p => ({ ...p, train: g.train, number: g.number }))),
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN, pickable: notime,
                getPosition: d => [d.y * 3, state.stationDistances[d.x] + offset],
                getFillColor: d => {
                    const hexcolor = colorPalette[d.train];
                    const r = parseInt(hexcolor.substring(1, 3), 16);
                    const g = parseInt(hexcolor.substring(3, 5), 16);
                    const b = parseInt(hexcolor.substring(5, 7), 16);
                    return [r, g, b];
                },
                getRadius: notime ? 5 : 0.0001, radiusMaxPixels: 7, radiusMinPixels: 0.00001
            })
        ]);

        deckInstance.setProps({ layers: [...layers.baseLayers, ...layers.offsetLayers, ...layers.mainPlotLayers, ...layers.currentTimeLayers, ...layers.scatterLayers, ...layers.selectionLayers, ...layers.axisLabels, ...layers.axisLabelsHighlight] });
    }

    function renderBaseLayers() {
        const currentVS = deckInstance.props.viewState || state.viewState || { target: [state.currentTimeMinutes * 3 + 180, state.initialY, 0], zoom: 0 };
        const container = document.getElementById('container');
        const width = container ? container.clientWidth : window.innerWidth;
        const height = container ? container.clientHeight : window.innerHeight;
        const scale = Math.pow(2, currentVS.zoom);
        const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
        const isMobile = window.innerWidth <= 768;
        const visibleRightOffset = (isCollapsed || isMobile) ? width / 2 : width * 0.25;

        const leftX = currentVS.target[0] - (width / 2) / scale;
        const topY = currentVS.target[1] - (height / 2) / scale;
        const rightX = currentVS.target[0] + visibleRightOffset / scale;
        const bottomY = currentVS.target[1] + (height / 2) / scale;

        const yOffsets = [-state.period, 0, state.period];

        const horizontalStartX = (notime && state.focusedStation) ? -3960 : 270;
        layers.offsetLayers = yOffsets.flatMap(offset => [
            new deck.PathLayer({
                id: `station-layer-${offset}`,
                data: Object.entries(state.stationDistances).filter(([name]) => state.stationList.has(name)),
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: true, autoHighlight: true, highlightColor: [220, 220, 220, 150],
                getPath: d => [[horizontalStartX, d[1] + offset], [4770, d[1] + offset]],
                getColor: d => d[0].split('_')[0] === state.focusedStation ? (isLight ? [189, 146, 8] : [232, 252, 13]) : (isLight ? [180, 180, 180] : [80, 80, 80]),
                getWidth: d => d[0].split('_')[0] === state.focusedStation ? 3 : 1, widthMaxPixels: 2, widthMinPixels: 0
            })
        ]);

        layers.axisLabels = yOffsets.flatMap(offset => [
            new deck.TextLayer({
                id: `station-labels-left-${offset}`,
                data: state.currentZoom > 0.8 ? gridData.denseLabelData :
                    state.currentZoom > -0.4 ? gridData.normalLabelData :
                        state.currentZoom > -1.8 ? gridData.mainLabelData : [],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: true, autoHighlight: true, highlightColor: [255, 255, 255, 150],
                getPosition: d => [leftX, d.y + offset],
                getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: 16, sizeMaxPixels: 16, sizeMinPixels: 0,
                getColor: isLight ? [60, 60, 60] : [210, 210, 210],
                characterSet: 'auto',
                getAlignmentBaseline: 'bottom', getTextAnchor: 'start', pixelOffset: [10, -10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { getPosition: [leftX] }
            }),
            new deck.TextLayer({
                id: `station-labels-right-${offset}`,
                data: state.currentZoom > 0.8 ? gridData.denseLabelData :
                    state.currentZoom > -0.4 ? gridData.normalLabelData :
                        state.currentZoom > -1.8 ? gridData.mainLabelData : [],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                pickable: true, autoHighlight: true, highlightColor: [255, 255, 255, 150],
                getPosition: d => [rightX, d.y + offset],
                getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: 16, sizeMaxPixels: 16, sizeMinPixels: 0,
                getColor: isLight ? [60, 60, 60] : [210, 210, 210],
                characterSet: 'auto',
                getAlignmentBaseline: 'bottom', getTextAnchor: 'end', pixelOffset: [-10, -10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { getPosition: [rightX] }
            })
        ]);

        const highlightLabelData = state.currentZoom > 0.8 ? gridData.denseLabelData :
            state.currentZoom > -0.4 ? gridData.normalLabelData :
                state.currentZoom > -1.8 ? gridData.mainLabelData : [];

        layers.axisLabelsHighlight = yOffsets.flatMap(offset => [
            new deck.TextLayer({
                id: `station-labels-highlight-left-${offset}`,
                data: highlightLabelData.filter(d => d.text === state.focusedStation),
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN, pickable: true,
                getPosition: d => [leftX, d.y + offset],
                getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: 16, sizeMaxPixels: 16, sizeMinPixels: 0,
                getColor: isLight ? [189, 146, 8] : [232, 252, 13],
                characterSet: 'auto',
                getAlignmentBaseline: 'bottom', getTextAnchor: 'start', pixelOffset: [10, -10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { data: [state.currentZoom, state.focusedStation], getPosition: [leftX] }
            }),
            new deck.TextLayer({
                id: `station-labels-highlight-right-${offset}`,
                data: highlightLabelData.filter(d => d.text === state.focusedStation),
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN, pickable: true,
                getPosition: d => [rightX, d.y + offset],
                getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: notime ? 0.0001 : 16, sizeMaxPixels: 16, sizeMinPixels: 0,
                getColor: isLight ? [189, 146, 8] : [232, 252, 13],
                characterSet: 'auto',
                getAlignmentBaseline: 'bottom', getTextAnchor: 'end', pixelOffset: [-10, -10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { data: [state.currentZoom, state.focusedStation], getPosition: [rightX] }
            })
        ]);

        layers.baseLayers = [
            new deck.PathLayer({
                id: 'thin-time-lines', data: gridData.thinLines, coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPath: d => d.path, getColor: isLight ? [200, 200, 200] : [50, 50, 50], getWidth: 1, widthMaxPixels: 2, widthMinPixels: 0
            }),
            new deck.PathLayer({
                id: 'thick-time-lines', data: gridData.thickLines, coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPath: d => d.path, getColor: isLight ? [180, 180, 180] : [80, 80, 80], getWidth: 2, widthMaxPixels: 3, widthMinPixels: 0
            })
        ];

        layers.axisLabels.push(
            new deck.TextLayer({
                id: 'vertical-labels-top',
                data: state.currentZoom > 0.8 ? gridData.denseLabels : state.currentZoom > -0.4 ? gridData.normalLabels : state.currentZoom > -1.6 ? gridData.sparseLabels : state.currentZoom > -2 ? gridData.simpleLabels : [],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPosition: d => [d.x, topY], getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: 12, sizeMaxPixels: 12, sizeMinPixels: 0,
                getColor: isLight ? [80, 80, 80] : [180, 180, 180], characterSet: 'auto',
                getAlignmentBaseline: 'top', getTextAnchor: 'start', pixelOffset: [5, 10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { getPosition: [topY] }
            }),
            new deck.TextLayer({
                id: 'vertical-labels-bottom',
                data: state.currentZoom > 0.8 ? gridData.denseLabels : state.currentZoom > -0.4 ? gridData.normalLabels : state.currentZoom > -1.6 ? gridData.sparseLabels : state.currentZoom > -2 ? gridData.simpleLabels : [],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPosition: d => [d.x, bottomY], getText: d => d.text,
                fontFamily: 'GlowSansSCCom-Compressed, sans-serif',
                fontWeight: 'bold',
                getSize: 12, sizeMaxPixels: 12, sizeMinPixels: 0,
                getColor: isLight ? [80, 80, 80] : [180, 180, 180], characterSet: 'auto',
                getAlignmentBaseline: 'bottom', getTextAnchor: 'start', pixelOffset: [5, -10],
                background: true, getBackgroundColor: isLight ? [235, 235, 235, 204] : [20, 20, 20, 204],
                updateTriggers: { getPosition: [bottomY] }
            })
        );

        layers.currentTimeLayers = [
            new deck.PathLayer({
                id: 'current-time-line',
                data: [{ path: [[state.currentTimeMinutes * 3, gridData.minDistance - state.period], [state.currentTimeMinutes * 3, gridData.maxDistance + state.period]] }],
                coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
                getPath: d => d.path, getColor: isLight ? [0, 172, 193] : [0, 225, 255], getWidth: notime ? 0.001 : 3.5, widthMaxPixels: 4.5, widthMinPixels: 0
            })
        ];

        deckInstance.setProps({ layers: [...layers.baseLayers, ...layers.offsetLayers, ...layers.mainPlotLayers, ...layers.currentTimeLayers, ...layers.scatterLayers, ...layers.selectionLayers, ...layers.axisLabels, ...layers.axisLabelsHighlight] });
    }

    function updateMapTheme(isLight) {
        const newColors = isLight ? [0, 0, 0] : [255, 255, 255];
        colorPalette = isLight ? lightcolorPalette : darkcolorPalette;
        updateStationGridData();
        syncPillStyles();
        renderDataLayers();
        renderBaseLayers();
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        isLight = body.classList.contains('light-theme');
        themeIcon.textContent = isLight ? '🌙' : '☀️';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateMapTheme(isLight);
        updateInfoBox();
    });
    if (localStorage.getItem('theme') === 'light') {
        isLight = true;
        updateMapTheme(isLight);
    }

    window.selectTrain = function (trainNumber, preventCenter = false) {
        const allTrainsSource = [...rawData, ...yrawData];
        const found = allTrainsSource.find(t => t.number == trainNumber);
        if (found) {
            if (!preventCenter) {
                Object.entries(branchConfigs).forEach(([branchId, config]) => {
                    const branchStations = config.stations.slice(0, -1);
                    if (found.data.some(p => branchStations.includes(p.x))) {
                        const branchPill = [...DOM.branchPills].find(p => p.getAttribute('data-branch') === branchId);
                        if (branchPill && !branchPill.classList.contains('active')) {
                            branchPill.click();
                        }
                    }
                });
            }

            const selected = {
                ...found
            };

            if (selected.data.length < 2) {
                console.warn("該車次在目前路段無停靠站");
                return;
            }

            state.selectedLine = selected;
            state.showSchedule = true;
            state.focusedStation = null;

            const xValues = selected.data.map(p => {
                return state.stationDistances[p.x] !== undefined ? state.stationDistances[p.x] : 0;
            });
            const yValues = selected.data.map(p => p.y);
            const minY = Math.min(...yValues);
            const maxY = Math.max(...yValues);
            const first = selected.data[0];
            const last = selected.data[selected.data.length - 1];
            const xStart = state.stationDistances[first.x] || 0;
            const xEnd = state.stationDistances[last.x] || 0;

            let targetX = (Math.max(...xValues) - Math.min(...xValues) > 6000) ? (xStart + xEnd - state.period) / 2 : (xStart + xEnd) / 2;
            if (targetX < 0) {
                targetX = targetX + state.period;
            }
            let targetY = (first.y + last.y) / 2;
            const currentX = state.currentTimeMinutes;
            if (currentX >= minY && currentX <= maxY) {
                targetY = currentX;
                for (let i = 0; i < selected.data.length - 1; i++) {
                    const p1 = selected.data[i];
                    const p2 = selected.data[i + 1];
                    if (currentX >= p1.y && currentX <= p2.y) {
                        targetX = (Math.abs(state.stationDistances[p1.x] - state.stationDistances[p2.x]) > 6000) ?
                            (state.stationDistances[p1.x] + state.stationDistances[p2.x] - state.period) / 2 :
                            (state.stationDistances[p1.x] + state.stationDistances[p2.x]) / 2;
                        if (targetX < 0) { targetX = targetX + state.period; }
                        break;
                    }
                }
            }

            const dx = Math.abs(xStart - xEnd);
            let targetZoom = Math.max(-1.5, Math.min(0, (600 - dx) / 500));

            if (!preventCenter) {
                const currentVS = deckInstance.props.viewState || state.viewState || {};
                const updatedViewState = {
                    ...currentVS,
                    target: [targetY * 3, targetX, 0], // Note: check if your ortho logic uses [y, x] or [x, y]
                    zoom: targetZoom,
                    transitionDuration: 600,
                    transitionInterpolator: new deck.LinearInterpolator(['target', 'zoom']),
                    transitionInterruption: 1
                };

                state.viewState = updatedViewState;
                deckInstance.setProps({ viewState: updatedViewState });
            }

            updateBottomPanel();
            updateStationGridData();
            renderDataLayers();
            renderBaseLayers();
            updateInfoBox();
        }
    };

    window.selectStation = function (stationName, centerView = true) {
        if (!stationName) return;

        const switchLine = (type) => {
            const targetPill = [...DOM.linePills].find(p => p.getAttribute('data-line') === type);
            if (targetPill) targetPill.click();
        };

        const checkTarget = () => state.stationDistances[stationName] !== undefined ? stationName :
            state.stationDistances[stationName + '_top'] !== undefined ? stationName + '_top' : null;

        let targetName = checkTarget();

        if (targetName === null) {
            Object.entries(branchConfigs).forEach(([branchId, config]) => {
                const branchStations = config.stations.slice(0, -1);
                if (branchStations.includes(stationName)) {
                    const branchPill = [...DOM.branchPills].find(p => p.getAttribute('data-branch') === branchId);
                    if (branchPill && !branchPill.classList.contains('active')) {
                        branchPill.click();
                    }
                }
            });

            targetName = checkTarget();

            if (targetName === null) {
                if (mountStationDistances[stationName] !== undefined || mountStationDistances[stationName + '_top'] !== undefined) {
                    switchLine('mountain');
                } else if (seaStationDistances[stationName] !== undefined || seaStationDistances[stationName + '_top'] !== undefined) {
                    switchLine('sea');
                }
            }
        }

        const finalTargetName = checkTarget();

        if (finalTargetName !== null) {
            state.selectedLine = null;
            state.showSchedule = false;
            state.focusedStation = stationName;

            if (centerView) {
                const currentVS = deckInstance.props.viewState ||
                    (deckInstance.viewManager && deckInstance.viewManager.getViewState('ortho')) ||
                    state.viewState || {};
                const targetY = state.stationDistances[finalTargetName];
                const currentTarget = currentVS.target || [state.currentTimeMinutes * 3 + 180, 0, 0];
                const currentZoom = (typeof currentVS.zoom === 'number') ? currentVS.zoom : (state.currentZoom || 0);
                const updatedViewState = {
                    ...currentVS,
                    target: [currentTarget[0], targetY, currentTarget[2] || 0],
                    zoom: currentZoom,
                    transitionDuration: 400,
                    transitionInterpolator: new deck.LinearInterpolator(['target']),
                    transitionInterruption: 1
                };
                state.viewState = updatedViewState;
                deckInstance.setProps({ viewState: updatedViewState });
            }

            updateBottomPanel();
            updateStationGridData();
            renderDataLayers();
            renderBaseLayers();
            updateInfoBox();
        }
    };

    const searchResults = document.getElementById('search-results');

    function handleSearch() {
        searchResults.style.display = 'none';
        let query = searchInput.value.trim();
        if (!query) return;
        if (query.endsWith('站')) query = query.slice(0, -1);
        query = query.replace(/台/g, '臺');
        if (/\d/.test(query)) { query = query.replace(/^[^\d]+/, '').trim(); }
        searchError.style.display = 'none';

        if (allStationDistances[query] !== undefined) {
            window.selectStation(query);
            searchInput.value = '';
            return;
        }
        if (mainStationDict[query] !== undefined) {
            window.selectStation(mainStationDict[query]);
            searchInput.value = '';
            return;
        }
        allTrainsSource = [...rawData, ...yrawData];
        const switchLine = (type) => {
            const targetPill = [...DOM.linePills].find(p => p.getAttribute('data-line') === type);
            if (targetPill) targetPill.click();
        };
        const foundTrain = allTrainsSource.find(t => String(t.number) == String(query));
        if (foundTrain) {
            if (foundTrain.info.via.includes("山")) { switchLine('mountain'); }
            else if (foundTrain.info.via.includes("海")) { switchLine('sea'); }
            window.selectTrain(foundTrain.number);
            searchInput.value = '';
            return;
        }

        searchError.innerText = `找不到: ${query}`;
        searchError.style.display = 'block';
    }

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        } else if (e.key === 'Escape') {
            searchResults.style.display = 'none';
        }
    });
    searchInput.addEventListener('input', () => {
        searchError.style.display = 'none';
    });

    const allStations = Array.from(new Set([
        ...Object.keys(allStationDistances || {}),
        ...Object.keys(mainStationDict || {})
    ]));

    searchInput.addEventListener('input', () => {
        let rawValue = searchInput.value.trim();
        searchError.style.display = 'none';

        if (rawValue.length < 1) {
            searchResults.style.display = 'none';
            return;
        }

        let query = rawValue.replace(/台/g, '臺');
        if (query.endsWith('站')) query = query.slice(0, -1);
        let numericQuery = (/\d/.test(query)) ? query.replace(/^[^\d]+/, '').trim() : null;

        // 1. Filter and Sort Stations by Distance
        const uniqueStations = Array.from(new Set(allStations.map(s => s.split('_')[0])));
        const matchedStations = uniqueStations
            .filter(s => s.includes(query) || (mainStationDict[s] && mainStationDict[s].includes(query)))
            .sort((a, b) => {
                // Get distances (default to a high number if distance is unknown)
                const distA = state.stationDistances[a] ?? state.stationDistances[a + '_top'] ?? 99999;
                const distB = state.stationDistances[b] ?? state.stationDistances[b + '_top'] ?? 99999;
                return distA - distB;
            });

        // 2. Filter and Sort Trains by Number
        const allTrainsSource = [...rawData, ...yrawData];
        const matchedTrains = [];
        if (numericQuery) {
            const seenNumbers = new Set();
            // First, collect matches
            for (const t of allTrainsSource) {
                const numStr = String(t.number);
                if (numStr.startsWith(numericQuery) && !seenNumbers.has(numStr)) {
                    matchedTrains.push(t);
                    seenNumbers.add(numStr);
                }
            }
            // Then, sort numerically
            matchedTrains.sort((a, b) => Number(a.number) - Number(b.number));
        }

        showSuggestions(matchedStations, matchedTrains);
    });

    function showSuggestions(stations, trains) {
        searchResults.innerHTML = '';
        searchResults.scrollTop = 0;

        if (stations.length === 0 && trains.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Render Stations
        stations.forEach(s => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';

            // Requirement 3: Check mainStationDict for custom label
            const typeLabel = mainStationDict[s] || reverseStationDict[s] || "";

            div.innerHTML = `<span>${s}</span><span class="suggestion-type">${typeLabel}</span>`;
            div.onclick = () => {
                searchInput.value = s;
                searchResults.style.display = 'none';
                handleSearch();
            };
            searchResults.appendChild(div);
        });

        // Render Trains
        trains.forEach(t => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<span style="color: ${colorPalette[t.train]};">${getTrainTypeName(t.train, t.number)}</span><span class="suggestion-type">${t.info.start.slice(6)} -> ${t.info.end.slice(6)}</span>`;
            div.onclick = () => {
                searchInput.value = t.number;
                searchResults.style.display = 'none';
                handleSearch();
            };
            searchResults.appendChild(div);
        });

        searchResults.style.display = 'block';
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-container')) {
            searchResults.style.display = 'none';
        }
    });

    if (urlParams.has('q')) {
        const qStr = urlParams.get('q');
        const combinedVal = parseInt(qStr, 36);

        if (!isNaN(combinedVal)) {
            let val = combinedVal;
            const lineType = val % 2; val = Math.floor(val / 2);
            const bVal = val % 256; val = Math.floor(val / 256);
            const tVal = val % 2048; val = Math.floor(val / 2048);
            const hasSelection = val % 2; val = Math.floor(val / 2);
            const isStation = val % 2; val = Math.floor(val / 2);
            const selectionValue = val;

            if (lineType === 1) {
                const seaPill = [...DOM.linePills].find(p => p.getAttribute('data-line') === 'sea');
                if (seaPill) seaPill.click();
            }

            const branchList = ['keelung', 'liujia', 'neiwan', 'jiji', 'shalun', 'suao', 'pingxi', 'shenao'];
            branchList.forEach((b, index) => {
                if ((bVal & (1 << index)) !== 0) {
                    const branchPill = [...DOM.branchPills].find(p => p.getAttribute('data-branch') === b);
                    if (branchPill && !branchPill.classList.contains('active')) branchPill.click();
                }
            });

            const typeList = ['普悠瑪', '太魯閣', '新自強', '柴聯自強', 'PP自強', '自強專列', '莒光', '莒光專列', '區間快', '區間', '普通專列'];
            state.enabledTypes.clear();
            typeList.forEach((type, index) => {
                if ((tVal & (1 << index)) !== 0) {
                    state.enabledTypes.add(type);
                }
            });

            if (hasSelection) {
                let searchVal = '';
                if (isStation) {
                    const stationsForURL = Object.keys(allStationDistances);
                    searchVal = stationsForURL[selectionValue];
                } else {
                    searchVal = String(selectionValue);
                }

                if (searchVal) {
                    setTimeout(() => {
                        searchInput.value = searchVal;
                        handleSearch();
                    }, 500);
                }
            }
        }
    }

    syncPillStyles();
    await new Promise(r => requestAnimationFrame(r));
    updateStationGridData();
    await new Promise(r => requestAnimationFrame(r));
    renderDataLayers();
    await new Promise(r => requestAnimationFrame(r));
    renderBaseLayers();
    await new Promise(r => requestAnimationFrame(r));

    document.fonts.ready.then(() => {
        const elapsed = Date.now() - loadStartTime;
        const minLoadingTime = 2000;
        const remainingTime = Math.max(0, minLoadingTime - elapsed);
        
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, remainingTime);
    });
}

initMap();

const infoModal = document.getElementById('info-modal');
const infoBtn = document.getElementById('btn-info');
const closeinfoBtn = document.querySelector('.close-infomodal');
const questionModal = document.getElementById('question-modal');
const questionBtn = document.getElementById('btn-question');
const closequestionBtn = document.querySelector('.close-questionmodal');

infoBtn.addEventListener('click', () => {
    infoModal.style.display = 'flex';
});
closeinfoBtn.addEventListener('click', () => {
    infoModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
});

questionBtn.addEventListener('click', () => {
    questionModal.style.display = 'flex';
});
closequestionBtn.addEventListener('click', () => {
    questionModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === questionModal) {
        questionModal.style.display = 'none';
    }
});
