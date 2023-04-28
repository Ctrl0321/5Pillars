import logo from './logo.svg';
import './App.css';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
   
    <Router>
      <Switch>
        <Route path='/' component={Home} exact><Home/></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
