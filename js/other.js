jQuery(document).ready(function(){
  jQuery('.button').click(function() {
    jQuery('.request_call').css({'visibility' : 'visible'}).addClass('request_call_active');   
  });

  jQuery('.request_call_bg').click(function() {
    jQuery('.request_call').removeClass('request_call_active').css({'visibility' : 'hidden'});   
  });
});