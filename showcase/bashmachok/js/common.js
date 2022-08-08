$(function() {

	//EqualHeights
	function heightses() {
		$(".item-collective__text p").height("auto").equalHeights();
		$(".new-text-wrap").height("auto").equalHeights();
		$(".new-item-head h5").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});



	//Toggle Mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("onn");
		$("#mob-mnu").slideToggle();
		return false;
	});

	//Mobile menu
	$(".main-mnu").after("<div id='mob-mnu'>");
	$(".main-mnu ul").clone().appendTo("#mob-mnu");
	$("#mob-mnu").find("nav").addClass("hidden-lg");
	$("#mob-mnu").find("nav").removeClass("hidden-md");
	$("#mob-mnu").find("nav").removeClass("hidden-sm");
	$("#mob-mnu").find("nav").removeClass("hidden-xs");


	//Masonry tile
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".masonry-item",
			itemSelector: ".masonry-item"
		});
	});


	// Mobile OFF
	if (!isMobile.phone, !isMobile.tablet, !isMobile.any) {

	//waypoint + animateNumber Blur
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".item-count .n-count, .s-plus").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});

	};

	//waypoint + animateNumber
	$('.s-lastyear').waypoint(function() {

		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".item-count .n-count").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				//"font-size": "111px",
				/*numberStep: comma_separator_number_step*/},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});


	//Mouse-icon-scroll
	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".scroll-end").offset().top
		}, 800);
	});

	//Mouse-icon-scroll
	$(".test-dance .button").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-teach__underimg").offset().top
		}, 800);
	});


	//SuperSlides
	$('#top-slides').superslides({
		animation: "fade",
		//inherit_height_from: ".main-head",
		play: 2000,
		slide_speed: 800,
		animation_easing: "linear",
		pagination: false,
		inherit_height_from: ".top-slides-wrap"
	});


	//PopUp Videos
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
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
			swal("Спасибо!", "Ваша заявка отправлена!", "success"); 
			setTimeout(function() { 
			// Done Functions 
			document.location = "thankyou.html"; 
			th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


});
