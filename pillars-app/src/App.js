import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Term from "./Components/Terms";

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
          <Route path="/condition" component={Term} exact>
            <Term />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
