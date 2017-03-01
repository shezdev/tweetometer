$( document ).ready(function() {

  // temp dummy:
  var search =  {
    getResults: function(srchStrng) {return "<li>More results...</li>";}
  }

  var stopSrch = false;

  $('#search-string').val("");
  $('#search-string').focus();

  $('#start-btn').click(function(event) {
    event.preventDefault();
    getResults();
  });

  $('#stop-btn').click(function(event) {
    event.preventDefault();
    stopSrch = true;
  });

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      getResults();
    }
  });

  function getResults() {
    setInterval(printResults, 2000);
    $('#search-string').focus();
  }

  function printResults() {
    if (stopSrch == false) {
      var srch = $('#search-string').val();
      $('#results-list').append(search.getResults(srch));
    }
  }
});
