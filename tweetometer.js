"use strict";

var Search = (function(){
  var HashtagCount = require ('hashtag-count');
  var config = require('config');
  var hc = new HashtagCount(config);

  return {

    tweetParams: function () {
      var hashtags = [];
      hashtags.push('Trump');
      var interval =  '5 seconds';
      var history = '5 seconds';
      return this._getTweets(hashtags, interval, history);
    },

    _getTweets: function (hashtags, interval, history) {
      var intervalCb = function (err, results) {
        if (err) {
          console.error(err);
        }
        else if (results !== undefined) {
          console.log(results);
          return results;
        }
      }

      hc.start({
        hashtags: hashtags,
        interval: interval,
        history: history,
        intervalCb: intervalCb,
      });
    },

    stopTweets: function(){
      hc.stopStream();
    }
  }

})();

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

    if (pathname == "/search"){
      var results = Search.tweetParams();
      console.log(results);
      // var results = "WeloveDonald";
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(results);
      response.end();
    } else if (pathname == "/gettweets"){
      var results = Search.tweetParams();
      console.log(results);
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(results);
      response.end();
    } else {

      fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
          console.log(err);
          response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
          response.writeHead(200, {'Content-Type': 'text/html',
                                  'Access-Control-Allow-Origin': '*'})
          response.write(data.toString());
        }
        response.end();
       });
   }

}).listen(8080);

console.log('Tweetometer server running at http://127.0.0.1:8080/');

// var search = new Search();
