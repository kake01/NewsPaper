$(function(){
  $('.dropdown-toggle').on('click',function () {
    if($('.dropdown-menu').hasClass("show")){
      $('.dropdown-menu').removeClass("show");
    }
    else{
      $('.dropdown-menu').addClass("show");
      $('.gray').addClass("show");
    }
  });
  $('.gray').on('click',function () {
    if($('.gray').hasClass("show")){
      $('.gray').removeClass("show");
      $('.dropdown-menu').removeClass("show");
    }
  });
});
