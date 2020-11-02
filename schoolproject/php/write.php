<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title> KARMA | 게시판 </title>
    
     <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap" rel="stylesheet">
    
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    
    
<link rel="stylesheet" type="text/css" href="/php/css/write.css">
    <link rel="stylesheet" type="text/css" href="/php/css/styles.css">
</head>


<body>
    
    <div id="wrap">

    <!-- header, nav -->
    <div id="nav">
			<!-- <div class="container"> -->
            <div class="nav_wrap">

                <div class="nav_menu">

                	<a href="../index.html"> <div class="nav_logo" title="로고"> </div></a>

                    <h2 class="ir_su"> 전체 메뉴 </h2>
                    <!-- 우리 눈에는 필요없으나 시각 접근성에는 필요하기때문에 안보이게하는 class 적용-->

                    <div class="menu">
	                    <div class="menus">
	                        <ul class="name_intro">
	                            <li> <a href="../index.html"> 게임 소개  </a> </li>
							    <ul class="sub_menu">
							        <li> <a href="../index.html#banner"> 게임 이미지 </a> </li>
							        <li> <a href="../index.html#content"> 게임 개요 </a> </li>
							        <li> <a href="../index.html#char_intros"> 캐릭터 소개 </a> </li>  
							    </ul>
					        </ul>
					    </div>
					    
					    
					    <div>
					        <ul class="name_intro"> 
					           <li> <a href="../download_view.html"> 자료실 </a> </li>
					        </ul>
					    </div>
					    
					    <div>
					        <ul class="name_intro"> 
					           <li> <a href="#"> 게시판 </a> </li>
					        </ul>
					    </div>
                  	</div>
                </div>
                
                <img src="../imgs/logo/main_logo.webp" alt="main_logo"/>
                
            </div>
		</div>
    
    <div id="board">   
        <div id="board_write">
        <h1><a href="index.php"> 게시판 </a></h1>
        <h4>글 작성</h4>
            <div id="write_area">
                <form action="write_ok.php" method="post">
                    <div id="in_title">
                        <textarea name="title" id="utitle" rows="1" cols="55" placeholder="제목" maxlength="100" required></textarea>
                    </div>
                    <div class="wi_line"></div>
                    <div id="in_name">
                        <textarea name="name" id="uname" rows="1" cols="55" placeholder="글쓴이" maxlength="100" required></textarea>
                    </div>
                    <div class="wi_line"></div>
                    <div id="in_content">
                        <textarea name="content" id="ucontent" placeholder="내용" required></textarea>
                    </div>
                    
                    <div id="in_pw">
                        <input type="password" name="pw" id="upw"  placeholder="비밀번호" required />  
                    </div>
                    
                    <div id="in_lock">
                        <input type="checkbox" value="1" name="lockpost" />해당글 비공개
                    </div>
                    
                    <div class="bt_se">
                        <button type="submit"> 작성완료 </button>
                        <button> <a href="index.php"> 취소 </a> </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
        
        <!-- footer -->
            <div id="footer">
              <div class="container">
                <div class="footer_nav"> 
                    <div class="footer_logo"> <span class="ir_su"> TEAM_logo </span></div>
                  <div class="footer_span">
                    <span> © 2020 TEAM UNICLAS. ALL RIGHTS RESERVED. </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- //footer -->
    </div>
    <!-- //wrap -->
</body>
</html>