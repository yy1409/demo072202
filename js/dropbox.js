$(function(){
	$(".person div").css("display","none");
	$(".person").click(function(){
		$(".person div").css("display","inline-block");
		$(".person div").css("position","absolute");
		$(".person div").css("top","30px");
		$(".person div").css("left","-60px");
	})
	$(".person div").click(function(){
		console.log(1)
		location.href("index.html");
	})
})
