import React, {useState} from 'react'
import axios from 'axios'
import loginSchema from '../validation/loginFormSchema'
import * as yup  from 'yup';
import Nav from '../navBar'
import './Login.css'


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



    return (
        <div>
            <div className="login-wrap">
                <div id="login-head">
                    <h2>Log In</h2>
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
         <p><button>Submit</button></p>
         </div>
         </div>
        </div>
    )
}

export default Login;