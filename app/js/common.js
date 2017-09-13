$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



var slick = $('.slider').slick({
	 infinite: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 dots: true,
	 appendDots: $('.dots'),
	 prevArrow: $('.prev'),
   nextArrow: $('.next')
});
var slickRight = $('.projects__card').slick({
	 infinite: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 dots: true,
	 appendDots: $('.dots_right'),
	 prevArrow: $('.prev_right'),
   nextArrow: $('.next_right'),
   responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
});
$('.video-youtube').hover(
	function(){
		$('.darkness').css('opacity','0.2');
			$('.darkness').css('transition','0.5s');
	},
	function(){
		$('.darkness').css('opacity','0.5');
	});
	
	$('.mobile__burger').click(function(){
    	$('.mobile__sidebar').toggleClass('active');
    	$(this).toggleClass('toggle');
    });
});

