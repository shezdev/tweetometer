
var Control = {

  // getTweets: function(word) {
  //   newSearch.tweetParams(word);
  // },

  returnHTML: function(getData, hash) {
    var result = document.getElementById('results-box');
    result.insertAdjacentHTML("beforeend", '<li>' + getData.timestamp(hash) + ': ' + getData.nMentions(hash) + '</li>')
  },

  stopStream: function(arguments) {
    newSearch.stopTweets();
  }

};
