$(document).ready(function(){

	$("#banner-dark").hover(function() {
		 $(".banner-container-image").addClass("show");
		 $("#banner-light").fadeIn();
		 $("#banner-content-light").fadeIn();
		 $("#hover-bulb").hide();
	});


	$('#wrapper').countdown('2016/04/30', function(event) {
	$('#clock-a').html(event.strftime('%D days'));
 	});

/*
 	$('#countdown-box').waypoint(function(direction){
		if (direction == "down") {
			$('#nav-bar').addClass('sticky');
		} else {
			$('#nav-bar').removeClass('sticky');
		}
	});
*/

	$("#go").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});

	$("#button").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});

});
