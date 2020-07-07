import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Background } from './App.styles';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Chat } from './pages/Chat/Chat';

function App() {
  const { pathname } = useLocation();
  return (
    <Background hasPadding={!pathname.includes('chat')}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home/:userId">
          <Main />
        </Route>
        <Route path="/chat/:type">
          <Chat />
        </Route>
      </Switch>
    </Background>
  );
}

export default App;
