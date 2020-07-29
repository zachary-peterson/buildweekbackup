import React, {useState,useEffect} from 'react';
import loginSchema from '../../validation/loginFormSchema';
import * as yup  from 'yup';
import './Login.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const LoginDiv = styled.form `

    display: flex;
    flex-direction: column;
    margin: 12.5% auto;
    height: 60%;
    width: 30%;
    justify-content: center;
    align-items: center;
    background: rgba(55, 90, 66, 0.616);
    padding-top: 4.5%;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;

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
        margin-bottom: 5%;
        text-decoration: none;
        background: rgb(68, 104, 82);
        font-size: 1.75rem;

        &:hover {
            background-color: #567d65;
        }
    }

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
    const history = useHistory();
    
    // State //
const [user, setUser] = useState([]);
const [formErrors, setErrors] = useState(initialErrors)
const [formValues, setFormValues] = useState(initialVal)
const [disabled, setDisabled] = useState(true)

const { push } = useHistory();

const onInputChange = e => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]: value
    })


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

    // const onSubmit = e => {
    //     e.preventDefault();
    //     const user = {
    //         username: formValues.username.trim(),
    //         password: formValues.password.trim(),
    //     };
    //     axiosWithAuth()
    //         .post("https://expat-journal-web31.herokuapp.com/api/auth/login", formValues)
    //         .then(res => {
    //             console.log(res)
    //             window.localStorage.setItem("token", res.data.payload);
    //             push("/dashboard")
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
        
    // }

    useEffect(() => {
        loginSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        });
    }, [formValues]);






    return (
            <LoginDiv>
                <div id="login-head">
                    <h1>Log In</h1>
                </div>
                <table id="login-body">

                    <tr>
                    <td><label htmlFor="user_name">Username: &nbsp; </label></td>
                    <td><input 
                            type="text"
                            name="username" 
                            onChange={onInputChange}
                        /></td>
                    </tr>
                    <div className="error">{formErrors.username}</div>         
                        
                    <tr>
                    <td><label htmlFor="password">Password: &nbsp;</label></td>
                    <td><input 
                        type="password"
                        onChange={onInputChange}
                        name="password"
                    /></td>
                    </tr>

                    <div className="error">{formErrors.password}</div>
                    

                </table>
                
                <button onClick=''>Submit</button>
            </LoginDiv>

    )
}

export default Login;