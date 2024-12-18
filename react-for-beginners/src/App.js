import { 
    BrowserRouter as Router,
    Route, 
    Switch 
  } from "react-router-dom";
  import Home from "./routes/Home";
  import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">  {/* :id 는 변수 값, 아무거나 변경 가능 */}
          <Detail/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
