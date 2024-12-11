import {useState, useEffect} from "react"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  }
  
  console.log(toDos)
  console.log(toDos.map((item, index)=> (
    <li key={index}>{item}</li>
    )))
  
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do...."
        />
        <button>Add To do</button>
      </form>
      <hr />
        <ul>

          {toDos.map((item, index)=> (
          <li key={index}>{item}</li>
          ))}  {/* map은 하나의 array에 있는 item을 내가 원하는 값으로 바꾸는 역활을 한다.*/}
        </ul>
    </div>
  );
}

export default App;
