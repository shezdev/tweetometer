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
    var history = history || '30 seconds';
    this.getTweets(hashtags, interval, history);
  };


  Search.prototype.getTweets = function (hashtags, interval, history) {
    var intervalCb = function (err, results) {
      if (err) {
        console.error(err);
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
  
Search.prototype.stopTweets = function(){
  hc.stopStream();
};

  exports.Search = Search;
}(this));
