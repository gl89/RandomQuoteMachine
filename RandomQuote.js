//chuck norris quotes api works
//1.figure out why random json doesnt work for other api
//2. make it look better

$(function() {

  var colors = ['red', 'blue', 'green', 'grey'],
    color;

  $("#click").click(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('body').css('background-color', randColor);
    color = randColor;
  });
});

$(document).ready(function() {
  $("#click").click(function() {
    var quote;
    var author;

    var url = "https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random";

    $.getJSON(url, function(data) {
      //console.log(data.value.joke);

      quote = data.value.joke;

      $("#quote").empty().append(quote);
      $("#tweetQuote").attr('href', 'https://twitter.com/intent/tweet?text='+quote).attr('target', '_blank');
    });
  });
});
