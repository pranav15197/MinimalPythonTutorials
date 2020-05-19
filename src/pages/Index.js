import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className="container">
      <h1>Hi There!</h1>
      <br/>
      <p>
        I have written some very basic python tutorials. These are aimed at absolute beginners.
      </p>
      <p>
        So if you have a few hours to kill, why not give these a shot!
      </p>
      <br/>
      <Link to="/setup">1. Setup your computer for python development</Link>
    </div>
  );
}

export default Index
