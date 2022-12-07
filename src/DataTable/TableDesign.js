import React from 'react';
import './Table.css'
import logo from '../Background/logo.svg'

const TableDesign = (props) => {
    const { name } = props.data
    const date = Object.keys(props.data.attendance)[9]
    const status1 = props.data.attendance
    const { status } = status1[date]
    console.log(status)
    // const date = Object.keys(props.data.status)
    return (
        <div>
            <div className='table'>
                <div>
                    <p>{date}</p>

                </div>
                <div>
                    <p>{name}</p>

                </div>
                <div>
                    <p>{status}</p>

                </div>

            </div>

        </div>
    );
};

export default TableDesign;