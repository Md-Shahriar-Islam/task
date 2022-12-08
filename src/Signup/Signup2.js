import React, { useState } from 'react';
import Background from '../Background/Background';
import './Signup1.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup2 = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const signup2 = (event) => {
        const { first_name, last_name } = location.state
        const phone_number = event.target.phone_number.value
        const country_code = event.target.country_code.value
        const email = event.target.email.value
        const data1 = { first_name, last_name, phone_number, email }

        navigate('/signup3', { state: data1 })
        event.preventDefault()
    }
    const signup1 = () => {
        navigate('/')
    }

    return (
        <div className='page-display'>
            <div>
                <Background></Background>

            </div>
            <div className='box shadow-2xl'>

                <div className='box-inside'>
                    <h1 className='text-center head-text'>SignUp Form</h1>
                    <form onSubmit={signup2}>
                        <div className='signup2field'>
                            <input autocomplete='off' className='field1' name='country_code' placeholder='+880'></input>
                            <input autocomplete='off' className='field2' name='phone_number' type='text' placeholder='1XXXXXXXXX'></input>
                        </div>
                        <input autocomplete='off' className='input-field input-field2' name='email' type='email' placeholder='Write Email Address'></input><br></br>
                        <div className='flex flex-col justify-center '>
                            <div className='flex items-center justify-evenly mx-10'>
                                <div>
                                    <button onClick={signup1} className='back'>Back</button>
                                </div>
                                <div className='flex justify-center '>
                                    <button className='  button drop-shadow-lg' type='submit' value='Next Step'>Next Step <FiArrowRight className='arrow-logo'></FiArrowRight></button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>




            </div>

        </div>
    );
};

export default Signup2;