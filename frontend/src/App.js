// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            
          <Route exact path="/users" component={() => <Users />} />
          <Route exact path="/" component={() => <Home />} />
          <Route component={NotFound}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
