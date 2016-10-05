jQuery(document).ready(function(){
  var heightPage = jQuery('body').height();
  var heigtFooter = jQuery('.footer').height();   
  var heightForm = jQuery('.form_prom_bg').height();  
  var heightForCalc = heightPage - (heigtFooter + 1.4*heightForm);
  var arrow_form_left = jQuery('.prom_left_arrow');
  var arrow_form_right = jQuery('.prom_right_arrow');

  jQuery(window).scroll(function() {
      if(jQuery(this).scrollTop() > heightForCalc) {
        arrow_form_left.addClass('prom_left_arrow_active');
        arrow_form_right.addClass('prom_right_arrow_active');
      }
    }  
  );
});

  