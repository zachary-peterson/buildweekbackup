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
    email: '',
    location: ''
}

const initUsers= [
    {
        name: 'Zach',
        username: 'zpeterson',
        email: 'z.peterson7@yahoo.com',
        location: 'NY'
    },
]

const initialErrors = {

    name: '',
    username: '',
    email: '',
    location: ''
};

const StyledContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 12.5% auto;
    background: rgba(55, 90, 66, 0.616);
    width: 60%;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
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

    const [user, setUser] =useState(initUsers);
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

        <tr>
            <td><label htmlFor='email'>Email:</label></td>
            <td><input
                name='email'
                // value={newUser.email}
                onChange={onInputChange}
                type='email'
                placeholder='Please enter an email'
            /></td>
        </tr>

        <tr>
            <td><label htmlFor='location'>Location:</label></td>
            <td><input
                name='location'
                onChange={onInputChange}
                type='text'
                placeholder='Please enter a location'
            /></td>
        </tr>

        

        </table> 
        
        <div>

            <p>{formErrors.name}</p>
            <p>{formErrors.username}</p>
            <p>{formErrors.password}</p>
            <p>{formErrors.email}</p>
            {/* <p>{formErrors.location}</p>   */}
        </div>
        

        <button onClick=''>Submit</button>

        </StyledContainer>
    )
}

export default Register;