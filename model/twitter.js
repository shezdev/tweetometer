"use strict";

var twit = require('twitter')
var config = require('./config')

  twitter = new twit(config);

var params = {
  q: 'superhero since:2017-02-27 until:2017-02-28',
  count: 100
}


  twitter.get('search/tweets', params, gotTweets);

    function gotTweets(error, tweets, response) {
      var tws = tweets.statuses;
      console.log(tws);
      for (var i = 0; i < tws.length; i++) {
        console.log(tws[i].text);
        console.log(tws[i].created_at);
      }

  };
