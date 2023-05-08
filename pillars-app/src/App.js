import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Term from "./Components/Terms";
import AboutUs from "./Components/AboutUs";

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
          <Route path="/aboutUs" component={AboutUs} exact>
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
