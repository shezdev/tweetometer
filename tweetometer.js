"use strict";

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
        else if (results !== undefined && results != {})  { this.setResults(results);}
      }
    },
    getTweets() {
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
      // to do why is it receiveing this
    } else if (pathname == '/stop'){
      Search.stopTweets();

    // } else if (pathname == 'eagle.jpg' ) {
    //
    //   console.log("jpg")

    } else {

      fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
          console.log(err);
          response.writeHead(404, {'Content-Type': 'text/html'});
          
        } else {
          // response.writeHead(200, {'Content-Type': 'text/html',
          response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
          response.write(data.toString());
        }
        response.end();
       });
   }

}).listen(8080);

console.log('Tweetometer server running at http://127.0.0.1:8080/');
