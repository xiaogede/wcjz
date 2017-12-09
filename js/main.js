/**
 * Created by lenovo on 17/12/5 005.
 */
 //Initialize Swiper

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next'
    }
});
var mss=document.getElementById("mss");
var musimg=document.querySelector(".musimg");
var musdg=document.querySelector(".musdg");
var audio=document.querySelector("audio");
var a=1;
mss.onclick=function(){
    if(a==1){
        musimg.style.display="none";
        musdg.style.animation="none";
        audio.pause();
        a=0;
    }else {
        musimg.style.display="block";
        musdg.style.animation="ms 1s linear infinite";
        audio.play();
        a=1;
    }

};
//第一屏开始

//结束