
	$(document).ready(function(){

  $(".bars").click(function(){
    $(".bannerp-popup").css('right','0');
  });
  $(".close").click(function(){
    $(".bannerp-popup").css('right','-3000px');
  });
  $(".search-btn").click(function(){
    $(".header-form").css('right','0');
  });
  
});


        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $("header").addClass("fixed");
            } else {
                $("header").removeClass("fixed");
            }
        });
  

$(document).ready(function(){


// ============ hiding js =============
function myfunction(){
  if($(window).width() <= 991){
      $("#bars").click(function(){
        // $("#myTopnav").css('transform','translateX(0)');
        $("#myTopnav").toggleClass('active');
      });
    $("#MainContent").click(function(){
        // $("#myTopnav").css('transform','translateX(0)');
        $("#myTopnav").removeClass('active');
      });
  // $(document).mouseup(function(e) 
  // {
   // console.log("ME CALLED");
      //var container = $("#myTopnav");

      // if the target of the click isn't the container nor a descendant of the container
      //if (!container.is(e.target) && container.has(e.target).length === 0) 
     // {
        //  container.hide();
        //  $("#myTopnav").removeClass('active');
     // }
  // });
}
}
 $( window ).resize(function() {
  myfunction();


});  
 myfunction();
});


	const anChor = document.querySelectorAll('.nav-bar ul li a');
anChor.forEach(el => {
  let isHash = el.getAttribute('href') == '#';
  let isActive = el.pathname === location.pathname;
  el.classList.toggle('active', isActive);
  if (isHash) {
    el.classList.remove('active');
  }
  el.addEventListener('click', () => {
    if (isHash) {
      const lis = document.querySelectorAll('.nav-bar ul li a');
      lis.forEach(li => {
        li.classList.remove('active');
      })
      el.classList.toggle('active', isActive);
    }
   
  });
});
