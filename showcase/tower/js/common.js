function initMap() {

  var styles = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#777777"
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#272727"
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#333333"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#333333"
    }, {
      "weight": 1.2
    }]
  }, {
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [{
      "color": "#333333"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#333333"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#363636"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#222222"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#222222"
    }, {
      "weight": 0.5
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#222222"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#111111"
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "color": "#282828"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#2b2b2b"
    }]
  }];

  var myLatLng = {lat: 50.249259, lng: 28.663976};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng,
  });
  var icon = {
    url: ("img/marker.svg")
  };
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: icon
  });

  map.setOptions({
    styles: styles
  });

}

$(function() {



  var mqlSM = window.matchMedia('all and (max-width: 767.98px)');
  if (mqlSM.matches) {
    // размер окна 767.98px или меньше
    $('.main-header').find('.container').addClass('container-fluid').removeClass('container');
    $('.ej-dishes__images .ej-dishes__images-inner').addClass('slider-dishes');
  } else {
    // нет, размер окна более 767.98px
  }


  /* ==========================================
   scrollTop() >= 300
   Should be equal the the height of the header
   ========================================== */
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
      $('.main-header').addClass('fixed-header');
    }
    else {
      $('.main-header').removeClass('fixed-header');
    }
  });

  //Mobile menu Header
  $(".main-header .main-mnu").after("<div id='mob-mnu'>");
  $(".main-header .main-mnu").clone().appendTo("#mob-mnu");
  $(".main-header #mob-mnu").find("nav").addClass("d-lg-none");
  $(".main-header #mob-mnu").find("nav").removeClass("main-mnu");
  $(".main-header #mob-mnu").find("nav").removeClass("d-md-none");
  $(".main-header #mob-mnu").find("nav").removeClass("d-sm-none");
  $(".main-header #mob-mnu").find("nav").removeClass("d-xs-none");

  //Toggle Mnu Header
  $(".main-header .toggle-mnu, #mob-mnu ul li a").click(function() {
    $(".main-header .toggle-mnu").toggleClass("on");
    $(".main-header #mob-mnu").slideToggle(300);
    $(".ishome").toggleClass("active");
    return false;
  });

  // Shadow bg when open mob-menu
  $('.body-shadow').click(function() {
    $(".ishome").toggleClass("active");
    $('.main-header .toggle-mnu, #mob-mnu ul li a').toggleClass("on");
    $(".main-header #mob-mnu").slideToggle(300);
    return false;
  });


  // Smooth scroll to id
  var mqlMD = window.matchMedia('all and (max-width: 991.98px)');
  if (mqlMD.matches) {
    // размер окна 991.98px или меньше
    $('a[href^="#"]').click(function () {
      var b = $(this).attr("href");
      var a = $(b).offset().top + 10;
      jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: a}, 600);
      return false
    });
  } else {
    // нет, размер окна более 991.98px
    $('a[href^="#"]').click(function () {
      var b = $(this).attr("href");
      var a = $(b).offset().top + 70;
      jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: a}, 600);
      return false
    });
  }


  // Slider About
  var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '' + n : '' + n;
    }
  };

  function sliderInit() {
    var $slider = $('.slider-about');
    $slider.each(function() {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        fade: true,
        speed: 700,
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true
            }
          }
        ]
      });

      if ($(this).find('.item').length > 1) {
        $(this).siblings('.slides-numbers').show();
      }

      $(this).on('afterChange', function(event, slick, currentSlide){
        $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
      });

      var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
      $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });

    $('.slick-next').on('click', function () {
      $('.slider-holder').slick('slickGoTo', 5);
    });
  };

  sliderInit();

  // Slider Gallery
  var helpersGallery = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  function sliderInitGallery() {
    var $slider = $('.slider-gallery');
    $slider.each(function() {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        fade: false,
        speed: 700,
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true
            }
          }
        ]
      });

      if ($(this).find('.item').length > 1) {
        $(this).siblings('.slides-numbers').show();
      }

      $(this).on('afterChange', function(event, slick, currentSlide){
        $sliderParent.find('.slides-numbers .active').html(helpersGallery.addZeros(currentSlide + 1));
      });

      var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
      $sliderParent.find('.slides-numbers .total').html(helpersGallery.addZeros(sliderItemsNum));

    });

    $('.slick-next').on('click', function () {
      $('.slider-holder').slick('slickGoTo', 5);
    });
  };

  sliderInitGallery();


  // Slider Dishes
  var helpersDishes = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  function sliderInitDishes() {
    var $slider = $('.slider-dishes');
    $slider.each(function() {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        fade: true,
        speed: 700,
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true
            }
          }
        ]
      });

      if ($(this).find('.item').length > 1) {
        $(this).siblings('.slides-numbers').show();
      }

      $(this).on('afterChange', function(event, slick, currentSlide){
        $sliderParent.find('.slides-numbers .active').html(helpersGallery.addZeros(currentSlide + 1));
      });

      var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
      $sliderParent.find('.slides-numbers .total').html(helpersGallery.addZeros(sliderItemsNum));

    });

    $('.slick-next').on('click', function () {
      $('.slider-holder').slick('slickGoTo', 5);
    });
  };

  sliderInitDishes();


  // Input musk
  $('#phone').inputmask("+38 (999) 999 99 99");


  //Нельзя перетаскивать картинки по экрану
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Youtube
  // var i, c, y, v, s, n;
  // v = document.getElementsByClassName("youtube");
  // if (v.length > 0) {
  //   s = document.createElement("style");
  //   s.type = "text/css";
  //   s.innerHTML = '.youtube{background-color:#000;max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("youtube-play-icon.png") no-repeat}';
  //   document.body.appendChild(s)
  // }
  // for (n = 0; n < v.length; n++) {
  //   y = v[n];
  //   i = document.createElement("img");
  //   i.setAttribute("src", "https://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
  //   i.setAttribute("class", "thumb");
  //   c = document.createElement("div");
  //   c.setAttribute("class", "play");
  //   y.appendChild(i);
  //   y.appendChild(c);
  //   y.onclick = function() {
  //     var a = document.createElement("iframe");
  //     a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=0&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
  //     a.setAttribute("allowfullscreen","");
  //     a.style.width = this.style.width;
  //     a.style.height = this.style.height;
  //     this.parentNode.replaceChild(a, this)
  //   }
  // };


  //E-mail Ajax Send
  $("#ej-callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
        //$.magnificPopup.close();
        //window.location.href = "https://soundcloud.com/";
      }, 5000);
    });
    return false;
  });


});
