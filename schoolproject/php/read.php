<?php
	include $_SERVER['DOCUMENT_ROOT']."/php/db.php"; /* db load */
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title> KARMA | 게시판 </title>
    
     <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap" rel="stylesheet">
    
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    
    
    <link rel="stylesheet" type="text/css" href="/php/css/read.css">
    <link rel="stylesheet" type="text/css" href="/php/css/styles.css">
    
    <link rel="stylesheet" type="text/css" href="/css/jquery-ui.css" />
   
    <script type="text/javascript" src="/php/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="/php/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/php/js/common.js"></script>
    
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

                    <?php
                    $bno = $_GET['idx']; /* bno함수에 idx값을 받아와 넣음*/
                    $hit = mysqli_fetch_array(mq("select * from board where idx ='".$bno."'"));
                    $hit = $hit['hit'] + 1;
                    $fet = mq("update board set hit = '".$hit."' where idx = '".$bno."'");
                    $sql = mq("select * from board where idx='".$bno."'"); /* 받아온 idx값을 선택 */
                    $board = $sql->fetch_array();
                    ?>

                    <!-- 글 불러오기 -->
                    <div id="board_read">

                        <div id="title_info">
                        <h2><?php echo $board['title']; ?></h2>
                        </div>

                            <div id="user_info">
                                작성자 : <?php echo $board['name']; ?> / <?php echo $board['date']; ?> / 조회수 : <?php echo $board['hit']; ?>
                                    <div id="bo_line"></div>
                            </div>

                            <div id="bo_content">
                                <?php echo nl2br("$board[content]"); ?>
                            </div>

                        <!-- 목록, 수정, 삭제 -->
                        <div id="bo_ser">
                            <ul>
                                <li><a href="index.php">[목록으로]</a></li>
                                <li><a href="modify.php?idx=<?php echo $board['idx']; ?>">[수정]</a></li>
                                <li><a href="delete.php?idx=<?php echo $board['idx']; ?>">[삭제]</a></li>
                            </ul>
                        </div>
                    </div>

                <!--- 댓글 불러오기 -->
            <div class="reply_wrap">
                <div class="reply_view">
                    <h3>댓글목록</h3>
                        <?php
                            $sql3 = mq("select * from reply where con_num='".$bno."' order by idx desc");
                            while($reply = $sql3->fetch_array()){ 
                        ?>
                        <div class="dap_lo">
                            <div><b><?php echo $reply['name'];?></b></div>
                            <div class="dap_to comt_edit"><?php echo nl2br("$reply[content]"); ?></div>
                            <div class="rep_me dap_to"><?php echo $reply['date']; ?></div>
                            <div class="rep_me rep_menu">
                                <a class="dat_edit_bt" href="#">수정</a>
                                <a class="dat_delete_bt" href="#">삭제</a>
                            </div>
                            <!-- 댓글 수정 폼 dialog -->
                            <div class="dat_edit">
                                <form method="post" action="reply_modify_ok.php">
                                    <input type="hidden" name="rno" value="<?php echo $reply['idx']; ?>" /><input type="hidden" name="b_no" value="<?php echo $bno; ?>">
                                    <input type="password" name="pw" class="dap_sm" placeholder="비밀번호" />
                                    <textarea name="content" class="dap_edit_t"><?php echo $reply['content']; ?></textarea>
                                    <input type="submit" value="수정하기" class="re_mo_bt">
                                </form>
                            </div>
                            <!-- 댓글 삭제 비밀번호 확인 -->
                            <div class='dat_delete'>
                                <form action="reply_delete.php" method="post">
                                    <input type="hidden" name="rno" value="<?php echo $reply['idx']; ?>" /><input type="hidden" name="b_no" value="<?php echo $bno; ?>">
                                    <p>비밀번호<input type="password" name="pw" /> <input type="submit" value="확인"></p>
                                 </form>
                            </div>
                        </div>
                    <?php } ?>

                    <!--- 댓글 입력 폼 -->
                    <div class="dap_ins">
                        <form action="reply_ok.php?idx=<?php echo $bno; ?>" method="post">
                            <input type="text" name="dat_user" id="dat_user" class="dat_user" size="15" placeholder="아이디">
                            <input type="password" name="dat_pw" id="dat_pw" class="dat_pw" size="15" placeholder="비밀번호">
                            <div style="margin-top:10px; ">
                                <textarea name="content" class="reply_content" id="re_content" ></textarea>
                                <button id="rep_bt" class="re_bt">댓글</button>
                            </div>
                        </form>
                    </div>
                </div><!--- 댓글 불러오기 끝 -->
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
