import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Setup from './pages/Setup';
import HelloWorld from './pages/HelloWorld';
import UsingVariables from './pages/UsingVariables';
import UserInput from './pages/UserInput';
import ForLoops from './pages/ForLoops';
import ForLoops2 from './pages/ForLoops2';
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
          <Route path="/for-loops_i"><ForLoops /></Route>
          <Route path="/for-loops_ii"><ForLoops2 /></Route>
          <Route path="/"><Index /></Route>
        </Switch>
      </ScrollIntoView>
    </Router>
  )
}

export default App
