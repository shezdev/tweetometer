"use strict";

(function(exports){

  var HashtagCount = require ('hashtag-count');
  var config = require('config');
  var hc = new HashtagCount(config);

  function Search() {
  }

  Search.prototype.tweetParams = function (string, interval, history) {
    var hashtags = [];
    hashtags.push(string);
    var interval =  interval || '30 seconds';
    var history = history || '30 minutes';
    this.getTweets(hashtags, interval, history);
  };


  Search.prototype.getTweets = function (hashtags, interval, history) {
    var intervalCb = function (err, results) {
      if (err) {
        console.error(error);
      }
      else {
        console.log(results);
      }
    };

    hc.start({
      hashtags: hashtags,
      interval: interval,
      histroy: history,
      intervalCb: intervalCb,
    });
  };

  Search.prototype.stopTweets = function () {
    hc.stop();
  };

  exports.Search = Search;
}(this));

var s = new Search();
s.tweetParams('trump');
s.stopTweets();
