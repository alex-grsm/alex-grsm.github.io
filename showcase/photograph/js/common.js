$(function() {


	//Masonry tile
	var $container = $('.masonry-container').masonry({
		itemSelector: '.masonry-item',
		columnWidth: ".masonry-item"
	});

	$('#load-images').click( function() {
		var $items = getItems();
		$container.masonryImagesReveal( $items );
	});



	$.fn.masonryImagesReveal = function( $items ) {
		var msnry = this.data('masonry');
		var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to container
  this.append( $items );
  $items.imagesLoaded().progress( function( imgLoad, image ) {
    // get item
    // image is imagesLoaded class, not <img>, <img> is image.img
    var $item = $( image.img ).parents( itemSelector );
    // un-hide item
    $item.show();
    // masonry does its thing
    msnry.appended( $item );
  });
  
  return this;
};


function getItem(imageName) {
	
  var item = '<div class="col-lg-4 col-md-6 col-sm-6 masonry-item"><img src="img/portfolio/oneday/oneday-'+ imageName + '.jpg" /></div>';
	
  return item;
}



function getItems() {
  var items = '';
  for ( var i = 15; i <= 30; i++ ) {
    items += getItem(i);
  }
  // return jQuery object
  return $( items );
}


	//Masonry tile
//	var $container = $(".masonry-container");
//	$container.imagesLoaded(function () {
//		$container.masonry({
//			columnWidth: ".masonry-item",
//			itemSelector: ".masonry-item"
//		});
//	});


	//Mouse-icon-scroll
	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-services").offset().top
		}, 800);
	});


	//equalHeights items
	$(".s-service-item-descr").equalHeights();
	$(".new-text-wrap").equalHeights();
	$(".new-item-head h5").equalHeights();
	$(".price-item").equalHeights();
	$(".reviews-item").equalHeights();


	//Mobile menu
	$(".main-mnu").after("<div id='mob-mnu'>");
	$(".main-mnu").clone().appendTo("#mob-mnu");
	$("#mob-mnu").find("nav").addClass("hidden-lg");
	$("#mob-mnu").find("nav").removeClass("main-mnu");
	$("#mob-mnu").find("nav").removeClass("hidden-md");
	$("#mob-mnu").find("nav").removeClass("hidden-sm");
	$("#mob-mnu").find("nav").removeClass("hidden-xs");


	//Toggle Mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$("#mob-mnu").slideToggle();
		return false;
	});


	//SuperSlides
	$('.ishome #top-slides').superslides({
		animation: "fade",
		inherit_height_from: ".main-head",
		play: 6000,
		slide_speed: 800,
		animation_easing: "linear",
		pagination: false
	});


	//Убираем placeholder при клике по input
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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
