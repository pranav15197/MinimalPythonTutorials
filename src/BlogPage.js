import React from 'react'
import { Link } from 'react-router-dom'
import Disqus from "disqus-react"


function BlogPage(props) {
  const disqusShortname = "python-pranavtiwari-com" //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "http://localhost:3000/" + props.component.path,
    identifier: props.component.path, //this.props.uniqueId
    title: props.component.title //this.props.title
  }
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
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}

export default BlogPage
