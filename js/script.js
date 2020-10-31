

$(document).ready(function(){


	// hide
	$(".btn1").click(function(){
		$(".content").hide(500);
	});

	// show
	$(".btn2").click(function(){
		$(".content").show(500);
	});

	// toggle
	$(".btn3").click(function(){
		$(".content").toggle(500);
	});

	// fade-out
	$(".f-btn1").click(function(){
		$(".f-content").fadeOut();
	})

	// fade-in
	$(".f-btn2").click(function(){
		$(".f-content").fadeIn();
	});

	// fade-toggle
	$(".f-btn3").click(function(){
		$(".f-content").fadeToggle();
	});

	// fade-to
	$(".f-btn4").click(function(){
		$(".f-content").fadeTo(500, 0.2);
	});

	$(".flip").click(function(){
    $(".panel").slideToggle("slow");
  	});

	// animate 
	$(".a-btn").click(function(){
		$(".box").animate({
			left: '500px',
			
		});
	});


	$(".b-btn").click(function(){
		$(".box2").animate({
			left: '800px',
			
		}, 7000);
	});



















});