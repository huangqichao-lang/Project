var promo_left = 0;//图片左边坐标
var promo_direction = -1;//图片切换方向
var promo_left_width = 820;//图片大小
var index = 0;
var top_time;//定时器
let left;
const timeOut = 2800

//起始页面，监控鼠标滑轮位置，改变图片大小
$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$(".lol-head-img").removeClass("big");
		$(".lol-head-big-img").css("display", "none");
		$(".lol-head-small-img").css("opacity", "1");
	}
});

promohover();

//轮播图
var myCursorItem = 0
function promohover() {
	
	for(let i=0;i<5;i++){
		// myCursorItem = i
		$(`.promo-bottom>span`).eq(i).hover(()=>{
			$(".promo-bottom>span:nth-child(1)").removeClass("default");
			$(".promo-top>ul").css("left", `-${(i)*820}px`);
		
			$(".promo-bottom>span").removeClass("promo-bottom-span-show");
			index = i;
			$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
			promo_left = (i)*820;
			clearInterval(top_time)
			// console.log("清除定时器")
		},()=>{
			// console.log("当前移出的是第=>",i)
			// console.log("创建定时器")
			top_time = setInterval(()=>{myCursor(i)}, timeOut)
		})
	}
}

/**
 * 轮播图定时器
 */
const myCursor = (i)=>{
	$(".promo-bottom>span:nth-child(1)").removeClass("default");
	//图片轮播
	left = parseInt($(".promo-top>ul").css("left").replace("px",""))
	
	index++;
	console.log(index)
	
	if (index > 4) {
		index = 0;
		$(".promo-bottom>span").eq(4).removeClass("promo-bottom-span-show");
	}

	promo_left = left + (promo_left_width * promo_direction);
	$(".promo-top>ul").animate({left:promo_left},100)
	
	$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
	$(".promo-bottom>span").eq(index).prev().removeClass("promo-bottom-span-show");
	
	//code2
	if (promo_left < (promo_left_width * promo_direction * 4)) {
		promo_left = 0;
		$(".promo-top>ul").animate({left:promo_left},100);
		
		// promo_left = promo_left + (promo_left_width * promo_direction);
	}

}

top_time = setInterval(()=>{myCursor()}, timeOut);


//导航栏
$(".head-nav").mouseenter(function() {
	$(".head-nav-sub").fadeIn(500);
});
$(".head-nav-sub").mouseleave(function() {
	$(".head-nav-sub").fadeOut(500);
});

$(".head-nav-sub-a").mouseenter(function() {
	$(this).css("color", "#e9c06c");
});
$(".head-nav-sub-a").mouseleave(function() {
	$(this).css("color", "#e1e1e1");
});

//搜索按钮的单击事件
$(".head-right-search").click(function() {
	$(".lol-logo").css("visibility", "hidden");
	$(".head-nav").css("visibility", "hidden");
	$(".head-right-app").css("visibility", "hidden");
	$(".head-right-login").css("visibility", "hidden");
	$(".input-search").css("display", "block");
	$(".lol-head").css("background", "#081322");
});

//关闭搜索按钮的单击事件
$(".close-search").click(function() {
	$(".lol-logo").css("visibility", "visible");
	$(".head-nav").css("visibility", "visible");
	$(".head-right-app").css("visibility", "visible");
	$(".head-right-login").css("visibility", "visible");
	$(".input-search").css("display", "none");
	$(".lol-head").css("background", "none");
});

//APP鼠标移入移出效果
$(".head-right-app").mouseenter(function() {
	$(".head-app-hover").fadeIn(500);
	$(".head-app-hover").mouseenter(function() {
		$(this).css("display", "block");
	});
	clearInterval(appsetinter);
});
$(".head-right-app").mouseleave(function() {
	var appsetinter = setTimeout(function() {
		$(".head-app-hover").css("display", "none");
	}, 500);
	$(".head-app-hover").mouseenter(function() {
		clearInterval(appsetinter);
		$(this).css("display", "block");
	});
});
$(".head-app-hover").mouseleave(function() {
	$(".head-app-hover").fadeIn(500);
	$(this).css("display", "none");
});

//公告栏动画效果
$(".news-top-title>li:nth-child(1)").css("color", "#1da6ba");

$(".news-top-title>li").mouseenter(function() {
	$(".news-top-title>li:nth-child(1)").css("color", "#676767");
	$(this).css("color", "#1da6ba");
	$(this).addClass("selected");
	$(".news-top-title>li:after").css("news-top-title>li:after");
});

$(".news-top-title>li").mouseleave(function() {
	$(this).removeClass("selected");
	$(this).css("color", "#676767");
});

//热门活动列表项的动画效果
$(".act-bottom>ul>li>a").mouseenter(function() {
	$(this).prev().css("display", "block");
	$(this).parent().animate({
		"top": "-5px",
	}, 20);
});

$(".act-bottom>ul>li>a").mouseleave(function() {
	$(this).prev().css("display", "none");
	$(this).parent().animate({
		"top": "5px",
	}, 20);
});

//新英雄的鼠标移入移出事件
$(".new-champion").mouseenter(function() {
	$(".inner-hovers").css("display", "block");
});

$(".new-champion").mouseleave(function() {
	$(".inner-hovers").css("display", "none");
});

//功能模块的鼠标移入移出事件
$(".function-l1").mouseenter(function() {
	$(".inner-hover").css("display", "block");
});

$(".function-l1").mouseleave(function() {
	$(".inner-hover").css("display", "none");
});

$(".function-l3").mouseenter(function() {
	$(this).children().css("color", "#1da6ba");
});

$(".function-l3").mouseleave(function() {
	$(this).children().css("color", "#424242");
});

$(".function-l4").mouseenter(function() {
	$(this).children().css("color", "#1da6ba");
});

$(".function-l4").mouseleave(function() {
	$(this).children().css("color", "#424242");
});

//周免英雄的鼠标移入移出事件
// $(".week-free-a").mouseenter(function() {
// 	$(".week-free-hover").fadeIn(500);
// });
// 
// $(".week-free-a").mouseleave(function() {
// 	$(".week-free-hover").fadeOut(500);
// });
$(".week-free-a").mouseenter(function() {
	$(".week-free-hover").fadeIn(500);
	$(".week-free-hover").mouseenter(function() {
		$(this).css("display", "block");
	});
	clearInterval(appsetinter);
});
$(".week-free-a").mouseleave(function() {
	var appsetinter = setTimeout(function() {
		$(".week-free-hover").css("display", "none");
	}, 500);
	$(".week-free-hover").mouseenter(function() {
		clearInterval(appsetinter);
		$(this).css("display", "block");
	});
});
$(".week-free-hover").mouseleave(function() {
	$(".week-free-hover").fadeIn(500);
	$(this).css("display", "none");
});

//FANART创作馆的鼠标移入移出事件
$(".fanart-left>ul>li").mouseenter(function() {
	$(this).children().eq(1).css("bottom", "0");
});

$(".fanart-left>ul>li").mouseleave(function() {
	$(this).children().eq(1).css("bottom", "-100%");
});

//官方漫画的鼠标移入移出事件
$(".new-model").mouseenter(function() {
	$(this).children().eq(1).css("display", "block");
});

$(".new-model").mouseleave(function() {
	$(this).children().eq(1).css("display", "none");
});

//侧面功能栏的页面定位
$(".rightnav-bar>ul>li").eq(0).click(function() {
	$(window).scrollTop(808);
});

$(".rightnav-bar>ul>li").eq(1).click(function() {
	$(window).scrollTop(1500);
});

$(".rightnav-bar>ul>li").eq(2).click(function() {
	$(window).scrollTop(0);
});

//开发者日志的鼠标移入移出事件
$(".club-developer").mouseenter(function() {
	$(this).children().eq(1).css("display", "block");
});

$(".club-developer").mouseleave(function() {
	$(this).children().eq(1).css("display", "none");
});
