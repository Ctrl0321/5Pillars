import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/register" component={Register} exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
