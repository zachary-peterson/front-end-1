import React, {useState} from 'react'
import * as yup  from 'yup';
import signUpSchema from '../validation/SignUpFormSchema'
import './signup.css'

const initialVal = {
    first_name: "",
    last_name: "",
    username:"",
    password:"",
    email:"",
    location:""
}
const initialErrors = {
    first_name: "",
    last_name: "",
    username:"",
    password:"",
    email:"",
    location:""
}
function SignUp() {
 const [newUSer,setUser] =useState([]);
 const [formValues, setForm]=useState(initialVal);
 const [formErrors, setErrors]=useState(initialErrors);

 const onInputChange = e => {
    const { name, value } = e.target;

    yup
        .reach(signUpSchema, name)
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
    setForm({
        ...formValues,
        [name]: value,
    });
};

    return (
        <div className="form-wrap">
            <h3>Sign Up</h3>
<label htmlFor="fname">First Name: &nbsp;</label>
<input 
name="fname"
type="text" 
onChange={onInputChange}/>
<span>{formErrors.fname}</span>
<label htmlFor="lname">Last  Name: &nbsp;</label>
<input 
name="lname"
type="text" />
<span>{formErrors.lname}</span>
<p>
<label htmlFor="fname">Email: &nbsp;</label>
<input 
name="email"
type="email" />
<span>{formErrors.email}</span>
<label htmlFor="fname">Location: &nbsp;</label>
<input 
name="Location"
type="text" />
<span>{formErrors.location}</span> 
</p>
<label htmlFor="username">Username: &nbsp;</label><input 
name="username"
type="text" />
<span>{formErrors.username}</span>
<label htmlFor="password">Password: &nbsp;</label>
<input 
name="password"
type="password" />
<span>{formErrors.password}</span>
<p> <button>Sign Up</button></p>

        </div>
    )
}

export default SignUp;