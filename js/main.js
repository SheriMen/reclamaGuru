jQuery(document).ready(function(){

  var mainSliderW = '.slider_items',
      mainSliderR = '.slider_arrow_right',
      mainSliderL = '.slider_arrow_left',
      mainSliderI = '.slider_item';

  var reviewsW = '.reviews_items',
      reviewsR = '.reviews_right',
      reviewsL = '.reviews_left',
      reviewsI = '.reviews_item';

  var flagOn = true,
      flagOff = false;

  var flagWidthOn = true,
      flagWidthOff = false;

  var projectItem = $('.our-projects_item');
  var projectsItemLength = projectItem.length;
  var projectsItemsSwitches = $('.our-projects_items_switches');

  for(var i = 0; projectsItemLength > i; i++) {
    projectsItemsSwitches.append('<span class="our-projects_items_switches_item"><span></span></span>');
  }

  var projectsSwitchesItem = $('.our-projects_items_switches_item');

  projectsSwitchesItem.first().addClass('our-projects_items_switches_item_active');


  var intervalProject = 7000;

  function sliderProjects() {
    var currentIndex = $('.our-projects_items_switches_item_active').index();
    
    if(currentIndex + 1 < projectsItemLength) {
      $('.our-projects_item_active').removeClass('our-projects_item_active');
      $('.our-projects_items_switches_item_active').removeClass('our-projects_items_switches_item_active');
      projectItem.eq(currentIndex + 1).addClass('our-projects_item_active');
      projectsSwitchesItem.eq(currentIndex + 1).addClass('our-projects_items_switches_item_active');
    } else {
      $('.our-projects_item_active').removeClass('our-projects_item_active');
      $('.our-projects_items_switches_item_active').removeClass('our-projects_items_switches_item_active');
      projectItem.eq(0).addClass('our-projects_item_active');
      projectsSwitchesItem.eq(0).addClass('our-projects_items_switches_item_active');
    }
  }
  var timeProject = setInterval(sliderProjects, intervalProject);

  $('.our-projects_items_switches_item').click(function() {
    clearInterval(timeProject);
    var index = $(this).index();
    $('.our-projects_item_active').removeClass('our-projects_item_active');
    $('.our-projects_item').eq(index).addClass('our-projects_item_active');

    $('.our-projects_items_switches_item_active').removeClass('our-projects_items_switches_item_active');
    $('.our-projects_items_switches_item').eq(index).addClass('our-projects_items_switches_item_active')
    timeProject = setInterval(sliderProjects, intervalProject);
  });

  


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
      sliderItem = jQuery(item);
        
      if(!slideWrap.is(':animated')) {
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

      if(!slideWrap.is(':animated')) {
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
  
  slider(mainSliderW, mainSliderR, mainSliderL, mainSliderI, flagOn, flagWidthOn);
  slider(reviewsW, reviewsR, reviewsL, reviewsI, flagOff, flagWidthOff);
});