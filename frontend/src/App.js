// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
// import { ThemeProvider } from '@emotion/react';
// import { useStyles, theme } from './styles';

function App() {
  return (
    <Router>
    {/* <ThemeProvider theme={theme}> */}
      <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/signup" component={() => <SignUp />} />
            <Route exact path="/signin" component={() => <SignIn />} />
            <Route exact path="/users" component={() => <Users />} />
            <Route exact path="/" component={() => <Home />} />
            <Route component={NotFound}/>
          </Switch>
      </div>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
