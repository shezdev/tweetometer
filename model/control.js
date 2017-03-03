  var Control = function (getData) {
  }

  Control.prototype.returnHTML = function (getData) {
    var result = document.getElementById('results-box');
    result.insertAdjacentHTML("beforeend", '<li>' + getData.timeStamp(hash) + ': ' + getData.nMentions(hash) + '</li>')
  };

  // return { returnHTML:returnHTML,
  //           getTweets:getTweets}

  module.exports = Control;


// Control.returnHTML(getData);
