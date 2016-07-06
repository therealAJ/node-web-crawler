# node-web-crawler
A Node.js web crawler for the GoogleAdMob Challenge

[![Travis Build] (https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License] (https://img.shields.io/badge/license-MIT%20License-blue.svg)]()
[![Dependencies] (https://david-dm.org/therealAJ/node-web-crawler.svg)]()
[![Stars](https://img.shields.io/github/stars/therealAJ/node-web-crawler.svg)](https://github.com/therealAJ/node-web-crawler)
[![Version] (https://img.shields.io/badge/version-1.0.0-orange.svg)]()




##Motivation 
As a part of the Google AdMob Challenge, my team and I are creating a Android application to will suggest recipes and suggest which ingredients will go wel with others. 

To train our predictive model, we need large amounts of recipes and ingredients to allow our app to develop such a model. As such, I created a web crawler tailored towards looking over recipes on ```www.foodnetwork.ca```, and retrieving ingredients from various recipes. 

##Installation and Usage
To install and run, download repository and run it by using the command, ```node server.js``` in the directory where server.js is located at. Then navigavte to ```localhost:8080/scrape``` in your browser. You should see a ```Check your console!``` prompt, where you will see a ```File generated``` prompt. Navigate to your local directory and the ingridents will be listed in ```output.json```

##Technologies Used
**Backend:** Node.js, Express.js, Cheerio.js  

##License
Licensed under the MIT License.

##Troubleshooting/Contact
If you are having issues, contact alex.jordache@alumni.ubc.ca for help.
