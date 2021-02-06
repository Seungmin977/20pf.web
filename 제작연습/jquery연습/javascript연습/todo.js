
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // 버튼선택한거 li 제거
    // 제거된 li 검사 todo 배열에 저장된 id 랑 li에 id랑 다른거 제외
    const cleanToDos = toDos.filter(function (toDo) {
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
        // 모든 toDos 의 id 가 li 의 id 와 같지 않은거 걸러내기?
    })
    toDos = cleanToDos;
    //toDos 에 변경된 값 넣기
    saveToDos();
    //저장
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localstorage 에는 string 만 저장가능해서 json stringify로 변환시켜줘야함 파싱 
}

// 받은 text 값을 li , btn, span 등을 만들고 span에 text 내용을 붙이고 toDoList에 값들을 다 붙임
// toDoobj 에 text , id 등을 저장하고 toDos 배열에 넣어줌 그리고 saveDos 에 저장
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// input에 있는 값을 paintTodo로 보내고 값 "" 으로 만듬
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    // submit 엔터치면
}

init();
