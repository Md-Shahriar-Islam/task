import React from 'react';
import Background from '../Background/Background';
import './Signup1.css'

const Signup1 = () => {
    return (
        <div className='page-display'>
            <div>
                <Background></Background>
            </div>
            <div className='box shadow-2xl'>

                <div className='box-inside'>
                    <h1 className='text-center head-text'>SignUp Form</h1>
                    <form>
                        <input className='input-field input-field1' type='text' placeholder='Write First Name'></input><br></br>
                        <input className='input-field input-field2' type='text' placeholder='Write Last Name'></input><br></br>
                        <input className='btn btn-info button' type='submit' value='Next Step'></input>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Signup1;