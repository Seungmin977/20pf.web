
// slick
$('.sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slider_box1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    arrows: false,
});

$('.slider_box2').slick({
    asNavFor: ".slider_box1",
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.slider_box3').slick({
    vertical: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.partners').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
});


// let navBar = document.querySelector(".nav .menu");
// let subMenu = document.querySelector(".nav .sub_menu");

// navBar.addEventListener("mouseover", function () {
//     subMenu.style.display = "block";


//     if (navBar.addEventListener && subMenu.addEventListener) {
//         navBar.addEventListener("mouseout", function () {
//             subMenu.style.display = "none";
//         });
//         subMenu.addEventListener("mouseout", function () {
//             subMenu.style.display = "none";
//         });
//     }
// });


// jQuery
let nav = $("#nav");
let navbar = $(".nav .menu");
let subwrap = $(".nav .sub_wrap");
let subMenu = $(".nav .sub_menu");
let navwrap = $(".menu_wrap");

navbar.hover(function () {
    subMenu.stop().slideDown();
    nav.hover(function () {
    }, function () {
        subMenu.stop().slideUp();
    });
});


// footer 부분 패밀리 사이트 바로가기
let siteLink = document.querySelector(".siteLink");
let siteLinksub = document.querySelector(".siteLink > ul");

siteLink.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("on");
    siteLinksub.classList.toggle("on");
});


