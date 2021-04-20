# django-highcharts-demo
Django Highcharts Demo

https://user-images.githubusercontent.com/916017/115337993-9f39c980-a167-11eb-91fe-8465ce00e328.mov

## Demo

Run `./manage.py runserver` and visit `localhost:8000` to see the demo, a random bar chart and pie chart should be displayed and updated ever 5 seconds.

## Overview

The [`homepage` view](https://github.com/bradshjg/django-highcharts-demo/blob/5f671d4883f7c511d2f384ecb126c20208946641/dashboard/views.py#L6) renders the [`homepage.html` template](https://github.com/bradshjg/django-highcharts-demo/blob/5f671d4883f7c511d2f384ecb126c20208946641/dashboard/templates/dashboard/homepage.html) which creates some
placeholders for the charts and specifies the javascript needed to render them.

The [`barchart` view](https://github.com/bradshjg/django-highcharts-demo/blob/5f671d4883f7c511d2f384ecb126c20208946641/dashboard/views.py#L10) returns a JSON payload that reflects the options for a Highcharts Series (random data).

The [`piechart` view](https://github.com/bradshjg/django-highcharts-demo/blob/5f671d4883f7c511d2f384ecb126c20208946641/dashboard/views.py#L33) returns a JSON payload that reflects the options for a Highcharts Series (random data).

[`highcharts.js`](https://github.com/bradshjg/django-highcharts-demo/blob/5f671d4883f7c511d2f384ecb126c20208946641/dashboard/static/dashboard/js/highcharts.js) contains the javascript for rendering and updating the charts (ever 5 seconds). It uses a feature of Highcharts that allows us to run a function on load and those functions fetch data from our server and call `update` on their respective charts.

This is all-around sloppy and somewhat frowned upon per the Highcharts docs (updating the chart is an expensive render)...but it works 😄 and hopefully gives you some idea of how you can fit these pieces together.
