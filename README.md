## Website

Developing version: [https://4960fh7.github.io/TRA_Visualization/](https://4960fh7.github.io/TRA_Visualization/)

Stable release: [https://4960fh7.github.io/TRA_Diagram/](https://4960fh7.github.io/TRA_Diagram/)

## Taiwan Railway Diagram - Developing Repo

#### Usage

- The website will be automatically built by github according to file `index.html`.
- Execute `python fetch.py {YYYY}/{MM}/{DD}` to fetch data.
- The existing files in `data/` and `fonts/` will be used in the website and shouldn't be modified.

#### Experimental Functions

- Press key `h` when a train is selected to show / hide the arrival and departure time labels at each station.
- Press key `s` or `t` to enter delta-time view.
    - If `s` is pressed, only the trains starting at that station is shown when a station is clicked.
    - If `t` is pressed, all trains passing that station is shown when a station is clicked.
    - Press the same key again or press key `o` to return to original view.

#### Development Functions

- Press key `m` to see the current viewstate center and zoom.