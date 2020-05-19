import React from 'react'
import { Link } from 'react-router-dom'

function HelloWorld() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Hello World!</h1>
      <br/>
      <p>
        It's a tradition to start every coding tutorial with a Hello World program.
      </p>
      <footer></footer>
    </div>
  );
}

export default HelloWorld
