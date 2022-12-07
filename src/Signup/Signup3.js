import React from 'react';
import Background from '../Background/Background';
import './Signup1.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup3 = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const signup = (event) => {
        const { first_name, last_name, phone_number, email } = location.state
        const password = event.target.password.value
        const pass_len = password.length
        if (pass_len >= 8) {
            console.log(password)
            const data = { first_name, last_name, phone_number, email, password }
            fetch('https://test.nexisltd.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            navigate('/login')
        }
        else {
            alert('please enter a 8 digit password')
        }


        event.preventDefault()


    }
    const signup2 = () => {
        navigate('/signup2')
    }

    return (
        <div className='page-display'>
            <div>
                <Background></Background>

            </div>
            <div className='box shadow-2xl'>

                <div className='box-inside'>
                    <h1 className='text-center head-text'>SignUp Form</h1>
                    <form onSubmit={signup}>
                        <input className='input-field' type='text' name='password' placeholder='Write Password'></input><br></br>
                        <p className='hints final-signup'>your password must be 8 character</p>
                        <div className='flex flex-col justify-center '>
                            <div className='flex items-center justify-evenly mx-10'>
                                <div>
                                    <button onClick={signup2} className='back'>Back</button>
                                </div>
                                <div className='flex justify-center '>
                                    <button className='  button drop-shadow-lg' type='submit'>Sign Up</button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>




            </div>

        </div>
    );
};

export default Signup3;