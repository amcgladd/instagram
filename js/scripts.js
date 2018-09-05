$(document).ready(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
      console.log("test");
      $(".navBar").addClass('shrink-nav');
      $("#line").fadeOut();
      $("#insta-logo").fadeOut();
    } else {
      $(".navBar").removeClass('shrink-nav')
      $("#line").fadeIn();
      $("#insta-logo").fadeIn();
    }
  })
})
