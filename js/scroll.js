jQuery(document).ready(function(){
  var heightPage = jQuery('body').height();
  var heigtFooter = jQuery('.footer').height();   
  var heightSubscribe = jQuery('.subscribe').height();  
  var heightDiscuss = jQuery('.discuss_project_block').height();  
  var heightForCalc = heightPage - (heigtFooter + heightSubscribe + 1.8*heightDiscuss);
  var woman = jQuery('.woman_dis_proj');
  var arrow_form = jQuery('.arrow_form');

  var heightHeader = jQuery('header').height();
  var heightHParalax = jQuery('.paralax').height();
  var heightForCalc2 = heightHeader + 0.5*heightHParalax;
  var know_span1 = jQuery('.know_span1');
  var know_span2 = jQuery('.know_span2');

  jQuery(window).scroll(function() {
      if(jQuery(this).scrollTop() > heightForCalc) {
        woman.addClass('woman_dis_proj_active');
        arrow_form.addClass('arrow_form_active');
      }

      if(jQuery(this).scrollTop() > heightForCalc2) {
        know_span1.addClass('know_span1_active');
        know_span2.addClass('know_span2_active');
      }
    }  
  );
});

  