var getData = (function(){
  var timestamp = function(hash) {
    var keys = Object.keys(hash);
    var timeStamp = keys[keys.length -1 ]
    return timeStamp
  }

  var nMentions = function(hash){
    var array = Object.values(hash);
    var string = Object.keys(array[array.length - 1])
    return array[array.length - 1][string]
  }

  return { timestamp:timestamp,
          nMentions:nMentions,
         }
})();
