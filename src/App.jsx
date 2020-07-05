import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Background } from './App.styles';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';

function App() {
  return (
    <Background>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">signup</Route>
          <Route path="/home/:userId">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Background>
  );
}

export default App;
