$(function() {




	//Selectize
		$("form select").selectize();

	//equalHeights
	$(".holy-item").equalHeights();

	// Tabs Short 
	$(".cat-tab-item").not(":first").hide();
	$(".cat-wrapper .cat-tab").click(function() {
		$(".cat-wrapper .cat-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".cat-tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	// Good load slider
	$(".slider-wrap").show();

	//SLider
	$('.slider').owlCarousel({
		items:1,
		loop:true,
		center:true,
		margin:10,
		URLhashListener:true,
		autoplayHoverPause:true,
		startPosition: 'URLHash',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dotsContainer: ".nav-buttons"
	});


	//Toggle Mnu Header
	$(".main-head .mobile-mnu").click(function() {
		$(".main-head .toggle-mnu").toggleClass("on");
		$(".main-head #mob-mnu").slideToggle();
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




});
