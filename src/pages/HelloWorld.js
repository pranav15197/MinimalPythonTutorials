import React from 'react'
import { Link } from 'react-router-dom'

function HelloWorld() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Hello World!</h1>
      <br/>
      <footer></footer>
    </div>
  );
}

export default HelloWorld
