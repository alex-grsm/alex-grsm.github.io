$(function() {


	//Mobile menu
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").find("ul").removeClass("hidden-sm");
	$("#my-menu").find("ul").removeClass("hidden-xs");
	$("#my-menu").mmenu({
		extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	//Gallery foot
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


	//Hidden placeholder when focus
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	//Сертификаты pop-up and add id
	$(".mail-item").each(function(e){

		var thh = $(this);

		thh.attr('href', '#mail-item-img-' + e)
		.find('.mail-item-popup')
		.attr('id', 'mail-item-img-' + e);

	});

	$(".mail-item").magnificPopup({
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


	//Align the height
	$(".choices").equalHeights();
	$(".s-choice-best-text").equalHeights();
	$(".s-more-info-item a").equalHeights();
	$(".sosoh p").equalHeights();


	//SuperFish Menu
	$(".top-line-mnu .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});


	//mini-mnu-toggle
	$(".mini-mnu-toggle").click(function(){
		$(this).toggleClass("on");
		$(".mini-mnu-cont").slideToggle();
		return false;
	});

	$(".mini-mnu-cont ul li a").click(function(){
		$(".mini-mnu-cont").fadeOut(600);
		$(".mini-mnu-toggle").toggleClass("on");
		$(".top-address").css("opacity", "1");
	});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Put value in hidden input
	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"));
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".contact-form").submit(function() { //Change
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
			}, 8000);
		});
		return false;
	});

});
