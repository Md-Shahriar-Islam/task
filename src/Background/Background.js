import React from 'react';
import './Background.css'
import background from './background.svg'
import logo from './logo.svg'

const Background = () => {
    return (
        <div className='total'>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='background'>
                <img src={background} alt='background'></img>
            </div>



        </div>
    );
};

export default Background;