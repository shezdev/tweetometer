"use strict";

(function(exports){

  var HashtagCount = require ('hashtag-count');
  var config = require('config');

  function Search() {
    this.hc = new HashtagCount(config);
  }

  Search.prototype.tweetParams = function (string, interval, history) {
    var hashtags = [];
    hashtags.push(string);
    var interval =  interval || '5 seconds';
    var history = history || '5 seconds';
    this.getTweets(hashtags, interval, history);
  };


  Search.prototype.getTweets = function (hashtags, interval, history) {
    var intervalCb = function (err, results) {
      if (err) {
        console.error(error);
      }
      else {
        showTweets(results, false);
      }
    };

    this.hc.start({
      hashtags: hashtags,
      interval: interval,
      history: history,
      intervalCb: intervalCb,
    });
  };

  var showTweets = function(results, runner) {
    if (runner === false) {
      console.log(results)
    }
    else {
      return "test"
    }
  };

  // Search.prototype.stopTweetsStream = function () {
  //   this.hc.stopStream();
  // };

  Search.prototype.stopper = function () {
    showTweets('test', true)
    var limit = '0 seconds';

    this.hc.start({
      hashtags: ['test'],
      interval: '0 seconds',
      limit: limit,
    });

  };

  exports.Search = Search;
}(this));

var s = new Search();
s.tweetParams('trump');

s.stopper();
