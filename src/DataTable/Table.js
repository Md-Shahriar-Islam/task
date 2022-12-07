import React, { useEffect, useState } from 'react';
import TableDesign from './TableDesign';
import logo from '../Background/logo.svg'

const Table = () => {
    const [data, setData] = useState({})
    const modifiedData = []
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        }
        )
            .then(res => res.json())
            .then(data => setData(data))

    }, [token])
    for (const i in data) {
        modifiedData.push(data[i])

    }
    // console.log(modifiedData)




    return (
        <div >
            <div className='logo'>
                <img src={logo} alt='logo'></img>


            </div>
            <div className='table-background'>
                <h1 className='table-title'>Attendance Information</h1>
            </div>
            <div className='table'>
                <div>
                    <h1 className='font-bold'>Date</h1>

                </div>
                <div>
                    <h1 className='font-bold'>employee name</h1>

                </div>
                <div>
                    <h1 className='font-bold'>status</h1>

                </div>

            </div>
            {
                modifiedData.map(b => <TableDesign key={b.id} data={b}></TableDesign>)
            }

        </div>
    );
};

export default Table;