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
      <div className="link-container">
        1. <Link to="/setup">Setup your computer for python development</Link>
      </div>
      <div className="link-container">
        2. <Link to="/hello-world">Hello World!</Link>
      </div>
      <div className="link-container">
        3. <Link to="/using-variables">Using Variables</Link>
      </div>
      <div className="link-container">
        4. <Link to="/user-input">Taking inputs from the User</Link>
      </div>
      <div className="link-container">
        5. <Link to="/for-loops_i">For loops - I</Link>
      </div>
      <div className="link-container">
        6. <Link to="/for-loops_ii">For loops - II</Link>
      </div>
    </div>
  );
}

export default Index
