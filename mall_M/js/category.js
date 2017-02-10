/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-18 13:33:22
 * @version $Id$
 */

$(function(){	
		// 导航左侧栏js效果 start
		$(".pullDownList li").hover(function(){
			$(".yMenuListCon").fadeIn();
			var index=$(this).index(".pullDownList li");
			$(this).addClass("menulihover").siblings().removeClass("menulihover");
				$(this).addClass("menuliselected").siblings().removeClass("menuliselected");
			$($(".yMenuListConin")[index]).fadeIn().siblings().fadeOut();
		},function(){	
		})
		
		
	})

