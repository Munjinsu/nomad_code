const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEYS = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos)) //자바스크립트 object 나 arrary 등 어떤 것이든 string으로 바꿔줌.  JSON.stringify()
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // li.id 값을 문자 > 숫자 로 변환 parseInt()
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // newTodo 값은 그대로 
    const newTodoObj = {   // todo 값을 object 로 만듬.  id 를 주는 이유. 내가 지운 li값과 localStorage에 있는 아이템에 있는 값을 비교하기위해 
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 새로고침하면 리셋되기 때문에 저장한걸 불러옴
const savedToDos = localStorage.getItem(TODOS_KEYS);  

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);  // string > object 로 변환 JSON.parse();
    toDos = parsedToDos;  //기존꺼 복원 
    parsedToDos.forEach(paintToDo);
}


