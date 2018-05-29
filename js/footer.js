$(function(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>A全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>A会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
});
$(".dh li a").on('click',function(){
	// console.log($(this).parent().html());
	var _this = $(this).parent();//columnIndex
	$(".navsearch").attr("style","display: none;");
	$(".navlist").attr("style","display: block;");
	switch(_this.index()){
		case 0:
			index0();
			break;
		case 1:
			index1();
			break;
		case 2:
			index2();
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
function index0(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>A全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>A会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}
function index1(){
	var htm = "<li class='navli'><a href='javascript:void(0)'>B全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>B会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}
function index2(){
	$(".navlist").attr("style","display: none;");
	$(".navsearch").attr("style","display: block;");
}
function index3(){
	$(".clearfix").html("");
	var htm = "<li class='navli'><a href='javascript:void(0)'>C全部科目</a></li>"+
				"<li class='navli'><a href='javascript:void(0)'>C会计从业</a></li>";
	$(".clearfix").html(htm);
	$('.wrapper').navbarscroll();
}