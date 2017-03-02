"use strict";

( function(exports){

  var twit = require('twitter');
  var config = require('config');
  var twitter = new twit(config);

  function Search() {
  }

  function formatParams(string)  {
    var request = { track: string };
    return request;
  }

  Search.prototype.getTweets = function(string, interval)  {
    var params = formatParams(string);
    var tweets = []

    twitter.stream('statuses/filter', params, function(stream, interval){

      stream.on('data', function(tweet, interval) {
        tweets.push(tweet.id)
        setTimeout(() => stream.destroy(), 10000)
        console.log(tweets.length)
      }.bind(this));

      stream.on('error', function(error){
        console.log(error);
      }.bind(this));

    });
  };

exports.Search = Search;

})(this);

var s = new Search();
s.getTweets('india', 1000);
// console.log(this)
// this.tws = tweets.statuses;
// console.log(this.tws)
// .bind(this)
