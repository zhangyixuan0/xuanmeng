$(function(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>A全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>A会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
});
$(".dh li a").on('click',function(){
	// console.log($(this).parent().html());
	var _this = $(this).parent();//columnIndex
	//console.log(_this.html());
	switch(_this.index()){
		case 0:
			index1();
			break;
		case 1:
			index2();
			break;
		case 2:
			break;
		case 3:
			index3();
			break;
		case 4:
			index4();
			break;
		default:
			console.log("F"+_this.index());
			break;
	}
});
function index1(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>A全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>A会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}
function index2(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>B全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>B会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}
function index3(){
	$(".clearfix").html("");
	var htm = "<li class='navli'><a href='javascript:void(0)'>C全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>C会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}
