import React,{ Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
//import wall from '../../images/wall.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.header`
background-color: transparent;
border-bottom: ${props=> props.isHome?'0':'solid 1px rgba(144, 144, 144, 0.25)'};
box-shadow: ${props=> props.isHome?'none':'0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.05)'};;
height:${props=> props.isHome?'3.25em':'4.5em'} ;
line-height:${props=> props.isHome?'1.25em':'0.75em'};
position: absolute;
color: #484848;
cursor: default;
font-size: 1.25em;

left: 0;

text-transform: uppercase;
top: 0;
width: 100%;
z-index: 10000;




h1 {
  color:  ${props=> props.isHome?'#ffffff':'#484848'};
  left: ${props=> props.isHome?'2.5em':'1.25em'};
  top: 1em;
  font-weight: 400;
  height: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  position: absolute; 

  a {
    color:${props=> props.isHome?'#ffffff':'#484848 !important'};
    text-decoration:none;
  }
}


@media screen and (max-width: 980px){
  display: none;

}

`;


const Navs = styled.nav`
right:2em;
top:2em;
height:inherit;
line-height:inherit;
position:absolute;
vertical-align:middle;

ul{
  list-style:none;
  margin:0;
  padding-left:0 ;

  li{
    display:inline-block;
    border-radius:4px;
    pading-left:0;
    margin-left: 2.5em;
    pading-right:8px;

    a{
      text-decoration:none;
      color: ${props=> props.isHome?'#ffffff':'#484848'};
    }
  }
}

`;

const NavPanelToggle= styled.div`

    text-decoration: none;
		text-decoration: none;
		
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
    display: none;
    
    &:before{
      -moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
    }

    @media screen and (max-width: 980px) {

			
				display: block;
			

    }
    
    &*:before {
			background: rgba(144, 144, 144, 0.65);
			border-radius: 4px;
			color: #fff;
			display: block;
			font-size: 16px;
			height: 2.25em;
			left: 0.5em;
			line-height: 2.25em;
			position: absolute;
			text-align: center;
			top: 0.5em;
			width: 3.5em;
		}
`;


const NavPanelSpanElement= styled.span`
background: rgba(144, 144, 144, 0.65);
			border-radius: 4px;
			color: #fff;
			display: block;
			font-size: 16px;
			height: 2.25em;
			left: 0.5em;
			line-height: 2.25em;
			position: absolute;
			text-align: center;
			top: 0.5em;
      width: 3.5em;
      
      &:hover{
        cursor:pointer;
      }

`;


const NavPanel = styled.div`

-moz-transform: translateX(0em);
-webkit-transform: translateX(0em);
-ms-transform: translateX(0em);
transform: ${props=> props.isDisplay?'translateX(0)':'translateX(-20em)'};
-moz-transition: -moz-transform 0.5s ease, visibility 0.5s;
-webkit-transition: -webkit-transform 0.5s ease, visibility 0.5s;
-ms-transition: -ms-transform 0.5s ease, visibility 0.5s;
transition: ${props=> props.isDisplay?'transform 0.5s ease, visibility 0.5s':'transform 0.5s ease, visibility 0.5s'} ;
-webkit-overflow-scrolling: touch;
overflow-y: auto;
position: fixed;
left: 0;
top: 0;
display: ${props=> props.isDisplay?'block':'none'};
background: #222;
color: #fff;
height: 100%;
max-width: 80%;
width: 20em;
padding: 0.5em 1.25em;
text-transform: uppercase;
box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);


ul{
  list-style: none;
			margin: 0;
      padding: 0;
      
      li{
        padding: 0;

        a{
          color: #fff;
          display: block;
          padding: 0.75em 0;
          text-decoration: none;
          border-top: solid 1px #555;
        }
        a:hover{
          text-decoration:none;
        }
      }
      li:first-child a{
      border-top:0
      }

      
}



`;


const NavPanelClose = styled.span`
      text-decoration: none;
			-moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			-webkit-tap-highlight-color: transparent;
			border: 0;
			color: #484848;
			cursor: pointer;
			display: block;
			height: 4em;
			padding-right: 1.25em;
			position: absolute;
			right: 0;
			text-align: right;
			top: 0;
			vertical-align: middle;
			width: 5em;


`;

 class Header extends Component {


  state={
      isSidebarOpen : false
  }


  changeSidebarStatus=()=>{
    console.log('change sidebar status is called ');

    this.setState((prevState)=>({ 
      isSidebarOpen: !prevState.isSidebarOpen
    }));

    console.log('new state is ',this.state);

  }

  render() {
console.log('isHome',this.props);
    const {siteTitle}= this.props;
    return (
      <div>
        <Wrapper isHome={this.props.isHome}>

<h1><Link to="/">CodeWorld</Link></h1>
<Navs isHome={this.props.isHome}>

  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/about">About</Link></li>
    
  </ul>
</Navs>

</Wrapper>
<NavPanelToggle>
<NavPanelSpanElement onClick={this.changeSidebarStatus}><FontAwesomeIcon icon={faBars}/></NavPanelSpanElement>

</NavPanelToggle>


<NavPanel  isDisplay={this.state.isSidebarOpen}> 
<NavPanelClose onClick={this.changeSidebarStatus}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></NavPanelClose>

<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/about">About</Link></li>
    
  </ul></NavPanel>
        
      </div>
    )
  }
}



export default Header
