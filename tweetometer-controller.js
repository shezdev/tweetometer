$( document ).ready(function() {
  // var thing = new Thing() // main object

  $('#search-string').val("");
  $('#search-string').focus();


  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      submit();
    }
  });
});
