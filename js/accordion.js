$(document).ready(function(){
  $(".collapse").hide();
  $("a.text-body").click(function(){
    $(this).toggleClass("active").next().slideToggle("slow");
    return false;
  });
});
