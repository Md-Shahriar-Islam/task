import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';
import './Login.css'

const Login = () => {
    return (
        <div className='page-display'>
            <div>
                <Background></Background>

            </div>
            <div className='box shadow-2xl'>

                <div className='box-inside'>
                    <h1 className='text-center head-text'>Log in Form</h1>
                    <form>
                        <input className='input-field input-field1' type='text' placeholder='Write First Name'></input><br></br>
                        <input className='input-field input-field2-login' type='text' placeholder='Write Last Name'></input><br></br>
                        <p className='hints'>your password must be 8 character</p>
                        <div className='flex flex-col justify-center '>
                            <div className='btn button'>
                                <input className='btn-global' type='submit' value='Log In'></input>
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