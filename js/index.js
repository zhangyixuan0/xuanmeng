$(document).ready(function(){
	$.get("../common/header.html",function(data){
		$(".header").html(data);
	});
	$.get("../common/content.html",function(data){
		$(".content").html(data);
	});
	$.get("../common/footer.html",function(data){
		$(".footer").html(data);
	});
})
