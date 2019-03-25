var flg=1;
$(function(){
  $('.right').on('click' , function(){
    switch(flg){
      case 1:
      $("#slide1").hide();
      $("#slide2").fadeIn('fast');
      break;
      case 2:
      $("#slide2").hide();
      $("#slide3").fadeIn('fast');
      break;
      case 3:
      $("#slide3").hide();
      $("#slide4").fadeIn('fast');
      break;
      case 4:
      $("#slide4").hide();
      $("#slide1").fadeIn('fast');
      break;
    }
    flg++;
    if(flg>4){
      flg=1;
    }
  });
  $('.left').on('click' , function(){
    switch(flg){
      case 1:
      $("#slide1").hide();
      $("#slide4").fadeIn('fast');
      break;
      case 2:
      $("#slide2").hide();
      $("#slide1").fadeIn('fast');
      break;
      case 3:
      $("#slide3").hide();
      $("#slide2").fadeIn('fast');
      break;
      case 4:
      $("#slide4").hide();
      $("#slide3").fadeIn('fast');
      break;
    }
    flg--;
    if(flg<1){
      flg=4;
    }
  });
});
