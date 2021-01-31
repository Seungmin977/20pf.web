
// 배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed: 1000,
    dots: true
});

// 라이트 갤러리
$(".lightgallery_img").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

// 슬라이드 갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$(".play").click(function () {
    $(".gallery_img").slick("slickPlay");
});
//play 클래스 클릭하면 슬릭 명령어 슬릭플레이 실행 

$(".pause").click(function () {
    $(".gallery_img").slick("slickPause");
});

$(".prev").click(function () {
    $(".gallery_img").slick("slickPrev");
});

$(".next").click(function () {
    $(".gallery_img").slick("slickNext");
});

// nav
let navBtn = document.querySelector(".content_title .btn");
let nav = document.querySelector(".content_nav");
let subNav = document.querySelector(".content_nav .nav ul li a");
let navButton = document.querySelector(".content_title a");

navBtn.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.toggle("on");
    navButton.classList.toggle("on");
});
subNav.addEventListener("focus", function () {
    nav.classList.add("on");
    navButton.classList.toggle("on");
});

// 탭 매뉴
let tabMenu = document.querySelector(".tab_menu > ul");
let tabMenus = document.querySelectorAll(".tab_menu > ul > li");
tabMenus.forEach(function (list) {
    list.children[0].addEventListener("click", function (e) {
        e.preventDefault();
        let tabCont = document.querySelectorAll(".tab_cont");
        let datanum = this.parentElement.getAttribute("data-num");

        tabCont.forEach(function (cont, i) {
            cont.className = "tab_cont";
            tabMenu.children[i].className = "";
        });
        tabCont[datanum].className = "tab_cont active";
        tabMenu.children[datanum].className = "active";
    });
});