const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


//에드이벤트리스너로 클릭이될때마다 지정하는 함수를 호출해줘 라는 뜻 
//메뉴랑 아이콘의 클래스 리스트 중 active가 없다면 추가해줌 있다면 빼주는 것



let modalo = document.querySelector('.modal_open > button');
let modals = document.querySelector('.modal');
let modalc = document.querySelector('.modal_cont > button');

modalo.addEventListener('click', () => {
    modals.style.display = "block";
});

modalc.addEventListener('click', () => {
    modals.style.display = "none";
});

