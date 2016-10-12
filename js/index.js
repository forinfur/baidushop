$(function(){
// banner轮播
		// var bgbox=$(".ban_l")
		// var imgbox=$(".ban_box")[0]
		// var rt=$(".btnrt")[0]
	 // 	var lt=$(".btnlt")[0]
	 // 	var img=$('.ban_box img')
		// var flag=true
		// var t=setInterval(move,3000)
		// function move(){
		// var fir=$('.ban_box img:first')
		// var imgwid=$(fir).width()
		// img.css({width:imgwid})
		// if (!flag) {return};
		// flag=false
		// $(imgbox).animate({left:-imgwid},function(){
		// 	 	$(imgbox).append(fir)
		// 	 	$(imgbox).css({left:0})
		// 	 	flag=true
		// 	 })			 
		// }
		// bgbox.mouseover(function(){
		// 	clearInterval(t)
		// })
		// bgbox.mouseout(function(){
		// 	t=setInterval(move,3000)
		// })
		// $(rt).click(function(){
		// 	move()
		// 	flag=false
		// })
		// $(lt).click(function(){
		// 	var fir=$('.tukuang img:first')
		// 	var las=$(".tukuang img:last")

		// 	if (!flag) {return};
		// 	flag=false
		// 	$(imgbox).css({left:-imgwid})
		// 	$(imgbox).prepend(las[0])
		// 	 $(imgbox).animate({left:0},function(){
		// 	 	flag=true
		// 	 })		
		// })

var img=$('.ban_box img')
var t=setInterval(move,1000)
var num=0
function move(){
	var imgbox=$(".ban_l")
	num+=1;
	if (num==4) {
		imgbox.css({left:0})
	};
	var fir=$('.ban_l img:first')
	var imgwid=$(fir).width()
	imgleft=num*imgwid
	console.log(imgwid)
	imgbox.animate({left:-imgleft})
}

})
