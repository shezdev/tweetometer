$( document ).ready(function() {
  var scoreCard = new ScoreCard({ game: new Game(),
                                score: new Score(),
                                bonus: new Bonus()});
  $('#scoreBox').val("");
  $('#scoreBox').focus();

  $('#addScore').click(function() {
    scoreCard.addRow();
  });

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      scoreCard.addRow();
    }
  });
});
