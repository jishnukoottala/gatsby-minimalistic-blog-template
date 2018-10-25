import styled from 'styled-components'



export const TempDiv = styled.div`

h1 {
    font-size:2.8rem;

    @media only screen and (max-width: 600px) {
        font-size:1.8rem;
    }
}

h2{
font-size:1.7rem;

@media only screen and (max-width: 600px) {
    font-size:1.25rem;
}
}


code {
    background: rgba(144, 144, 144, 0.075);
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: 0 0.25em;
    padding: 0.25em 0.65em;
}

`;



export const GoBackDiv = styled.div`

text-align:center;

a{
    text-decoration:none;
    box-shadow: 0px 3px 0px 0px rgba(187, 187, 187, 1);
    padding: 0.5em 0.5em;
    color: #0F2027;  /* fallback for old browsers */
color: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
color: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


:hover{
    color: #FF0099;  /* fallback for old browsers */
color: -webkit-linear-gradient(to right, #493240, #FF0099);  /* Chrome 10-25, Safari 5.1-6 */
color: linear-gradient(to right, #493240, #FF0099); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
}


`