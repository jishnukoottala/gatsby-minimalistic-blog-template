import React from 'react'
import styled from 'styled-components'


// Containers


export const Container = styled.div`

    margin-left:auto;
    margin-right:auto;
    width: 80em;
    
    @media (max-width: 1680px) {
    
        width: 80em;
    }
    
    @media screen and (max-width: 1280px) {
    
        width: 70em;
    }
    
    @media screen and (max-width: 980px) {
        width: 90%;
    }
    
    @media screen and (max-width: 736px) {
    
        width: 90% !important;
    }
    
    @media screen and (max-width: 480px) {
        width: 90% !important;
    }




`;




export const Section = styled.section`

    padding:6em 0 4em 0;

    @media screen and (max-width: 736px){
        padding:3em 0 1em 0;

    }
    @media screen and (max-width: 480px){
        padding:3em 0 1em 0;

    }

   

`;