"use strict";

  var twitterHash = function () {
    var HashtagCount = require ('hashtag-count');
    var config = require('config');
    this.hc = new HashtagCount(config);
  }

  twitterHash.prototype.tweetParams = function (string, interval, history) {
    var hashtags = [];
    hashtags.push(string);
    var interval =  interval || '5 seconds';
    var history = history || '5 seconds';
    this.getTweets(hashtags, interval, history);
  };


  twitterHash.prototype.getTweets = function (hashtags, interval, history) {
    var intervalCb = function (err, results) {
      if (err) {
        console.error(err);
      }
      else {
        var dataParser = require('./model/dataParser')
        var data = new dataParser(results);
        // console.log(results);
      }
    };

    this.hc.start({
      hashtags: hashtags,
      interval: interval,
      history: history,
      intervalCb: intervalCb,
    });
  };

  twitterHash.prototype.stopTweets = function(){
    this.hc.stopStream();
  };

module.exports = twitterHash;
