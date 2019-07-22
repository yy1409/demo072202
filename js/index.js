$(function(){
	var page=0;
	var start=true;
	function Tab(){
//		if(start){
			$(".silde").animate({
				"left":-840*page+'px'
			},300,function(){
				if($(".silde").position().left==-4*840+'px'){
					$(".silde").css('left',-840)
				}
			});
			$(".list li").removeClass('active');
			$(".list li").eq(page).addClass('active');
			page++;
			if(page>2){
				page=0;
			}
//		}
		setTimeout(Tab,2000);
	}
	Tab();
	$("dl div").css("display","none");
	$(".expansion").toggle(function(){
		$("dl div").css("display","block");
		$(".expansion").html("收起<i class='top'></i>");
	},function(){
		$("dl div").css("display","none");
		$(".expansion").html("展开<i></i>");
	})
	
	
})
