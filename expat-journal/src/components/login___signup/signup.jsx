import React, {useState} from 'react'
import * as yup  from 'yup';
import loginSchema from '../validation/loginFormSchema'

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
type="text" />
<label htmlFor="lname">Last  Name: &nbsp;</label>
<input 
name="lname"
type="text" />
<label htmlFor="fname">Email: &nbsp;</label>
<input 
name="email"
type="email" />
<label htmlFor="fname">Location: &nbsp;</label>
<input 
name="Location"
type="text" />
<label htmlFor="username">Username: &nbsp;</label><input 
name="username"
type="text" />
<label htmlFor="password">Password: &nbsp;</label>
<input 
name="password"
type="password" />

        </div>
    )
}

export default SignUp;