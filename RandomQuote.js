//chuck norris quotes api works
//1.figure out why random json doesnt work for other api
//2. make it look better
//3. color of arrays to make background change colors
//functionally complete

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
