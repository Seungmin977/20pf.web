(function ($) {

    // Swiper js 배너 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay: {
            delay: 5000,
        },

    });

    //영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        // mousewheel: true,
        autoplay: {
            delay: 6000,
        },

        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });


    //영화차트 탭 메뉴 제이쿼리
    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();
    //eq로 첫번째것만 보이게

    movBtn.click(function (e) {
        e.preventDefault();
        var target = $(this); // 선택된것을 타겟에 저장
        var index = target.index(); //타겟누른거에 임의의 번호주기

        movBtn.removeClass("active"); //active 삭제
        target.addClass("active"); //target에 active 추가
        movCont.css("display", "none"); //css를 display 를 none 시키기
        movCont.eq(index).css("display", "block"); //선택한 요소 중에서 전달받은 인덱스에 해당하는 요소를 선택함.
        //movCont에 인덱스 숫자를 넣고 즉 타겟을 넣고 선택된거에 display를 block으로 보여줌
    });

    //공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠 내용 숨기기
    tabMenu.find("ul > li > ul").hide();

    // active만 보이게
    tabMenu.find("li.active > ul").show();

    //누르면 바꾸기

    function tabList(e) {
        e.preventDefault();
        var target = $(this); // 뭐 선택했는지 알기위해서 

        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        //next는 그 옆에꺼 즉 tartget은 li 옆 ul을 보여줌 그리고 그 부모를 찾고 addCalss active 추가 그 형제 li 는 active 제거 그리고 ul 찾아서 안보이게
    };
    // tabList 함수를 만들었음

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
    //함수적용


})(jQuery);

//시작하자마자 로딩하려면 써줘야함 