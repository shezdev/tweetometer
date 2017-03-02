$( document ).ready(function() {

  // to do : reset all when press stop

  // to do : set interval button

  // to do : temp dummy; replace with search obj

  var search =  {
    getTweets: function(srchStrng) {return "<li>More results...</li>";}
  }

  // DEFAULT_INTERVAL = 3000
  var stopSrch = false;
  var repeats = 0; // 2 * user minutes input

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
    var searchString = $('#search-string').val();
  
    $('#search-string').prop('disabled', true);
    $("#search-heading").html("Seach for: " +  searchString);
    setInterval(printResults, 3000);
  }

  function printResults() {
    var searchString = $('#search-string').val();
    if (stopSrch == false) {
      $('#results-list').append(search.getTweets(searchString));
    }
  }
});
