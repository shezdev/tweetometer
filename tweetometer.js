"use strict";

var Search = (function(){
  var HashtagCount = require ('hashtag-count');
  var config = require('config');
  var hc = new HashtagCount(config);

  return {

    tweetParams: function (string, interval, history) {
      var hashtags = [];
      hashtags.push(string);
      var interval =  interval || '30 seconds';
      var history = history || '30 seconds';
      return this._getTweets(hashtags, interval, history);
    },

    _getTweets: function (hashtags, interval, history) {
      var intervalCb = function (err, results) {
        if (err) {
          console.error(err);
        }
        else if (results != undefined) {
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
  // exports.Search = Search;
})();

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

    if (pathname == "/search"){
      var results =  Search.tweetParams("Trump");
      console.log(results);
      // var results = "WeloveDonald";
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
