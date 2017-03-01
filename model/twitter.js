"use strict";

( function(exports){

  var twit = require('twitter')
  var config = require('config')
  var twitter = new twit(config)

  function Search() {
  }

  function formatParams(string)  {
    var request = { q: string + ' since:2017-02-27 until:2017-02-28', count: 10 }
    return request
  };

  Search.prototype.getTweets = function(string)  {

    var params = formatParams(string)

    twitter.get('search/tweets', params, function(error, tweets, response){
        console.log(this)
        this.tws = tweets.statuses;
        console.log(this.tws)
    }.bind(this))

  }

exports.Search = Search

})(this);
