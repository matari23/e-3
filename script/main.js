$(function(){
//메뉴
$(".main>li").hover(function(){
$(this).find(".sub").stop().slideDown();
},function(){
$(".sub").stop().slideUp();
})

//이미지슬라이드
var n=0;
setInterval(function(){
    if(n==2){
        n=0;
    }else{
        n++;
    }
    pos = n * ("-600") + "px"
    console.log("pos:",pos)
    $(".move").animate({top:pos},500)
},3000)

//팝업
$(".pop").click(function(){
    $(".popup").show();
})
$(".close").click(function(){
    $(".popup").hide();
})

})//jq