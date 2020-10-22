const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    // 로컬 스토지는 자바스크립트의 data를 저장할수가 없다
    // 오직 String만 저장 가능

    // 해결방안으로 JSON.stringify 자바스크립의 오브젝트를 string으로 바꿔준다
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delbtn.innerText = "X"
    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function something(toDo) {
    paintToDo(toDo.text);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if ( loadedToDos !== null) {
        // 단순히 string파일 출력
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // JSON.parse는 오브젝트로
        // console.log(parsedToDos);

        parsedToDos.forEach(something);
    }
}


function init() {
    console.log("aa");
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();

