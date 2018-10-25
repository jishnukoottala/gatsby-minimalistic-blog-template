import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import wall from '../images/wall.jpg';
import Layout from '../components/layout'
import {Container} from '../components/styles/CommonStyles';


const Banner = styled.section`
padding: 16em 0 13em 0;
background-attachment: fixed;
background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${wall});
background-position: center top;
background-size: cover;
line-height: 1.75;
text-align: center;
h2 {
  color: #ffffff;
  display: inline-block;
  font-size: 3.5em;
  line-height: 1.35;
  margin-bottom: 0.5em;
}

p {
  color: #aaa;
  font-size: 1.5em;
  margin-bottom: 1.75em;
  
}
p:first-child{
  text-transform: uppercase;
}






@media screen and (max-width: 1280px){
  padding: 14em 0 11em 0;

}

@media screen and (max-width: 980px){
  padding: 9em 0 7em 0;

}


@media screen and (max-width: 736px){
  padding: 6em 2em 6em 2em;

}

@media only screen and (max-width: 600px){
  padding: 6em 2em 6em 2em;

}

`;



const ExploreBlogsButton = styled.ul`
cursor: default;
list-style: none;
padding-left: 0;

li{
  display: inline-block;
  padding: 0 1em 0 0;
  vertical-align: middle;

   a {
    font-size: 1.35em;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: #323037;
    border-radius: 4px;
    color: #ffffff !important;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    height: 3.15em;
    line-height: 3.25em;
    padding: 0 2.2em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    background: #4e54c8;
    background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
    background: linear-gradient(to right, #8f94fb, #4e54c8);
}
   }
}



`;

const IndexPage = () => (
  <Layout isHome={true}>

<Banner>
<h2>Gatsby Blog Template</h2>

<Container>
<p> " A feature rich deployment-ready minimalistic gatsby blog template for bloggers"<br /> 
  </p>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
</Container>
  
				<ExploreBlogsButton>
					<li><a href="/blog">Explore Blogs</a></li>
				</ExploreBlogsButton>
</Banner>
  </Layout>


)

export default IndexPage
