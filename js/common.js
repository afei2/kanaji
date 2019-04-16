//数字滚动
$('.counter').countUp();

//vuetab
var app = new Vue({
    el: "#app",
    data: {
      cur:0 //默认选中第一个tab
    }
});  
var app = new Vue({
    el: "#tab_2",
    data: {
         cur:0 //默认选中第一个tab
      }
});    
var app = new Vue({
    el: "#tab_3",
    data: {
        cur:0 //默认选中第一个tab
   }
});
var app = new Vue({
    el: "#tab_4",
    data: {
        cur:0 //默认选中第一个tab
   }
});   
  
$("#to-top").click(function () {
        $('html , body').animate({scrollTop: 0}, 'slow');
  });
//轮播
// var mySwiper1 = new Swiper(' .swiper-container', {
// 	slidesPerView : 3,
// 	spaceBetween : 20,
//   autoplay:true,//等同于以下设置
//   autoplay: {
//     delay: 3000,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//     },
//     pagination: {
// 	    el: '.swiper-pagination',
// 	    bulletElement : 'li',
// 	  },
// });
// 
var mySwiper = new Swiper('.swiper_01 .swiper-container', {
  navigation: {
    nextEl: '.swiper_01 .swiper-button-next',
    prevEl: '.swiper_01 .swiper-button-prev',
  },
});
var mySwiper = new Swiper('.swiper_1 .swiper-container',{
  navigation: {
    nextEl: '.swiper_1 .swiper-button-next',
    prevEl: '.swiper_1 .swiper-button-prev',
  },
});


var mySwiper1 = new Swiper('.swiper_2 .swiper-container',{
  navigation: {
    nextEl: '.swiper_2 .swiper-button-next',
    prevEl: '.swiper_2 .swiper-button-prev',
  },
});
var mySwiper2 = new Swiper('.swiper_3 .swiper-container', {
  navigation: {
    nextEl: '.swiper_3 .swiper-button-next',
    prevEl: '.swiper_3 .swiper-button-prev',
  },
});

var mySwiper = new Swiper('.swiper_4 .swiper-container', {
    navigation: {
      nextEl: '.swiper_4  .swiper-button-next',
      prevEl: '.swiper_4  .swiper-button-prev',
    },
  });


//缩略图
var thumbsSwiper = new Swiper('.swiper_5 #thumbs',{
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,//防止不可点击
})
var gallerySwiper = new Swiper('.swiper_5 #gallery',{
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  }
})




/*滚动到底部显示报名*/
$(document).scroll(function()
{
    if($(document).height() - $(document).scrollTop() - window.innerHeight <413 ) {
        $(".footer_scrollbox").removeClass("fixed");
    }
    else{
        $(".footer_scrollbox").addClass("fixed");
    }
});
