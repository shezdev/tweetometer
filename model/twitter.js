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

  // Search.prototype.stopStream = function () {
  //   stream.destroy();
  // };

  Search.prototype.getTweets = function(string)  {
    var params = formatParams(string);
    var count = 0

    twitter.stream('statuses/filter', params, function(stream){

      stream.on('data', function(tweet) {
      this.tweets = tweet.text
      console.log(this.tweets)
      setTimeout(() => stream.destroy(), 1000)
    }.bind(this));

      stream.on('error', function(error){
        console.log(error);
      }.bind(this));

    });
  };

exports.Search = Search;

})(this);

var s = new Search();
s.getTweets('india');
// console.log(this)
// this.tws = tweets.statuses;
// console.log(this.tws)
// .bind(this)
