  
  $(function(){

  
  //모바일 헤더 네비게이션 바
     

  var srwidth = $(window).width();
  if(srwidth <= 1440){
      $(".btn-nav").click(function(){
      $(".main-nav, .btn-nav-close").show();
      $(".btn-nav").hide();
  })
  $(".btn-nav-close").click(function(){
      $(".main-nav, .btn-nav-close").hide();
      $(".btn-nav").show();
  })
  $(function(){
  $('.main-nav>ul>li').mouseenter(function(){
   $(this).find('.sub-nav').stop().toggle(300);
  $('.main-nav>ul>li').mouseleave(function(){
   $('.sub-nav').stop().hide(300);      
  })
   })
   })    
  }else{
      $(".main-nav>ul>li").mouseenter(function(){
      $(".sub-nav, .menuBg").stop().slideDown();
      })
      $(".main-nav>ul>li").mouseleave(function(){
      $(".sub-nav, .menuBg").stop().slideUp();
      })
  }

  var swiper = new Swiper(".mySwiper", {
      
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
  delay: 2000,
  disableOnInteraction: false
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
  },
  });
 

  var ww = $(window).width();
  
  myswiper = new Swiper(".item-mySwiper", {
      slidesPerView: 1.1,
      spaceBetween: 30,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
          // when window width is >= 768px
          768: {
              slidesPerView: 2.2,                
          },
          // when window width is >= 1440px
          1440: {
              slidesPerView: 3,
              spaceBetween: 25,                
          },
      }
  
  });

})