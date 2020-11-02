//라이트 박스 
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 
//<script src="js/lightgallery.min.js"> 추가 하고 위에 설정대로 설정;

//윈도우 팝업
$(".window").click(function(e){
	e.preventDefault();
	//window.open("파일명", "팝업이름", "옵션설정");
	// 옵션 : left, top, width, height, status, toolbar, location,
	//menubar, scroollbars, fullscreen
	window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scroollbars=0, toolbar=0, menubar=0");
});


//레이어 팝업
$(".layer").click(function(e) {
	e.preventDefault();
	//$("#layer").show();
	//$("#layer").css("display", "block");
	//$("#layer").fadeIn();
	$("#layer").slideDown(200);
});

$("#layer .close").click(function(e) {
	e.preventDefault();
	//$("#layer").hide();
	//$("#layer").css("display", "block");
	//$("#layer").fadeOut();
	$("#layer").slideUp(200);
});



//탭메뉴 j쿼리
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabmenu(e) {
	e.preventDefault();
	var $this = $(this); //클린한거 저장 
	$this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
	//this에 저장한거에 next ul 을 보여주고 li를 active 해주고 다른 li 의 active는 지워주고 ul을 숨긴다.	
}

$tab_list.find("ul>li>a").click(tabmenu).focus(tabmenu);
//탭 메뉴  ul 아래 li 아래 a를 클릭하면 tabmneu 작동 focus 탭메뉴쓰면 포커스 가 따라가서 웹표ㅕ준준수함 tab 누르면 따라감 



//배너
//html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplayspeed: 1000,
		dots: true 
	});
	//깃허브에 옵션 정리되어있음 settings 에 보고 설정해도됨

	//갤러리
	$(".gallery_img").slick({
		/*arrows:false,
		fade:true,*/
		fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1


	});
	//slick 호출 
	//다음 이미지 , 전 이미지 박스 안보이게 
	$(".play").click(function(){
		$(".gallery_img").slick("slickPlay");
	});
	//play 클래스 클릭하면 슬릭 명령어 슬릭플레이 실행 

	$(".pause").click(function(){
		$(".gallery_img").slick("slickpause");
	});

	$(".prev").click(function(){
		$(".gallery_img").slick("slickPrev");
	});

	$(".next").click(function(){
		$(".gallery_img").slick("slickNext");
	});



//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".title .btn").click(function(e){
	e.preventDefault();
	//# 때문에 위로한번 올라가서 실행되는것을 차단해주는 것 e.
	//$("#cont_nav").css("display","block");
	//$("#cont_nav").show(); 이렇게도 가능함 show는 display이 none 을 block 으로 바꿔줌 
	//$("#cont_nav").fadeIn(); 이렇게하면 천천히 나타나게됨
	//$("#cont_nav").slideDown(); 슬라이드 처럼 내려감 애니메이션 단 한번바께 못씀 
	//$("#cont_nav").toggle(); 이건 show 랑 hide 가 합쳐진기능을함 이게 나타낫다가 사라짐 
	//$("#cont_nav").fadeToggle(); 서서히 나타났다가 사라지게할수있음
	//$("#cont_nav").slideToggle(); 슬라이드로 나타났다사라짐 
	$("#cont_nav").slideToggle(200);
	// 가로 안에는 속도 넣을수있음
	//$(".title .btn").addClass("on"); 자기 자신을 클릭해서보면 on이 붙어있음 f12에 나옴 css 만 살짝 바꿔주면 다른효과가능 모양바꿀수 있음 
	
	//$(".title .btn").toggleClass("on"); //on을 붙임 버튼누르면 css에 .title .btn.on {background-position: 0 -660px;} 추가해서 버튼을 내리면 위에 방향보는걸로 바꿈 
	//자기자신을 표현하니까 this 를 주로 씀 
	$(this).toggleClass("on");

});
//tit .btn 을 누르면 cont_nav 에 css 를 block으로 바꿔라