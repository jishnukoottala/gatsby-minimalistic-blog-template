import React from "react";
import Link from "gatsby-link";

const PostListing = ({ post }) => (
    
  <article>
    <h3><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    {/* <div
      dangerouslySetInnerHTML={{
        __html: post.html
      }}
    /> */}
    <hr/>
  </article>
  
);

export default PostListing;
