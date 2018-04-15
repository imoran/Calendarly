# SFCrime

## Background and Overview

SFCrime is an app that pinpoints crimes of all categories on a map (using the Google Map API) and allows them to click and view details of the crime they clicked on.

The data displayed/received were obtained from data.sfgov.org. It is a collection of data that is updated daily and displayed until 2 weeks before the current date.

## Functionality & MVP

In SFCrime, users will be able to:

- [] Use Google Maps to view criminal activity around San Francisco.
- [] Search any location and view crimes that have happened around that area.
- [] Users can view based on crime categories, districts, and days of the week.
- [] Custom markers for each crime type.
- [] Users will be able to choose "to" and "from" dates to look at that time frame's crime data.

## Wireframes

SFCrime will be a single-page app with the majority of the Map occupying the screen and on the right hand side will be the option to filter by category (crime type), by district and by day of the week and giving users access to specify a date range.

![SFCrime](https://github.com/imoran/js-project/blob/master/SFCrime.png)

## Architecture and Technologies

The project will have the following technologies:

* Vanilla JavaScript for structure, API fetching and querying,
* `Google Map API` for the map generation and manipulation,
* Webpack to bundle and serve up the various scripts.


## Implementation timeline

### Over the weekend:

- [x] Reviewed the DataSF API endpoints and SoQL queries necessary for this project.
- [x] Went over the `Google Map API` docs to get a better sense of how to display a map for my needs.
- [x] Set up necessary Node modules, including getting webpack up and running.
- [x] Created and configured both a webpack.config.js file and a package.json file.
- [x] Was able to obtain the API data using JavaScript's fetch.
- [x] Was able to display a Google Map on the app.

### Day 1:

- [] Render markers on the Google Map from the API data that was received.
- [] Figure out how to display colored markers instead of the default markers.

### Day 2:

- [] Figure out a way to filter based on date
- [] Figure out a way to filter based on crime
- [] Figure out a way to filter based on two dropdown lists (date range).

### Day 3:

- [] Figure out a way to filter based on district
- [] Continue figuring out a way to filter based on two dropdown lists (date range).
- [] Make the app presentable by using CSS

### Day 4:

- [] Make the app presentable by using CSS
- [] Customize the `Google Map` so that its colors can match the theme of my app.

## Bonus features:

- [] Have graphs to indicate a time lapse views of different crimes around the city.
- [] Have a heatmap display instead of the markers.
