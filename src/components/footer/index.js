import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {Container} from '../styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,fabFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter ,faGooglePlus, faMedium,faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.div`
        padding: 8em 0 6em 0;
        background: #f6f6f6;
		color: #aaa;
        text-align: center;
        
        a{
            -moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			color: #aaa;
			text-decoration: none;  
        }


        a:active, #footer a:hover {
            color: #666;
        }


        @media screen and (max-width: 980px) {

            padding: 6em 0 4em 0;
        }

        @media screen and (max-width: 736px) {

            padding: 3em 0 2em 0;
        }
        @media screen and (max-width: 480px) {
            padding: 3em 0 1em 0;
        }
`;

const FooterUlIcons = styled.ul`
    cursor:default;
    list-style: none;
    padding-left: 0;
    font-size: 1.5em;
    
    li{
        display: inline-block;
        padding-right: 2.5em;
                font-size: 1.5em;

                a{

                    cursor:pointer;
                }
    }

    li:last-child {
        padding-right: 0;
    }

    @media screen and (max-width: 736px) {

        font-size: 1em;
    }

`;


const FooterUlCopyright = styled.ul`
            margin: 2em 0;
			padding: 0;
            text-align: center;
            
            li{
                border-left: solid 1px rgba(144, 144, 144, 0.25);
				display: inline-block;
				list-style: none;
				margin-left: 1.5em;
                padding-left: 1.5em;
                
               
            }

            li:first-child {
                border-left: 0;
                margin-left: 0;
                padding-left: 0;
            }

            @media screen and (max-width: 480px) {
                border-left: 0;
                display: block;
                margin: 0;
                padding: 0; 
            }

`;




const Footer = ()=> {
  return (
    <div>
      <FooterWrapper>
          <Container>
                    <FooterUlIcons>
						<li><a href="https://github.com/jishnukoottala/gatsby-minimalistic-blog-template" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
						<li><a href="https://medium.com/@jishnu61" ><FontAwesomeIcon icon={faMedium}></FontAwesomeIcon></a></li>
						<li><a href="https://twitter.com/@jishnukoottala"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
					</FooterUlIcons>
					<FooterUlCopyright>
						<li>&copy;KootsCode</li>
						<li>Design: <Link to="">KootsCode</Link></li>
						<li>Images: <Link to="http://unsplash.com">Unsplash</Link></li>
					</FooterUlCopyright>
          
          </Container>
      </FooterWrapper>
    </div>
  )
}

export default Footer;
