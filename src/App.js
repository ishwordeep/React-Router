import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  return (



    <Router>
      <div className="App">
        <button className="btn-primary" onClick={() => setLogin(!login)}>{login ? "Log Out" : "Login"}</button>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post/:id" component={Post} />

          {/* Profile component will be  rendered only when logged in otherwise redirected to home page*/}
          <Route exact path="/profile">
            {login ? <Profile /> : <Redirect to="/" />}
          </Route>

          <Route component={PageNotFound} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
