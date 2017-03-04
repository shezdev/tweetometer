"use strict";

// to do : change cupplied method names, they are terrible!

var Search = (function(){
  var HashtagCount = require ('hashtag-count');
  var config = require('config');
  var hc = new HashtagCount(config);

  return {

    results: {},
    startSearch: function (searchString) {
      var hashtags = [];
      hashtags.push(searchString);
      var interval =  '5 seconds';
      var history = '5 seconds';
      hc.start({
        hashtags: hashtags,
        interval: interval,
        history: history,
        intervalCb: intervalCb,
      });
      var intervalCb = function (err, results) {
        if (err) { console.error(err);}
        else if (results !== undefined) { this.setResults(results);}
      }
    },
    getTweets() { // will this block the hc process?
      var results;
      while (true) {
        if (this.getResults() != {}) {
          results = this.getResults();
          this.setResults({});
          return results;
        }
      }
    },
    setResults: function(results) {
      this.results = results;
    },
    getResults: function() {
      return this.results;
    },
    stopTweets: function(){
      hc.stopStream();
    }
  }
})();

var http = require('http');
var fs = require('fs');
var url = require('url');

// to do ajax is working, just need to put delay in
http.createServer( function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

    if (pathname == "/search"){
      var searchString = "Trump"
      var results = Search.startSearch(searchString);
      response.writeHead(200, {'Content-Type': 'text/html',
                              'Access-Control-Allow-Origin': '*'})
      response.write({});
      response.end();
    } else if (pathname == "/gettweets"){
      var results = Search.getTweets().toString();
      if (results === undefined) { results = "{}" };
      response.writeHead(200, {'Content-Type': 'text/html',
                              'Access-Control-Allow-Origin': '*'})
      response.write(results);
      response.end();
    } else if (pathname == '/stop'){
      Search.stopTweets();
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

// latest error:
//
// Tweetometer server running at http://127.0.0.1:8080/
// Request for /index.html received.
// Request for /bootstrap/css/bootstrap.min.css received.
// Request for /main.css received.
// Request for /tweetometer-controller.js received.
// Request for /eagle.jpg received.
// Request for /eagle.jpg received.
// Request for /gettweets received.
// Request for /stop received.
// /Users/rossbenzie/tweetometer/node_modules/twit/lib/twitter.js:399
//   self.streamingConnection.stop();
//                           ^
//
// TypeError: Cannot read property 'stop' of undefined
//     at Twitter.closeStream (/Users/rossbenzie/tweetometer/node_modules/twit/lib/twitter.js:399:27)
//     at HashtagCount.stopStream (/Users/rossbenzie/tweetometer/node_modules/hashtag-count/lib/hashtag-count.js:25:10)
//     at Object.stopTweets (/Users/rossbenzie/tweetometer/tweetometer.js:44:10)
//     at Server.<anonymous> (/Users/rossbenzie/tweetometer/tweetometer.js:70:14)
//     at emitTwo (events.js:106:13)
//     at Server.emit (events.js:191:7)
//     at HTTPParser.parserOnIncoming [as onIncoming] (_http_server.js:546:12)
//     at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23)
// rossbenzie tweetometer $
