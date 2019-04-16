var mySwiper = new Swiper('.banners .swiper-container', {
	autoplay: true,//可选选项，自动滑动
})

var mySwiper = new Swiper('.swiper_6 .swiper-container', {
	slidesPerView : 3,
  slidesPerGroup : 1,
})

var mySwiper = new Swiper('.swiper_01 .swiper-container', {
  navigation: {
    nextEl: '.swiper_01 .swiper-button-next',
    prevEl: '.swiper_01 .swiper-button-prev',
  },
});
var mySwiper = new Swiper('.swiper_7 .swiper-container',{
  slidesPerView : 3,
  slidesPerGroup : 1,
})
var mySwiper = new Swiper('.swiper_02 .swiper-container', {
  navigation: {
    nextEl: '.swiper_02 .swiper-button-next',
    prevEl: '.swiper_02 .swiper-button-prev',
  },
});

var app = new Vue({
    el: "#app",
    data: {
      cur:0 //默认选中第一个tab
    }
}); 
var mySwiper = new Swiper('.swiper_1 .swiper-container',{
  navigation: {
    nextEl: '.swiper_1 .swiper-button-next',
    prevEl: '.swiper_1 .swiper-button-prev',
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

var app = new Vue({
    el: "#tab_4",
    data: {
        cur:0 //默认选中第一个tab
   }
});  