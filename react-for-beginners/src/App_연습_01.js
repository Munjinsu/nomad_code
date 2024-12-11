import {useState, useEffect} from "react"
import Button from "./Button";
import stlyes from "./App.module.css";

function App() {
  const [conuter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  // console.log("all time");
  // const iRunOlnyOnce = ()=>{
  //   console.log("onln once") 
  // }

  useEffect(()=> {
    console.log("onln once");
  }, []) // 한번만 실행됨
  useEffect(()=> {
    if(keyword !="" && keyword.length > 5){
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword]); // keyword 가 변화할때 코드를 실행할 거라고 react.js에게 알려줘
  useEffect(()=> {
    console.log("I run when 'counter' change");
  }, [conuter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' change");
  }, [keyword, conuter])


  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..."/>
      <h2>{conuter}</h2>  
      <button onClick={onClick}>click me</button>
      
      {/*  <h1 className={stlyes.title}>Welcome back !!!</h1>*/}
      {/*<Button text={"continue"}/>*/}
      </div>
  );
}

export default App;


/* state 를 변화시킬때 component를 재실행 시키는것 !!!! */