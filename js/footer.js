$(".dh li a").on('click',function(){
	/*$.get($(this).attr("class"),function(data){
		$(".content").html(data);
	});*/
	// console.log($(this).parent().html());
	var _this = $(this).parent();//columnIndex
	//console.log(_this.html());
	switch(_this.index()){
		case 0:
			console.log("A");
			break;
		case 1:
			console.log("B");
			break;
		case 2:
			index2();
			break;
		case 3:
			index3();
			break;
		case 4:
			console.log("E");
			break;
		default:
			console.log("F"+_this.index());
			break;
	}
});
function index2(){
	mizhu.toast('功能暂未开通',3000);
}
function index3(){
	mizhu.toast('功能暂未开通',3000);
}
