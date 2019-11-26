function promohoverV1(){
	$(".promo-bottom>span:nth-child(1)").hover(function() {
		$(".promo-top>ul").css("left", "0");
		$(".promo-bottom>span").removeClass("promo-bottom-span-show");
		index = 0;
		$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
		promo_left = 0;
	});
	$(".promo-bottom>span:nth-child(2)").hover(function() {
		$(".promo-bottom>span:nth-child(1)").removeClass("default");
		$(".promo-top>ul").css("left", "-820px");
		$(".promo-bottom>span").removeClass("promo-bottom-span-show");
		index = 1;
		$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
		promo_left = -820;
	});
	$(".promo-bottom>span:nth-child(3)").hover(function() {
		$(".promo-bottom>span:nth-child(1)").removeClass("default");
		$(".promo-top>ul").css("left", "-1640px");
		$(".promo-bottom>span").removeClass("promo-bottom-span-show");
		index = 2;
		$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
		promo_left = -1640;
	});
	$(".promo-bottom>span:nth-child(4)").hover(function() {
		$(".promo-bottom>span:nth-child(1)").removeClass("default");
		$(".promo-top>ul").css("left", "-2460px");
		$(".promo-bottom>span").removeClass("promo-bottom-span-show");
		index = 3;
		$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
		promo_left = -2460;
	});
	$(".promo-bottom>span:nth-child(5)").hover(function() {
		$(".promo-bottom>span:nth-child(1)").removeClass("default");
		$(".promo-top>ul").css("left", "-3280px");
		$(".promo-bottom>span").removeClass("promo-bottom-span-show");
		index = 4;
		$(".promo-bottom>span").eq(index).addClass("promo-bottom-span-show");
		promo_left = -3280;
	});
}