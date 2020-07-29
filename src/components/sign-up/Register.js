import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import registerFormSchema from '../../validation/registerFormSchema'

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'
import { fetchData } from '../../action/action'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const initialVal = {
    name: '',
    username:'',
}

const initialErrors = {

    name: '',
    username: '',

};

const StyledContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: rgba(55, 90, 66, 0.616);
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
        width: 25%;
        font-size: 1.75rem;

        &:hover {
            background-color: #567d65;
        }
    }
`

function Register(props){

    const { push } = useHistory();

    const [user, setUser] =useState([]);
    const [formValues, setForm]=useState(initialVal);
    const [formErrors, setErrors]=useState(initialErrors);

    

    const onInputChange = e => {
       const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    
        yup
            .reach(registerFormSchema, name)
            .validate(value)
            .then(() => {
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


    const newUserSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post(`https://expat-journal-web31.herokuapp.com/api/auth/register`, formValues)
        .then(res => {
            setUser(res.data)
            console.log(res.data)
            push('/')
        })
        .catch(err =>{
            console.log(err)
        })

    }


    return (
        <StyledContainer>  

            <h2>Sign Up</h2>
        
        <table>
       
            <tr>
            <td><label htmlFor='name'>Name</label></td>
            <td><input
                name='name'

                onChange={onInputChange}
                type='text'
                placeholder='Please enter your first name'
            /></td>
        </tr> 

        <tr>
            <td><label htmlFor='user_name'>Username:</label></td>
            <td><input
                name='username'
                onChange={onInputChange}
                type='text'
                placeholder='Please enter a username'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='password'>Password:</label></td>
            <td><input
                name='password'
                // value={newUser.password}
                onChange={onInputChange}
                type='password'
                placeholder='Please enter a password'
            /></td>
        </tr>

        {/* <tr>
            <td><label htmlFor='email'>Email:</label></td>
            <td><input
                name='email'
                // value={newUser.email}
                onChange={onInputChange}
                type='email'
                placeholder='Please enter an email'
            /></td>
        </tr> */}

        {/* <tr>
            <td><label htmlFor='location'>Location:</label></td>
            <td>
                <select>
                    <option>Please select a location</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </td>
        </tr> */}

        </table> 
        
        <div>

            <p>{formErrors.name}</p>
            <p>{formErrors.username}</p>
            <p>{formErrors.password}</p>
            {/* <p>{formErrors.email}</p>
            <p>{formErrors.location}</p>   */}
        </div>
        

        <button onClick={newUserSubmit} >Submit</button>

        </StyledContainer>
    )
}

export default Register;