import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Setup from './pages/Setup';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/setup"><Setup /></Route>
        <Route path="/"><Index /></Route>
      </Switch>
    </Router>
  )
}

export default App
