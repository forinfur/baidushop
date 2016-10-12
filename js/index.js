$(function(){
// banner轮播
		var bgbox=$(".ban_l")
		var imgbox=$(".ban_box")[0]
		var rt=$(".btnrt")[0]
	 	var lt=$(".btnlt")[0]
	 	var img=$('.ban_box img')
		var flag=true
		var t=setInterval(move,3000)
		function move(){
		var fir=$('.ban_box img:first')
		var imgwid=$(fir).width()
		img.css({width:imgwid})
		if (!flag) {return};
		flag=false
		$(imgbox).animate({left:-imgwid},function(){
			 	$(imgbox).append(fir)
			 	$(imgbox).css({left:0})
			 	flag=true
			 })			 
		}
		bgbox.mouseover(function(){
			img.animate({width:+=40,height:+=40})
			clearInterval(t)
		})
		bgbox.mouseout(function(){
			t=setInterval(move,3000)
		})
		$(rt).click(function(){
			move()
			flag=false
		})
		$(lt).click(function(){
			var fir=$('.tukuang img:first')
			var las=$(".tukuang img:last")

			if (!flag) {return};
			flag=false
			$(imgbox).css({left:-imgwid})
			$(imgbox).prepend(las[0])
			 $(imgbox).animate({left:0},function(){
			 	flag=true
			 })		
		})

})
