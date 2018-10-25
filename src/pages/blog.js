import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components'
import {Container,Section} from '../components/styles/CommonStyles';
import PostListing from '../components/Posts/PostListing'


const BlogPage =({data})=> {

    console.log('data is',data)
  return (
    <div>
        <Layout isHome={false}>
       <Section>
           <Container>

<h1>Blogs</h1>
      <br/>
      {data.allMarkdownRemark.edges.map(({node})=><PostListing post={node} key={node.id}/>)}

           </Container>
           
           

       </Section>
            
        </Layout>
      
    </div>
  )
}


export default BlogPage

export const query = graphql`
    query{

        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD YYYY")
                  path
                }
                html
                excerpt
              }
            }
          }
    }


`