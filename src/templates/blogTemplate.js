import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/layout';
import {Container,Section} from '../components/styles/CommonStyles';

import {TempDiv} from './styles';
import './styles.css';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>

         <Section>
           <Container>

                <TempDiv>
                    <br/>
                     <h1>{frontmatter.title}</h1>
                        <br/>
                    
                    <br/>
                    <article> <h2>{frontmatter.date}</h2>
            <div
             className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
                /></article>
       
      </TempDiv>


           </Container>
           </Section>
      
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`