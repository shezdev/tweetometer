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
        console.log(results);
      }
    };

    hc.start({
      hashtags: hashtags,
      interval: interval,
      history: history,
      intervalCb: intervalCb,
    });
  };

  Search.prototype.stopTweets = function () {
    hc.stopStream();
  };

  Search.prototype.stopper = function () {
    var limit = '1 seconds';

    hc.start({
      hashtags: ['test'],       // required
      interval: '1 seconds',       // required
      limit: limit,             // optional
    });
  };

  exports.Search = Search;
}(this));

var s = new Search();
s.tweetParams('trump');


s.stopTweets();
s.stopper();
