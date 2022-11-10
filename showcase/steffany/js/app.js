
document.addEventListener("DOMContentLoaded", function () {

	


	$("#phone").inputmask("+38(999)999-99-99");

	//testimonial slider
	// $('.testimonials').slick({
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	speed: 400,
	// 	dots: true,
	// 	// centerMode: true,
	// 	// centerPadding: '0px',
	// 	// adaptiveHeight: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	responsive: [{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				dots: true,
	// 				arrows: false
	// 			}
	// 		}

	// 	]
	// });

	// about slider-gallery
	$('#aniimated-thumbnials').lightGallery({
		thumbnail: true,
		cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		zoom: false,
		pager: false,
		share: false,
		rotate: false,
	});

	var $carousel = $('.about-slider');

	$carousel
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			// fade: true,
			// adaptiveHeight: true,
		});

	/** Scroll to id */
	$('.scrollTo').on('click', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 0
		}, 300);
		return false;
	});

	// =< 767.98px
	if (window.matchMedia('(max-width: 767.98px)').matches) {
		$(".main-menu ul").clone().prependTo("#mob-menu").addClass("navMenu");
		TweenMax.fromTo('.burgerIcon', 1, {opacity: 0 }, {y: 0, opacity:1, delay:1 });

		$('.burgerIcon').on(function() {
			TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
			TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
		});
	
		var tlmenu = new TimelineMax({paused:true});
	
		tlmenu.to('nav', 0.3, { autoAlpha:1 }).staggerFromTo('#mob-menu li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.1);
	
		$('.burgerIcon').on('click', function() {
		tlmenu.play(0);
		});
	
		$('.closeButton, .navMenu .scrollTo').on('click', function() {
		tlmenu.reverse(0); 
		});
	}

	// =< 575.98px
	if (window.matchMedia('(max-width: 575.98px)').matches) {
		$(".copy-from-mob").clone().prependTo("#to-prepend").removeClass("hidden-xs").addClass("hidden-lg");
	}


	// Animations
	TweenMax.fromTo('.ej-1', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	TweenMax.fromTo('#main-menu', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:1 });
	TweenMax.fromTo('.ej-1__head-img .img-fluid', 0.5, { y: 80, opacity: 0 }, {y: 0, opacity:1, delay:1.5 });
	TweenMax.fromTo('.ej-1__head-text .h1', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 2.0});
	TweenMax.fromTo('.ej-1__head-btn .button', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 2.5});

	if (window.matchMedia('(min-width: 576px)').matches) {
		TweenMax.fromTo('.ej-2__itemBox', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 3.0, ease:Back.easeOut });
	}
	if (window.matchMedia('(max-width: 575.98px)').matches) {
		TweenMax.fromTo('.copy-from-mob .ej-2__itemBox', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 0.2, ease:Back.easeOut });
	}

	$('.ej-1__head-btn .button, .button.big-circle-btn').hover(function() {
		TweenMax.to($(this), 0.25, { y:-10, scale: 1.01 });
	},
	function() {
		TweenMax.to($(this), 0.25, { y:0, scale: 1 });
	});

	$('.ej-2__item').hover(function() {
		TweenMax.to($(this), 0.5, { y:-10, scale: 1.03 });
	},
	function() {
		TweenMax.to($(this), 0.5, { y:0, scale: 1 });
	});

	// $('.about-slider .slick-slide>img').hover(function() {
	// 	TweenMax.to($(this), 0.5, { scale: 1.1 });
	// },
	// function() {
	// 	TweenMax.to($(this), 0.5, { scale: 1 });
	// });

//Inline Promotion GSAP animation
	// console.clear();
	const threshold = 0.1; // trigger
	const options = {
		root: null,
		rootMargin: '100px',
		threshold: threshold
	};

	if (window.matchMedia('(min-width: 576px)').matches) {
		TweenMax.fromTo('.ej-2__itemBox', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 3.0, ease:Back.easeOut });
	}
	if (window.matchMedia('(max-width: 575.98px)').matches) {
		TweenMax.fromTo('.copy-from-mob .ej-2__itemBox', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 0.2, ease:Back.easeOut });
	}

	const observer = new IntersectionObserver(animHandler, options);
	const ar = Array.from(document.querySelectorAll(".s-animated"));

	const animations = ar.map(el => (observer.observe(el), new TimelineMax({paused:true})));
		
	// timeline for each section
	animations[0].fromTo('.ej-2', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[0].fromTo('.ej-2__description', 0.5, {x:-300, opacity: 0 }, {x:0, opacity: 1, delay:0.1 });
	animations[0].fromTo('.ej-2__image', 0.5, {x:+300, opacity: 0 }, {x:0, opacity: 1, delay:0.1}, "-=0.1");

	animations[1].fromTo('.ej-3', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[1].fromTo('.ej-3__head', 0.5, {y:-100, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[1].fromTo('.ej-3__item:nth-of-type(1)', 0.5, {x: -250, opacity: 0 }, {x: 0, opacity:1, delay:0.1 });
	animations[1].fromTo('.ej-3__item:nth-of-type(2)', 0.5, {x: -250, opacity: 0 }, {x: 0, opacity:1, delay:0.1 });
	animations[1].fromTo('.ej-3__item:nth-of-type(3)', 0.5, {x: -250, opacity: 0 }, {x: 0, opacity:1, delay:0.1 });
	animations[1].fromTo('.ej-3__item:nth-of-type(4)', 0.5, {x: -250, opacity: 0 }, {x: 0, opacity:1, delay:0.1 });

	animations[2].fromTo('.ej-get', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[2].fromTo('.ej-get__head', 0.5, {y:-100, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[2].fromTo('.get-item-1', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[2].fromTo('.get-item-2', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1});
	animations[2].fromTo('.get-item-3', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1});
	animations[2].fromTo('.get-item-4', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1});
	animations[2].fromTo('.get-item-5', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1});
	animations[2].fromTo('.get-item-6', 0.3, {y: -50, opacity: 0 }, {y: 0, opacity:1, delay:0.1});

	animations[3].fromTo('.ej-4', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[3].fromTo('.ej-4__item:first-of-type .ej-4__item-img', 0.5, {x:-300, opacity: 0 }, {x:0, opacity: 1, delay:0.1 });
	animations[3].fromTo('.ej-4__item:first-of-type .ej-4__item-text', 0.5, {x:+300, opacity: 0 }, {x:0, opacity: 1, delay:0.1 });
	animations[3].fromTo('.ej-4__item:last-of-type .ej-4__item-text', 0.5, {x:-300, opacity: 0 }, {x:0, opacity: 1, delay:0.1 });
	animations[3].fromTo('.ej-4__item:last-of-type .ej-4__item-img', 0.5, {x:+300, opacity: 0 }, {x:0, opacity: 1, delay:0.1 });

	animations[4].fromTo('.ej-6', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[4].fromTo('.ej-6__head', 0.5, {y:-100, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[4].staggerFrom('.fran-item', 2.5, { rotationX:-90, transformOrigin:"50% 0%", ease:Elastic.easeOut}, 0.3);

	animations[5].fromTo('.ej-5', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[5].set('.ej-5__content-img__inner', {autoAlpha: 1});
	animations[5].from('.ej-5__content-img__inner', 1.5, {xPercent: -100 });
	animations[5].from('.ej-5__content-img__inner img', 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
	animations[5].fromTo('.ej-5__content-description', 1.5, {x:+1000, opacity: 0 }, {x: 0, opacity:1, ease:Power2.out }, 0.3);

	// animations[6].fromTo('.ej-video', 0.5, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 0.1, ease:Back.easeOut });

	animations[6].fromTo('.ej-7', 0.5, {opacity: 0 }, {y: 0, opacity:1, delay:0.3 });
	animations[6].fromTo('.ej-7__head', 0.5, {y:-100, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[6].fromTo('.contactForm__content', 0.5, {y:-100, opacity: 0 }, {y: 0, opacity:1, delay:0.1 });
	animations[6].fromTo('.contactForm__btn', 0.5, {scale:0, opacity: 0 }, {scale: 1, opacity:1, delay:0.1 });

	animations[6].fromTo('.ej-8', 0.3, {opacity: 0 }, {opacity:1 });
	animations[6].fromTo('.ej-8__head', 0.3, {y:+100, opacity: 0 }, {y: 0, opacity:1 });
	animations[6].fromTo('.ej-8__content', 0.3, {y:+100, opacity: 0 }, {y: 0, opacity:1 });
	animations[6].fromTo('.ej-footer', 0.3, {opacity: 0 }, {y: 0, opacity:1});

	// observer handler
	function animHandler(targets, observer) {
		for (var entry of targets) {
			if (entry.isIntersecting) {
				let i = ar.indexOf(entry.target);
				animations[i].play();
			
			} else {
					return;
			}
		}
	}

});

