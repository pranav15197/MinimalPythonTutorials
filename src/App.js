import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import BlogPage from './BlogPage'
import BLOGS from './Blogs'
import Index from './pages/Index'
import ScrollIntoView from './ScrollIntoView'


function App() {
  return (
    <Router>
      <ScrollIntoView>
        <Switch>
          {
            BLOGS.map((B, i) => {
              var next = i + 1 < BLOGS.length ? BLOGS[i+1] : null  
              return <Route key={B.path} path={"/" + B.path}>
                <BlogPage next={next} component={B}/>
              </Route>
            })
          }
          <Route path="/"><Index /></Route>
        </Switch>
      </ScrollIntoView>
    </Router>
  )
}

export default App
