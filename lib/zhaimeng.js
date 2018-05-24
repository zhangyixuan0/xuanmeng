$(function(){
	$('.dh li').click(function(){
		$(this).addClass("faa");
		$('.dh li').not($(this)).removeClass("faa");
	});
	$('header li').eq(0).click(function(){
		$('.kj').attr("src","taba.html");
	});
	$('header li').eq(1).click(function(){
		$('.kj').attr("src","tabb.html");
	});
	$('header li').eq(2).click(function(){
		$('.kj').attr("src","tabc.html");
	});
	$('header ul li p').click(function(){
		$(this).addClass("bor");
		$('header ul li p').not($(this)).removeClass("bor");
	});
	$('.content .tj').click(function(){

	});
	$('.content .dgz').click(function(){
		$('.content .pf ul li .gz').attr("class","glyphicon glyphicon-star gz").css({color:"#FF6FA2"});
		$('.content .pf ul li .sgz').html("已关注").css({color:"#FF6FA2"});
	});
	$('.content .dxh').click(function(){
		$('.content .pf ul li .xh').attr("class","glyphicon glyphicon-heart xh").css({color:"#FF6FA2"});
		if($('.content .sxh').attr("data-key")!=="on"){
			num=Number($('.content .xh').next().html())+1;
			$('.content .xh').next().html(num);
			$('.content .sxh').attr("data-key","on");
		}
	});
	$('footer li').eq(0).click(function(){
		$('.kj').attr("src","tabb.html");
		$('.zhuye').show();
		$('.tou').hide();
	});
	$('footer li').eq(1).click(function(){
		$('.kj').attr("src","sp.html");
		$('.tou').show();
		$('.zhuye').hide();
		$('.ti span').eq(1).html("视频");
	});
	$('footer li').eq(2).click(function(){
		$('.fb').slideUp("slow").show();
	});
	$('footer li').eq(3).click(function(){
		$('.kj').attr("src","xx.html");
		$('.tou').show();
		$('.zhuye').hide();
		$('.ti span').eq(1).html("消息");
	});
	$('footer li').eq(4).click(function(){
		$('.kj').attr("src","wd.html");
		$('.zhuye,.tou').hide();
	});
	$('.fb .guanbi').click(function(){
		$('.fb').hide();
	});
	gao=$(window).height();
	$('.kj').css({"height":gao,"width":"100%"});
	$('.nrl').click(function(){
		history.back(-1);
		$('header,footer').hide();
	});
	$('.pha').click(function(){
		$('header,footer').hide();
	});
});