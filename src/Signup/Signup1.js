import React from 'react';
import Background from '../Background/Background';
import './Signup1.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Signup1 = () => {
    const navigate = useNavigate()
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
                    <form onSubmit={signup2}>
                        <input className='input-field input-field1' type='text' placeholder='Write First Name'></input><br></br>
                        <input className='input-field input-field2' type='text' placeholder='Write Last Name'></input><br></br>
                        <div className='flex flex-col justify-center '>
                            <div className='btn button'>
                                <input className='btn-global' type='submit' value='Next Step'></input><FiArrowRight className='arrow-logo'></FiArrowRight>

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