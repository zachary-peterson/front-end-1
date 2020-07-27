import React, {useState} from 'react'
import * as yup  from 'yup';
import signUpSchema from '../validation/SignUpFormSchema'

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
        <div>
<label htmlFor="fname">First Name: &nbsp;</label>
<input 
name="fname"
type="text" 
onChange={onInputChange}/>
<div>{formErrors.fname}</div>
<label htmlFor="lname">Last  Name: &nbsp;</label>
<input 
name="lname"
type="text" />
<div>{formErrors.lname}</div>
<label htmlFor="fname">Email: &nbsp;</label>
<input 
name="email"
type="email" />
<div>{formErrors.email}</div>
<label htmlFor="fname">Location: &nbsp;</label>
<input 
name="Location"
type="text" />
<div>{formErrors.location}</div>
<label htmlFor="username">Username: &nbsp;</label><input 
name="username"
type="text" />
<div>{formErrors.username}</div>
<label htmlFor="password">Password: &nbsp;</label>
<input 
name="password"
type="password" />
<div>{formErrors.password}</div>
<button>Submit</button>
        </div>
    )
}

export default SignUp;