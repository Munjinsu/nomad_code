import {useState, useEffect} from "react"

function Hello() {
  /* 축약형 */
  // useEffect(() => {
  //   console.log("created");  // component가 실행 될때만 실행 !!!
  //   return ()=> console.log("destroyed"); // component가 파괴 될대만 실행 !!!
  // }, []);


  /* 풀이형 */
  function destroyedFn(){
    console.log("destroyed");
  };
  function effectFn(){
    console.log("created");
    return destroyedFn;
  };
  useEffect(effectFn,[])

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev) 
  
  return (
    <div>
      {showing ? <Hello/> : null }
      <button 
        onClick={onClick}
      >
        {showing ? "Hide": "Show"}
      </button>
    </div>
  );
}

export default App;
