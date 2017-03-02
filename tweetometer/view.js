// call Search.getTweets(string) and view(result)
// result will be in format timestamp { string: count }
// use listener, or
//
// function returnHTML(array){
//   var result = document.getElementById('results-box');
//   console.log(result);
//   var dataA = getData.dataArray;
//   console.log(dataA);
//   for(i = 0;i <dataA.length; i++){result.insertAdjacentHTML("beforeend", '<li>' + dataA[i] + '</li>')};
// };

var Control = (function(getData) {

  var getTweets = function(hash) {
    getTweets(hash);
  };

  var returnHTML = function(getData) {
    var result = document.getElementById('results-box');
    result.insertAdjacentHTML("beforeend", '<li>' + getData.timestamp(hash) + ': ' + getData.nMentions(hash) + '</li>')
  };

  var stopStream = function(arguments) {

  }
  return { returnHTML:returnHTML }
})();

Control.returnHTML(getData);
