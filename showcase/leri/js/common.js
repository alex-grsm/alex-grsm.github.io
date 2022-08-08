$(function() {

  // Mobile OFF
  if (!isMobile.phone, !isMobile.tablet, !isMobile.any) {

    // Nice Scroll
    $("html").niceScroll({
      horizrailenabled: false,
      background: "#E5E5E5",
      cursorborderradius: "0",
      cursorborder: "0",
      cursorcolor: "#707070",
      touchemulate: true,
      cursorwidth: "13px",
      zindex: "999"
    });

    $(".inside-scroll").niceScroll({
      horizrailenabled: false,
      touchemulate: true,
      background: "transparent",
      cursorborderradius: "0",
      cursorborder: "0",
      cursorcolor: "#60B8D6",
      cursorfixedheight: "100",
      autohidemode: false,
      cursorwidth: "1px",
      cursorborderradius: "25px",
      railpadding: { top: 16, right: 0, left: 0, bottom: 16 }
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



  // Card's slider
  var $carousel = $('.slider-for');

  $carousel
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    })
    .magnificPopup({
      type: 'image',
      delegate: 'a:not(.slick-cloned)',
      closeOnContentClick: false,
      tLoading: 'Загрузка...',
      mainClass: 'mfp-zoom-in mfp-img-mobile',
      image: {
        verticalFit: true,
        tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.'
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      zoom: {
        enabled: true,
        duration: 300
      },
      removalDelay: 300, //delay removal by X to allow out-animation
      callbacks: {
        open: function() {
          //overwrite default prev + next function. Add timeout for css3 crossfade animation
          $.magnificPopup.instance.next = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
          };
          $.magnificPopup.instance.prev = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
          };
          var current = $carousel.slick('slickCurrentSlide');
          $carousel.magnificPopup('goTo', current);
        },
        imageLoadComplete: function() {
          var self = this;
          setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
        },
        beforeClose: function() {
          $carousel.slick('slickGoTo', parseInt(this.index));
        }
      }
    });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });



  //Mobile Menu
  $(".toggle-mnu").click(function() {
    if ($("#mob-mnu").is(":visible")) {
      $("body").removeClass("dimming");
      $(".toggle-mnu").removeClass("on");
      $("#mob-mnu").slideUp(200);
      $(".sub-menu").hide();
    } else {
      $("body").addClass("dimming");
      $(".toggle-mnu").addClass("on");
      $("#mob-mnu").slideDown(200);
    }
    return false;
  });




// Mobile menu Header
  $(".top-line .main-mnu").after("<div id='mob-mnu'>");
  $(".top-line .main-mnu").clone().appendTo("#mob-mnu");
  $(".top-line #mob-mnu").find("nav").addClass("hidden-lg");
  $(".top-line #mob-mnu").find("nav").removeClass("main-mnu");
  $(".top-line #mob-mnu").find("nav").removeClass("hidden-md");
  $(".top-line #mob-mnu").find("nav").removeClass("hidden-sm");
  $(".top-line #mob-mnu").find("nav").removeClass("hidden-xs");



// Goods Owl Carousel
  $('.carousel-goods').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 700,
    //autoplay : true,
    //autoplayHoverPause : true,
    //autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      },
      1440: {
        items: 4
      }
    }
  });

  // Recommend Owl Carousel
  $('.carousel-recommend').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 700,
    //autoplay : true,
    //autoplayHoverPause : true,
    //autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      },
      1440: {
        items: 4
      }
    }
  });

  // Owl slider
  $(".carousel-feedback").owlCarousel({
    items : 1,
    dots : false,
    nav : true,
    navText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    loop : true,
    //autoplay : true,
    //autoplayHoverPause : true,
    //autoplayTimeout: 3000,
  });


  // Tabs for card
  $(".tab_item").not(":first").hide();
  $(".tabs-wrapper .tab").click(function() {
    $(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  // equalHeights with setTimeout
  setTimeout(function () {
    $('.categories-card').css('height', '').equalHeights();
    $('.product-item__head').css('height', '').equalHeights();
    $('.product-item__img').css('height', '').equalHeights();
    $('.advantages-item').css('height', '').equalHeights();
    $('.s-reviews-items .s-reviews-items__list .s-reviews-item__head .reviews-info .reviews-name').css('height', '').equalHeights();
    $('.s-comments .inRightSide .h2').css('height', '').equalHeights();
    $('.catalog-banner-item').css('height', '').equalHeights();
    $('.cloth-item__text').css('height', '').equalHeights();
  }, 150);


  //Нельзя перетаскивать картинки по экрану
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Reviews popup-gallery
  $('.reviews-images').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка...',
    mainClass: 'mfp-zoom-in mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Картинка</a> не загружена.',
      zoom: {
        enabled: true,
        duration: 300
      },
    },
      removalDelay: 300, //delay removal by X to allow out-animation
      callbacks: {
        open: function() {
          //overwrite default prev + next function. Add timeout for css3 crossfade animation
          $.magnificPopup.instance.next = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
          },
          $.magnificPopup.instance.prev = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
          }
        },
        imageLoadComplete: function() {
          var self = this;
          setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
        }
      }
  });


  //Toggle sub-menu
  $("#mob-mnu .fuckyou").click(function() {
    $(this).next().slideToggle(200);
    return false;
  });

});
