jQuery(document).ready(function(){

  var ourTeamW = '.all_tm',
      ourTeamR = '.right_arrow',
      ourTeamL = '.left_arrow',
      ourTeamI = '.team_mate_item';

  var flagOn = true,
      flagOff = false;

  var flagWidthOn = true,
      flagWidthOff = false;


  function slider(wrap, right, left, item, timerFlag, widthFlag){
    if (wrap) {
      var slideWrap = jQuery(wrap);
      var nextLink = jQuery(right);
      var prevLink = jQuery(left);
      var sliderItem = jQuery(item);
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
        sliderItem = jQuery(item);

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
    } else {
      return 1;
    }
  }
  slider(ourTeamW, ourTeamR, ourTeamL, ourTeamI, flagOff, flagWidthOn);
});