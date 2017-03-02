
var Control = (function() {
  var newSearch = new Search();

  var getTweets = function(word) {
    newSearch.tweetParams(word);
  };

  var returnHTML = function(getData, hash) {
    var result = document.getElementById('results-box');
    result.insertAdjacentHTML("beforeend", '<li>' + getData.timestamp(hash) + ': ' + getData.nMentions(hash) + '</li>')
  };

  var stopStream = function(arguments) {
    newSearch.stopTweets();
  }
  return { returnHTML:returnHTML,
            getTweets:getTweets}
})();
