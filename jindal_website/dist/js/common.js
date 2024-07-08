$(window).scroll(function () {
    if ($(window).scrollTop() >=60) {
      $(".main_nav").addClass("fixed_nav");
    }
    else {
      $(".main_nav").removeClass("fixed_nav");
    }
  })
            $('.slideview-list').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoPlay : 5000,
                stopOnHover : false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        