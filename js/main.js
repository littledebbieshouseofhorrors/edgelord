$(document).ready(function() {

  // This is the "Shitpost" button. 
  //TODO Numbers increase too quickly, need to add a cool down of 2-3 seconds
  //TODO need to change color of background and text
  $("#shitpost-button").click(function(){
      var $shitpostCount = $("#shitpost-count");
      var shitpostCount = parseInt($shitpostCount.first().text());
      $shitpostCount.text(shitpostCount + 1);

  });
  
  // This is the "Write Script" button 
  //TODO Need to change color of background and text.
  $("#buy-script-button").click(function() {
	  var $shitpostCount = $("#shitpost-count");
	  var shitpostCount = parseInt($shitpostCount.first().text());
	  if (shitpostCount >= 10) {
		  $shitpostCount.text(shitpostCount - 10);
		var $scriptCount = $("#script-count");
		var scriptCount = parseInt($scriptCount.first().text());
		$scriptCount.text(scriptCount + 1);
		  setInterval(function() {
			  var $shitpostCount = $("#shitpost-count");
			  var shitpostCount = parseInt($shitpostCount.first().text());
			  $shitpostCount.text(shitpostCount + 1);
		  }, 1000);
	  }
  });
  
});
