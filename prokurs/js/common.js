$(function() {



		//Animations
		$(".top-head").animated("fadeInDown", "fadeOut");
		$(".tabs-header .wrapper").animated("flipInY", "fadeOut");
		$(".s-profi-item").animated("fadeInRight", "fadeOut");
		$(".s-profi form").animated("zoomInRight", "fadeOut");
		$(".s-back h3").animated("fadeInUp", "fadeOut");
		$("section h2, .main-foot h2, .contacts-top .tabs").animated("fadeInUp", "fadeOut");





	//Parallax
	$.stellar({
		responsive: true,
		horizontalOffset: 60,
		//verticalOffset: 150
	});


	//Open zoom image
	$('.open-big-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	//PopUp windows
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});



	//Carousel
	$(".carousel-rew").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});


	//Selectize
	$("form select").selectize();

	// HEADER на весь первый экран
	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});



	$(".tabs-header .tab_item").equalHeights();
	$(".s-profi-cont .s-profi-item").equalHeights();

	//Tabs Short 1
	$(".top-phone .tab_item").not(":first").hide();
	$(".top-phone .wrapper .tab").click(function() {
		$(".top-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top-phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");	

	//Tabs Short 2
	$(".tabs-header .tab_item").not(":first").hide();
	$(".tabs-header .wrapper .tab").click(function() {
		$(".tabs-header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Tabs Short 3
	$(".s-contacts .wrapper .tab_item").not(":first").hide();
	$(".s-contacts .tab").click(function() {
		$(".s-contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s-contacts .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Tabs Short 4
	$(".bottom-phone .tab_item").not(":first").hide();
	$(".bottom-phone .wrapper .tab").click(function() {
		$(".bottom-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom-phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");	



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


		//Put value in hidden input
		$("a[href=#callback]").click(function(){
			$(".callback .formname").val($(this).data("form"));
		});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});

