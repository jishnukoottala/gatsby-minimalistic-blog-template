import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components'
import {Container,Section} from '../components/styles/CommonStyles';



export default function about() {
  return (
    <div>
        <Layout isHome={false}>
       <Section>
           <Container>

        <h1>About this project</h1>
       
       <p>This project is aimed at creating a very simple Gatsby v2.0 blog template with a minimalistic design approach, feature rich and responsive design. It uses typefaces fonts to load fonts much more quickly than embedding a google font URL. This project also uses styled component which is also a fantastic tool to implement component wise css without the hassle of CSS in JS, Yes, you heard it right it is a kind of CSS in JS but with a different approach, with this you can directly write the CSS code in your component unlike the regular CSS in JS in which you have to convert each property to cameCased ones</p>
								
		<p>This project is hosted in github and the site is hosted in Netlify, you can read How it is hosted for free in the blogs</p>						

           </Container>
           
           

       </Section>
            
        </Layout>
      
    </div>
  )
}
