import React, {useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import registerFormSchema from '../../validation/registerFormSchema'

const initialVal = {
    first_name: '',
    last_name: '',
    username:'',
    password:'',
    email:'',
    location:''
};

const initialErrors = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    location: ''
};

const StyledContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
    border: 2px solid black;
    padding: 2.5% 5%;

    h2  {
        font-size: 2.5rem; 
        margin-bottom: 2%;
    }

    table  {
        text-align: left;
        width: 80%;
        margin: 0 auto;


        label {
            font-size: 1.5rem;
        }

        input {
            width: 100%;
            font-family: "Times New Roman", Times, serif;
        }
    }

    p {
        font-size: 1.5rem;
        color: red;
    }

    button {
        border: 1px solid rgb(172, 189, 178);
        color: white;
        margin-top: 2%;
        text-decoration: none;
        background: rgb(68, 104, 82);
        width: 15%;
        font-size: 1.75rem;

        &:hover {
            background-color: #567d65;
        }
    }
`

export default function Register(){

    const [newUser, setUser] =useState([]);
    const [formValues, setForm]=useState(initialVal);
    const [formErrors, setErrors]=useState(initialErrors);

    const onInputChange = e => {
        const { name, value } = e.target;
    
        yup
            .reach(registerFormSchema, name)
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
        <StyledContainer>  

            <h2>Sign Up</h2>
        
        <table>
            
        <tr>
            <td><label htmlFor='fname'>First Name:</label></td>
            <td><input
                name='fname'
                onChange={onInputChange}
                type='text'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='lname'>Last Name:</label></td>
            <td><input
                name='lname'
                onChange={onInputChange}
                type='text'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='username'>Username:</label></td>
            <td><input
                name='username'
                onChange={onInputChange}
                type='text'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='password'>Password:</label></td>
            <td><input
                name='password'
                onChange={onInputChange}
                type='password'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='email'>Email:</label></td>
            <td><input
                name='email'
                onChange={onInputChange}
                type='email'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='location'>Location:</label></td>
            <td>
                <select>
                    <option>Please select a location</option>
                    <option name='location'>Africa</option>
                    <option name='location'>Antarctica</option>
                    <option name='location'>Asia</option>
                    <option name='location'>Europe</option>
                    <option name='location'>North America</option>
                    <option name='location'>Oceania</option>
                    <option name='location'>South America</option>
                </select>
            </td>
        </tr>

        </table> 
        
        <div>
            <p>{formErrors.fname}</p>
            <p>{formErrors.lname}</p>
            <p>{formErrors.username}</p>
            <p>{formErrors.password}</p>
            <p>{formErrors.email}</p>
            <p>{formErrors.location}</p>
        </div>
        
        <button>Submit</button>
        
        </StyledContainer>
    )
}