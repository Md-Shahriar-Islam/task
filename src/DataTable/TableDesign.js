import React from 'react';
import './Table.css'
import logo from '../Background/logo.svg'

const TableDesign = (props) => {
    let date
    let status1
    let status
    const { name } = props?.data
    if (name) {
        date = Object.keys(props?.data?.attendance)[9]
        status1 = props?.data?.attendance
        status = status1[date].status

    }



    // console.log(status)
    // const date = Object.keys(props.data.status)
    if (!name) return 'loading........'
    return (
        <div className='table-page'>
            <div className='body-background-color'>
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
        </div>
    );
};

export default TableDesign;