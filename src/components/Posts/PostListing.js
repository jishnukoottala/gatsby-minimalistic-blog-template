import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components'



const PostArticle = styled.article`



border-bottom: 4px solid rgba(209, 209, 229, 1);

margin-top:0.75rem;
h3{
    a{

        text-decoration:none;
        color: black;
    }
}



`;




const PostListing = ({ post }) => (
    
  <PostArticle>
    <h3><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    {/* <div
      dangerouslySetInnerHTML={{
        __html: post.html
      }}
    /> */}
    
  </PostArticle>
  
);

export default PostListing;
