(function(exports) {

  function Control (getData) {

  }

  var getTweets = function(word) {
    getTweets(word);
  };

  var returnHTML = function(getData, hash) {
    var result = document.getElementById('results-box');
    result.insertAdjacentHTML("beforeend", '<li>' + getData.timestamp(hash) + ': ' + getData.nMentions(hash) + '</li>')
  };

  var stopStream = function(arguments) {

  }
  return { returnHTML:returnHTML,
            getTweets:getTweets}

  exports.Control = Control;
})(this);
