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


    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#scrollup').slideDown();
            } else {
                $('#scrollup').slideUp();
            }
        });

        $('#scrollup a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

});
