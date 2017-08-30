
$(document).ready(function() {

	var dotArray = ["blue", "green", "pink", "orange"];
	var randomNumber = Math.round((Math.random() * 60) + 10);
	var yourNumber = 0;
	var wins = 0;
	var losses = 0;

	// function generateNumber() {
	// 	var randNum = Math.round((Math.random() * 60) + 10);
	// 	$("#random-box").html("<h2>" + randNum + "</h2>");
	// 	return randNum;
	// }

	function randomizeDots() {
		for (var i = 0; i < dotArray.length; i++) {
			var dotBtn = $("<button>");
			dotBtn.addClass(dotArray[i] + "-button");
			dotBtn.attr("dot-value", Math.round((Math.random() * 10) + 1));
			$("#dots-box").append(dotBtn);
		};
	}

	$("#random-box").html("<h2>" + randomNumber + "</h2>");
	randomizeDots();

	for (var i = 0; i < dotArray.length; i++) {
		$("." + dotArray[i] + "-button").on("click", function(){
			console.log("dot value: " + $(this).attr("dot-value"));
			yourNumber = yourNumber + parseFloat($(this).attr("dot-value"));
			$("#your-box").html("Your number:<br><br><h2><strong>" + yourNumber + "</strong></h2>");

			if (yourNumber === randomNumber) {
				wins++;
				randomNumber = Math.round((Math.random() * 60) + 10);
				yourNumber = 0;
				$(this).attr("dot-value", Math.round((Math.random() * 10) + 1));
				$("#show-wins").html("<h2>" + wins + "</h2>");
				$("#random-box").html("<h2>" + randomNumber + "</h2>");
				$("#your-box").html("Your number:<br><br><h2><strong>" + yourNumber + "</strong></h2>");
			} else if (yourNumber > randomNumber) {
				losses++;
				randomNumber = Math.round((Math.random() * 60) + 10);
				yourNumber = 0;
				$(this).attr("dot-value", Math.round((Math.random() * 10) + 1));
				$("#show-losses").html("<h2>" + losses + "</h2>");
				$("#random-box").html("<h2>" + randomNumber + "</h2>");
				$("#your-box").html("Your number:<br><br><h2><strong>" + yourNumber + "</strong></h2>");
			}
		})
	}

	// just make sure the randnum is divisible by any one of the dot number values
	

})