# Taiwan Railway Train Diagram Visualization

This project provides a web-based visualization tool for Taiwan Railway data. It allows users to explore train schedules via train operation diagrams.

## Live Demo

→ [https://4960fh7.github.io/TRA_Visualization/](https://4960fh7.github.io/TRA_Visualization/)

## Features

* **Interactive Visualization:** Explore train schedules and data through train operation diagrams.
* **Historical and Future Data:** Database contains both past and future (about 60 days) daily train schedules.

## Project Structure

### Website Dependencies

The website is automatically built by GitHub Pages based on the static files:
- `index.html` and `main.js`: Core structure and logic of the website.
- `style.css` and `fonts/`: Theme, styling, and typography.

### Data

- `stations.json`: Contains basic information and metadata for all stations.
- `data_*/`: Directories containing historical and future (about 60 days) daily train schedules.

## Data Fetching

To update the daily train schedule data, simply execute the python script below:

```bash
python fetch_new.py
```

## Feedback & Contribution

This website will continuously be updated and tested for more applications. 
You are welcome to create pull requests or fork this project. 
If you observe any issues, encounter bugs, or have feature requests, you are welcome to:
* Report them in the [Issues](https://github.com/4960fh7/TRA_Visualization/issues) section.
* [Send me an email](mailto:[EMAIL_ADDRESS]).

## License

This project is licensed under the [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/) (Creative Commons Attribution-NonCommercial 4.0 International).
You are free to use and adapt this project for non-commercial purposes, provided that appropriate credit is given.
