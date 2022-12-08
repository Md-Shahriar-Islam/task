import React from 'react';
import Background from '../Background/Background';
import './Signup1.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Signup1 = () => {
    const navigate = useNavigate()
    const signup2 = (event) => {
        const first_name = event.target.first_name.value
        const last_name = event.target.last_name.value

        const name = { first_name, last_name }
        navigate('/signup2', { state: name })
        event.preventDefault()
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
                        <input className='input-field input-field1' name='first_name' type='text' placeholder='Write First Name' autocomplete='off'></input><br></br>
                        <input className='input-field input-field2' name='last_name' type='text' placeholder='Write Last Name' autocomplete='off'></input><br></br>
                        <div className='flex flex-col justify-center '>
                            <div className='flex justify-center'>
                                <button className='  button drop-shadow-lg' type='submit' value='Next Step'>Next Step <FiArrowRight className='arrow-logo'></FiArrowRight></button>

                            </div>
                            <div className="end-section">
                                <p className="ending">Already Have an Account? <Link className='login' to='/login'>LOGIN HERE</Link></p>
                            </div>
                        </div>
                    </form>
                </div>




            </div>

        </div>
    );
};

export default Signup1;