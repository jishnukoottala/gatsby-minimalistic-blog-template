import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/layout';
import {Container,Section} from '../components/styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {TempDiv,GoBackDiv} from './styles';
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
<hr/>
<GoBackDiv><Link to="/blog"><FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon> Go to Blogs</Link></GoBackDiv>


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