import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import styled from 'styled-components'
import '../components/login/Login.css'

const NavWrap = styled.div`
margin-left: 65%;
margin-bottom: 6%;
height: 3%;
padding-top: .7%;
letter-spacing: 0.075em;
right: 1.5em;
text-transform: uppercase;
top: 0.75em;
display:flex;
justify-content: space-evenly;
font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
`
const NavLink = styled.a`
text-decoration: none;

`
const Button = styled.button`
    border: 1px solid rgb(172, 189, 178);
    color: white;
    text-decoration: none;
    background: rgb(68, 104, 82);
    width: 15%;
    height: 2rem;
  

`
function Nav() {
    return(
        <div>
            <NavWrap className="form-wrap">
        <NavLink  id ="home" href="https://expactmarketing.netlify.app/#main">Home</NavLink>
        <Link  id ="login" exact to ='/login'>Login</Link>
        <Button href ='/signup'>signup</Button>
</NavWrap>

        </div>
    )
}

export default Nav;