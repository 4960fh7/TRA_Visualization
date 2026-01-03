# Taiwan Railway Train Diagram Plotter
Train graph based on real-time TRA timetable data.

## Requirements

Python 3.10 or later.

Install dependencies:

```
pip install requests beautifulsoup4 matplotlib tqdm
```

## Usage

```
python train_diagram.py [ROUTE] [OUTPUT_FILE] [DATE]
```

ROUTE supports the following inputs:
* 縱貫線 / 西部幹線
  * 縱貫線北段
  * 山線 / 縱貫線山線
  * 海線 / 縱貫線海線
  * 縱貫線南段
  * 屏東線
* 南迴線
* 東部幹線
  * 宜蘭線
  * 北迴線
  * 台東線

OUTPUT_FILE is optional.

DATE is default current day, and supports the following types:
* YYYY/MM/DD
* YYYYMMDD
* MMDD (with current year)

Example:

```
python train_diagram.py 縱貫線 west_all.svg 2026/01/03
python train_diagram.py 南迴線 south_link.svg 0103
```
