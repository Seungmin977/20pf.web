
// 윈도우 스크롤 시 작동 
window.addEventListener("scroll", function () {

    let pageYOffset = window.pageYOffset;
    let pofoloffset = document.querySelector("#content").offsetTop;
    let navoffset = document.querySelector("#nav").offsetTop;
    let winheight = window.outerHeight;

    console.log(pageYOffset);

    // intro , pofol 색상 조정 on off 
    if (pageYOffset + winheight / 2 < navoffset) {
        document.querySelector(".nav ul li").classList.add("on");
        document.querySelector(".nav ul li:nth-child(2)").classList.remove("on");
    } else {
        document.querySelector(".nav ul li").classList.remove("on");
        document.querySelector(".nav ul li:nth-child(2)").classList.add("on");
    }

    // gotop 부분 
    if (pageYOffset > pofoloffset) {
        document.querySelector("#gotop").classList.add("on");
    } else {
        document.querySelector("#gotop").classList.remove("on");
    }
});


// jQuery nav 클릭 애니메이션 
(function ($) {

    let nav = $(".nav ul li");
    let introtop = $("#header").offset().top;
    let cont = $("#content").offset().top;
    let gotop = $("#gotop");

    // nav 메뉴 클릭 시 이동 효과 
    nav.click(function (e) {
        e.preventDefault();

        let target = $(this);

        let index = target.index();
        // alert(index);

        //$("html, body").animate({ scrollTop: introtop });
        if (index == 0) {
            $("html, body").animate({ scrollTop: introtop }, 600);
        } else if (index == 1) {
            $("html, body").animate({ scrollTop: cont }, 600);
        }
    });

    gotop.click(function (e) {
        e.preventDefault();

        $("html, body").animate({ scrollTop: introtop }, 400);
    });

    // for (let i = 0; i < index + 1; i++) {
    //     $(window).scroll(function () {

    //     });
    // }

})(jQuery);