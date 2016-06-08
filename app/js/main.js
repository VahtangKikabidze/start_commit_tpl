$(document).ready(function(){

	// $.ajax({
	// 	type: 'GET',
	// 	url: '../test.html'
	// }).success(function(response){
	// 	$('h1').text(response);
	// })

	$("#mainForm").submit(function(){
		var data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "../test.html"
		})
	})

})