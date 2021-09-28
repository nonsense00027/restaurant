import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
