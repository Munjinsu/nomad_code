import Button from "./Button";
import stlyes from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={stlyes.title}>Welcome back !!!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
