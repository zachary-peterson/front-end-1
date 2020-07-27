import React, {useState,useEffect} from 'react'
import loginSchema from '../../validation/loginFormSchema';
import * as yup  from 'yup';
import Nav from '../Nav';
import './Login.css';
import styled from 'styled-components'

const LoginDiv = styled.form `

    display: flex;
    flex-direction: column;
    margin: 0% 36% 20%;
    height: 60%;
    background: rgba(55, 90, 66, 0.616);
    padding-top: 4.5%;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;

`
const Input = styled.input`
padding: 1%;
margin: 1% auto;
border-radius: 10px;
border: none;
background-color: rgb(231, 226, 226);
`
const Button = styled.button`
border: 1px solid rgb(172, 189, 178);
color: white;
text-decoration: none;
background: rgb(68, 104, 82);
width: 15%;
height: 2rem;
`
const initialVal = {
    username: "",
    password:""
}

const initialErrors ={
    username: "",
    password:""
}

function Login() {
const [user, setUser] = useState([]);
const [formErrors, setErrors] = useState(initialErrors)
const[formValues, setFormValues] = useState(initialVal)
const [disabled, setDisabled] = useState(true)

const onInputChange = e => {
    const { name, value } = e.target;

    yup
        .reach(loginSchema, name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...formErrors,
                [name]: "",
            });
        })
        .catch(err => {
            setErrors({
                ...formErrors,
                [name]: err.errors[0],
            });
        });
    setFormValues({
        ...formValues,
        [name]: value,
    });
};
const onSubmit = e => {
    e.preventDefault();
    const user = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
    };
}
useEffect(() => {
    loginSchema.isValid(formValues).then(valid => {
        setDisabled(!valid);
    });
}, [formValues]);



    return (
        <div>
            <LoginDiv onSubmit={onSubmit}>
                <div id="login-head">
                    <h1>Log In</h1>
                </div>
                <div id="login-body">
       <label htmlFor="username">Username: &nbsp; </label>
       <input 
       type="text"
       name="username" 
       onChange={onInputChange}/>
      <div className="error">{formErrors.username}</div>         
        
 <label htmlFor="password">Password: &nbsp;</label>
         <input 
         type="password"
         onChange={onInputChange}
         name="password"
         />
         <div className="error">{formErrors.password}</div>
         <p><Button>Submit</Button></p>
         </div>
         </LoginDiv>
        </div>
    )
}

export default Login;