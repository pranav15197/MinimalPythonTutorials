import React from 'react'
import { Link } from 'react-router-dom'
import BLOGS from '../Blogs'


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
      {
        BLOGS.map((B, i) => (
          <div className="link-container" key={i}>
            {i+1}. <Link to={B.path}>{B.title}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Index
