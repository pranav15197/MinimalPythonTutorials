import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Setup from './pages/Setup';
import HelloWorld from './pages/HelloWorld';
import UsingVariables from './pages/UsingVariables';
import UserInput from './pages/UserInput';
import Index from './pages/Index';
import ScrollIntoView from './ScrollIntoView';

function App() {
  return (
    <Router>
      <ScrollIntoView>
        <Switch>
          <Route path="/setup"><Setup /></Route>
          <Route path="/hello-world"><HelloWorld /></Route>
          <Route path="/using-variables"><UsingVariables /></Route>
          <Route path="/user-input"><UserInput /></Route>
          <Route path="/"><Index /></Route>
        </Switch>
      </ScrollIntoView>
    </Router>
  )
}

export default App
