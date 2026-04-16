## Website

Developing version: [https://4960fh7.github.io/TRA_Visualization/](https://4960fh7.github.io/TRA_Visualization/)

Stable release: [https://4960fh7.github.io/TRA_Diagram/](https://4960fh7.github.io/TRA_Diagram/)

## Taiwan Railway Diagram - Developing Repo

#### Usage

The website will be automatically built by github according to file `index.html`.

Data can be fetched by
```bash
python ../fetch.py {YYYY}/{MM}/{DD}
```
under `data/`. For example,
```bash
python ../fetch.py 2026/04/16
```

The existing files in `data/` and `fonts/` will be used in the website and shouldn't be modified.

#### Experimental Functions

- Press key `h` when a train is selected to show / hide the arrival and departure time labels at each station.
- Press key `s` or `t` to enter delta-time view.
    - If `s` is pressed, only the trains starting at that station is shown when a station is clicked.
    - If `t` is pressed, all trains passing that station is shown when a station is clicked.

#### Developing Functions

- Press key `m` to see the current viewstate center and zoom.