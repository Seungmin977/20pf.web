
function init() {

    // 윈도우 스크롤 시 작동 
    window.addEventListener("scroll", function () {

        let pageYOffset = window.pageYOffset;
        let navOffset = document.querySelector("#nav").offsetTop;
        let pofolOffset = document.querySelector("#content").offsetTop;
        let skillOffset = document.querySelector("#skill").offsetTop;
        let winHeight = window.outerHeight;

        console.log(pageYOffset);

        // navBar색상 조정 on off 
        if (pageYOffset + winHeight / 2 < navOffset) {
            document.querySelector(".nav ul li").classList.add("on");
            document.querySelector(".nav ul li:nth-child(2)").classList.remove("on");
            document.querySelector(".nav ul li:nth-child(3)").classList.remove("on");
        } else if (pageYOffset + winHeight / 2 < pofolOffset) {
            document.querySelector(".nav ul li:nth-child(2)").classList.add("on");
            document.querySelector(".nav ul li:nth-child(3)").classList.remove("on");
            document.querySelector(".nav ul li").classList.remove("on");
        } else {
            document.querySelector(".nav ul li:nth-child(3)").classList.add("on");
            document.querySelector(".nav ul li:nth-child(2)").classList.remove("on");
            document.querySelector(".nav ul li").classList.remove("on");
        }

        // gotop 부분 
        if (pageYOffset > pofolOffset) {
            document.querySelector("#gotop").classList.add("on");
        } else {
            document.querySelector("#gotop").classList.remove("on");
        }

        // navBar fixed
        if (navOffset < pageYOffset) {
            document.querySelector(".nav").className = "nav fixed";
            document.querySelector(".About > h2").className = "fixed_p";
        } else {
            document.querySelector(".nav").className = "nav";
            document.querySelector(".About > h2").className = "";
        }

        // 포트폴리오 효과
        for (var i = 1; i < 6; i++) {
            if (pageYOffset + winHeight / 2 > document.querySelector(".effect" + i).offsetTop) {
                document.querySelector(".effect" + i).classList.add("show");
            }
            // if (pageYOffset + winHeight / 2 > document.querySelector(`.effect${i}`).offsetTop) {
            //     document.querySelector(`.effect${i}`).classList.add("show");
            // }
        };

    });

    // 변수 저장
    let ham = document.querySelector(".mNav .mNav_ham");
    let nav_bar = document.querySelector(".nav ul");
    let tabList = document.querySelectorAll(".tab_list");

    //햄버거 메뉴
    ham.addEventListener("click", function () {
        ham.classList.toggle("open");
        nav_bar.classList.toggle("open");
    });

    // resize 시 햄버거 삭제
    window.addEventListener("resize", function () {
        let winWidth = window.innerWidth;

        if (winWidth > 768) {
            nav_bar.classList.remove("open");
        }
    });

    // 탭 메뉴
    Array.prototype.forEach.call(tabList, function (list) {
        list.children[0].addEventListener("click", function (e) {
            e.preventDefault();

            let tabContent = document.querySelectorAll(".tab_cont");
            let Nums = this.parentElement.getAttribute("data-nums");

            Array.prototype.forEach.call(tabContent, function (cont, i) {
                // cont.classList.remove("active"); // active 없애기
                // tabList[i].classList.remove("tab_active");
                cont.style.display = "none"; // tabContent 전부 none
                tabList[i].className = "tab_list"; // tabContent 전부 tab_list로 초기화
            });
            // tabContent[Nums].classList.add("active"); // 같으면 active 추가 
            // list.classList.add("tab_active");
            tabContent[Nums].style.display = "block";

            if (list.className.indexOf("tab_active") == -1) {
                list.className = "tab_list tab_active";
            }
        });
    });

    // 인트로 토글
    for (let e = 1; e < 6; e++) {
        let images = document.querySelector(".image" + e);
        images.addEventListener("click", function () {
            images.querySelector(".intro").classList.toggle("on");
        });
        // document.querySelector(`.image${e}`).addEventListener("click", function () {
        //     document.querySelector(`.image${e} > .intro`).classList.toggle("on");
        // });
    }
}

// jQuery nav 클릭 애니메이션 
(function ($) {

    let nav = $(".nav ul li");
    let introtop = $("#header").offset().top;
    let cont = $("#content").offset().top;
    let about = $("#About").offset().top;
    let gotop = $("#gotop");

    // nav 메뉴 클릭 시 이동 효과 
    nav.click(function (e) {
        e.preventDefault();

        let target = $(this);

        let index = target.index();
        // alert(index);


        if (index == 0) {
            $("html, body").animate({ scrollTop: introtop }, 600);
        } else if (index == 1) {
            $("html, body").animate({ scrollTop: about }, 600);
        } else if (index == 2) {
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


init();
