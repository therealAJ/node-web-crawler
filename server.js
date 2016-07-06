var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function (req, res) {

    // Url to scrape -- chocolate chip biscotti from thefoodnetwork.ca
    url = 'http://www.foodnetwork.ca/recipe/quinoa-and-herb-crusted-lamb/18128/';

    // http://www.foodnetwork.ca/recipe/ham-and-barley-risotto/12813/

    request(url, function (error, response, html) {

        if (!error) {

            var $ = cheerio.load(html);

            var json = {
                ingredients: []
            };

            // Get unique class '.no top margin and get sibling element'
            $('.no-top-margin').nextAll('p').each(function(i, el) {
              json.ingredients.push($(this).text().trim());
            });
        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File successfully written');
            }
        });

        res.send(json);

    });
});

app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});

exports = module.exports = app;
