$(document).ready(function() {
  $("#shitpost-button").click(function(){
      var $shitpostCount = $("#shitpost-count");
      var shitpostCount = parseInt($shitpostCount.first().text());
      $shitpostCount.text(shitpostCount + 1);
  });
});
