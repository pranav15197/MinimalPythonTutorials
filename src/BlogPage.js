import React from 'react'
import { Link } from 'react-router-dom'

function BlogPage(props) {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>{props.component.title}</h1>
      <br/>
      <props.component />
      <footer>
        { props.next ? 
          <>Next tutorial -
          <Link to={props.next.path}>{props.next.title}</Link></> : ""}
      </footer>
    </div>
  );
}

export default BlogPage
