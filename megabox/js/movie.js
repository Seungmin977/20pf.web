(function ($) {

    /* 트레일러 영상 플레이어를 활성화 */
    /* Youtube iframe API : https://developers.google.com/youtube/player_parameters?hl=ko */

    (function handleTrailer() {
        // 셀렉터 캐시
        var $selector = {
            body: $("body"),
            overlay: $("#blackout"),
            modal: $("#trailerModal"),
            showButton: $("#showTrailer"),
            hideButton: $("#hideTrailer"),
        };
        // 변수 객체 

        // 플레이어
        var player = {
            obj: null, // 플레이어 오브젝트
            query: {
                theme: "dark",
                color: "white",
                controls: 1,
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };
        // 유투브 api 에서 가져온거임 query 부분은

        //보이기, 숨기기 활성화 
        $selector.showButton.on("click", showPlayer);
        $selector.hideButton.on("click", hidePlayer);

        //YouTube API를 이용해 iframe을 생성

        //player.obj 는 위에 player만든값이 null인데 거기에 YT.Player를 넣음
        function setPlayer(id) {
            player.obj = new YT.Player("trailer", {
                width: 480,
                height: 282,
                videoId: id,
                playerVars: player.query
            });
            // videoId 부분이 영상 id 인데 이걸 다른곳으로 넘겨줌
            // 처음 플레이어 크기 설정
            resizePlayer();

            // 리사이즈 화면 회전시 플레이어 크기 다시 설정 ex) 스마트폰 화면회전
            $(window).on("resize orientationchange", function () {
                resizePlayer();
            });
        }
        // 유트브 api에서 가져옴 player

        function resizePlayer() {
            var viewport = {},
                frame = {},
                modal = {};

            viewport.width = $(window).width();
            //윈도우 width , height 값 가져오기
            viewport.height = $(window).height();

            frame.width = viewport.width;
            frame.height = frame.width / 1.6; // 화면비율을 16:10 으로 지정

            modal.top = ((viewport.height - frame.height) / 2) + "px";
            // modal top 값 구하기 중앙정렬임 전체 hegiht 값에서 프레임 height 값 뺴고 거기에 /2 해서 중간부분
            modal.left = "0px";

            $selector.modal.css(modal);
            // modal.css 를 붙임 modal 에 modal css는 포지션 어브솔루트 값을 줬음 top, left는 스크립트로 줌 

            player.obj.setSize(frame.width, frame.height);
            //null 값인 obj 에 setSize 값 
        }

        // iframe 보이기
        function showPlayer() {
            if (!player.obj) {
                setPlayer($selector.showButton.data("youtube"));
                // show button 에 유투브 데이터 넣어줌?
            }
            //player.obj 값이 null이 아니면 실행

            $selector.body.addClass("modal_on");
            // 실행하면 modal on을 body에 붙임 
            $selector.overlay.show();
            // 오버레이 보여주기
            player.visible = true;
            // player에 visible 기본값은 false인데 이걸 보여주기로바꾸기 

        }

        // iframe 감추기
        function hidePlayer() {
            player.obj.stopVideo();
            $selector.overlay.hide();
            //오버레이 감추기

            $selector.body.removeClass("modal_on");
            //모달 온 지우기

            player.visible = false;
            // 다시 안보이게 
        }


    })();
    /* 바로 실행 */

})(jQuery);

/* 이경우는 Jquery를 사용할 때, $ 달러의 의미를 jquery에서 사용하겠다는 의미*/