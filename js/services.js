jQuery(document).ready(function(){
  
  var check = 0;

  $('.faq_item_text').hide();

  function clickFAQ() {
    
    $('.faq_item').click(function(){
      var current = $(this).find('.faq_item_text');
      var currentIcon = $(this).find('.faq_item_img');

      if(!check & !current.is(':animated')) {
        currentIcon.addClass('faq_item_img-transition'); 
        current.show(300);
        check = 1;
      } else {
        currentIcon.removeClass('faq_item_img-transition'); 
        current.hide(300);
        check = 0;
      }
    })
  };

  var servicesW = '.seo_case_slider_items',
      servicesR = '.seo_case_right',
      servicesL = '.seo_case_left',
      servicesI = '.seo_case_slider_item';

  var switchesWr      = $('.seo_case_switches'),
      seoSliderLengt  = $(servicesI).length;

  var timerOn = true,
      timerOff = false;

  var flagWidthOn = true,
      flagWidthOff = false;

  

  for(var i = 0; i < seoSliderLengt; i++) {
    switchesWr.append('<span class="switches_item"><span></span>');
  }


  var switches = $('.switches_item');

  switches.eq(0).addClass('switches_item_active');

  function slider(wrap, right, left, item, timerFlag, widthFlag){

    var slideWrap = $(wrap);
    var nextLink = $(right);
    var prevLink = $(left);
    var sliderItem = $(item);
    var slideWidth = sliderItem.outerWidth(true);
    var scrollSlider = 0;

    if(widthFlag){
      var scrollSlider = slideWrap.position().left - slideWidth;
    } else {
      var scrollSlider = -slideWidth;
    }
    
    var interval = 4000;
    var time = 0;

    if(timerFlag) {
      function timer(){
        sliderItem = $(item);

        if(!slideWrap.is(':animated')) {
          slideWrap.animate({left: scrollSlider}, 500, function(){
            slideWrap
              .find(sliderItem.first())
              .appendTo(slideWrap)
              .parent()
              .css({'left': 0});
          });
        }  
      };  
    };
    
    time = setInterval(timer, interval);
        
    nextLink.click(function(){

      clearInterval(time);
      sliderItem = $(item);

      var switchesActive = $('.switches_item_active');
      var currentIndex = switchesActive.index();

      if(!slideWrap.is(':animated')) {
        if(currentIndex + 1 < seoSliderLengt) {
          switchesActive.removeClass('switches_item_active');
          switches.eq(currentIndex + 1).addClass('switches_item_active');
        } else {
          switchesActive.removeClass('switches_item_active');
          switches.eq(0).addClass('switches_item_active');
        }
        slideWrap.animate({left: scrollSlider}, 500, function(){
          slideWrap
            .find(sliderItem.first())
            .appendTo(slideWrap)
            .parent()
            .css({'left': 0});
        });
      }

      time = setInterval(timer, interval);
    });

    prevLink.click(function(){
      clearInterval(time);
      sliderItem = $(item);

      var switchesActive = $('.switches_item_active');
      var currentIndex = switchesActive.index();

      if(!slideWrap.is(':animated')) {

        if(currentIndex - 1 > -1) {
          switchesActive.removeClass('switches_item_active');
          switches.eq(currentIndex - 1).addClass('switches_item_active');
        } else {
          switchesActive.removeClass('switches_item_active');
          switches.eq(seoSliderLengt - 1).addClass('switches_item_active');
        }
        slideWrap
          .css({'left': scrollSlider})
          .find(sliderItem.last())
          .prependTo(slideWrap)
          .parent()
          .animate({left: 0}, 500);
      }
      time = setInterval(timer, interval); 
    }); 
  };


  slider(servicesW, servicesR, servicesL, servicesI, timerOff, flagWidthOn);
  clickFAQ();
});