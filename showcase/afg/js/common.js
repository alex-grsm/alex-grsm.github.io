$(function() {

		// Auto Heigts
		$(".property-item").equalHeights();
		$(".dealings-item-img").equalHeights();
		$(".buhservice-item").equalHeights();
		$(".item-card p").equalHeights();


	//Крутяться мини-карточки в "Как мы работатаем"
	var waypointsvg = new Waypoint({

		element: $(".s-howwork"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".s-howwork .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	// Крутяться карточки Teams
	$(".s-peoplecontact").waypoint(function() {

		$(".s-peoplecontact.team-card").each(function(index) {
			var ths = $(this);
			setInterval (function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

	// Крутяться карточки преимущества
	$(".s-advantages").waypoint(function() {

		$(".s-advantages .item-card").each(function(index) {
			var ths = $(this);
			setInterval (function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


		// Owl slider
		$(".slider").owlCarousel({
			items : 1,
			nav : true,
			navText : "",
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			navSpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 600
		});


	//ANIMATIONS
	$(".s-property-head h2, .s-property-head p, .s-dealings-head h2, .s-dealings-head p, .s-buhservices-head h2, .s-buhservices-head p, .s-howwork-head h2, .s-peoplecontact-head h2, .s-peoplecontact-head p, .s-reviews-head h2, .s-reviews-head p, .s-weprofi-head h2, .s-weprofi-head p").animated("fadeIn");
	$(".property-item").animated("zoomIn");
	$(".buhservice-item").animated("zoomIn");
	$(".s-weprofi .contact-form").animated("fadeInRight");


	// Анимация в "Сделки"
	$(".s-dealings").waypoint(function() {
		$(".dealings-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	// Анимация в "Мы - профессионалы"
	$(".s-weprofi").waypoint(function() {
		$(".weprofi-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	//Arrow top
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

		//Arrow down
		$(".arrow-down").click(function() {
			$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
			return false;
		});


	//Mobile menu Footer
	$(".main-footer .main-mnu").after("<div id='mob-mnu'>");
	$(".main-footer .main-mnu").clone().appendTo("#mob-mnu");
	$(".main-footer #mob-mnu").find("nav").addClass("hidden-lg");
	$(".main-footer #mob-mnu").find("nav").removeClass("main-mnu");
	$(".main-footer #mob-mnu").find("nav").removeClass("hidden-md");
	$(".main-footer #mob-mnu").find("nav").removeClass("hidden-sm");
	$(".main-footer #mob-mnu").find("nav").removeClass("hidden-xs");



	//Toggle Mnu Footer
	$(".main-footer .toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-footer #mob-mnu").slideToggle();
		return false;
	});



	//Mobile menu Header
	$(".main-head .main-mnu").after("<div id='mob-mnu'>");
	$(".main-head .main-mnu").clone().appendTo("#mob-mnu");
	$(".main-head #mob-mnu").find("nav").addClass("hidden-lg");
	$(".main-head #mob-mnu").find("nav").removeClass("main-mnu");
	$(".main-head #mob-mnu").find("nav").removeClass("hidden-md");
	$(".main-head #mob-mnu").find("nav").removeClass("hidden-sm");
	$(".main-head #mob-mnu").find("nav").removeClass("hidden-xs");



	//Toggle Mnu Header
	$(".main-head .toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-head #mob-mnu").slideToggle();
		return false;
	});




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Popup buttons
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//Put value in hidden input
	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"));
		$("#callback h4").html($(this).text());
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
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
