$(document).ready(function(){

///////////////////// burger-menu ///////////////////

  $('.header__burger').click(function() {
    $('.menu').toggleClass("active");
    $('.header__burger').toggleClass("active");
  })

  $('.menu__link').click(function() {
    $('.menu').removeClass("active");
    $('.header__burger').removeClass("active");
  });

///////////////////// popup ///////////////////

  $('.header__btn').click(function() {
    $('.popup').addClass("active");
  })

  $('.popup__close').click(function() {
    $('.popup').removeClass("active");
  })

  $(document).mouseup(function(e){
    var div = $(".popup__inner");
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.popup').removeClass("active");
    }
  });

  $(window).keydown(function(e) {
    if (e.keyCode === 27) { //клавиша ESC
      e.preventDefault();
      $('.popup').removeClass("active");
      
    }
  });

///////////////////// slider ///////////////////

  $('.product__slider').slick({
    infinite: false,
    prevArrow: '<button class="product__slider-btn product__slider-btn--prev" aria-label="Назад" type="button" style=""><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="product__slider-btn product__slider-btn--next" aria-label="Вперёд" type="button" style=""><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'
  });


  if($(window).width() < 425) {
    $('.contacts__info').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      variableWidth: true
    });
  }


///////////////////// accordeon ///////////////////

  $('.questions__title').click(function() {
    $('.questions__item').removeClass('active');
    $(this).parent().addClass('active');
  });


///////////////////// fullpage ///////////////////
  $('.section [data-aos]').removeClass('aos-animate');
  if ($(window).width() >= 768) {
    $('#fullpage').fullpage({
      //options here
      anchors: ['top','product','benefits','specification',
                'questions','contacts'],
      autoScrolling:true,
      scrollHorizontally: true,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      paddingTop: '60px',
      paddingBottom: '60px',
      menu: '#menu-list',
      lazyLoading: true,
      onLeave: function(){
        $('.section [data-aos]').removeClass("aos-animate");
      },
      afterLoad: function(){
          $('.section.active [data-aos]').addClass("aos-animate");
      }
    });
  }

  if ($(window).width() < 768) {
    $('#fullpage').fullpage({
      //options here
      anchors: ['top','product','benefits','specification',
                'questions','contacts'],
      autoScrolling:true,
      scrollHorizontally: true,
      paddingTop: '60px',
      paddingBottom: '60px',
      menu: '#menu-list',
      scrollOverflow: true,
      normalScrollElements: '.benefits',
      lazyLoading: true,
      onLeave: function(){
        $('.section [data-aos]').removeClass("aos-animate");
      },
      afterLoad: function(){
          $('.section.active [data-aos]').addClass("aos-animate");
      }
    });
  }

});