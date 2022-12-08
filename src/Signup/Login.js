import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../Background/Background';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState({})
    const login = (event) => {
        const email = event.target.email.value
        const password = event.target.password.value
        const pass_len = password.length

        if (pass_len >= 8) {
            const data = { email, password }
            console.log(data)

            fetch('https://test.nexisltd.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('token', data.access_token);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            const token = sessionStorage.getItem('token');
            navigate('/table')




        }
        else {
            alert('please enter 8 digit password')
        }
        event.preventDefault()


    }
    return (
        <div className='page-display'>
            <div>
                <Background></Background>

            </div>
            <div className='box shadow-2xl'>

                <div className='box-inside'>
                    <h1 className='text-center head-text'>Log in Form</h1>
                    <form onSubmit={login}>
                        <input autocomplete='off' className='input-field input-field1' name='email' type='text' placeholder='Write Email Address'></input><br></br>
                        <input className='input-field input-field2-login' name='password' type='password' placeholder='Write Password'></input><br></br>
                        <p className='hints'>your password must be 8 character</p>
                        <div className='flex flex-col justify-center '>
                            <div className='flex justify-center '>
                                <button className='  button drop-shadow-lg' type='submit' value='Next Step'>Log In</button>

                            </div>
                            <div className="end-section">
                                <p className="ending">Don't Have an Account? <Link className='login' to='/'>SIGNUP HERE</Link></p>
                            </div>
                        </div>
                    </form>
                </div>




            </div>

        </div>
    );
};

export default Login;