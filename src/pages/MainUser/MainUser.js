import React from 'react'
import "./MainUser.css"
import Navbar from '../components/Navbar/Navbar'
import BoxUser from './BoxUser'

const MainUser = () => {
    return (
        <body>
            <div className='navbar2'>
                <Navbar />
            </div>
            <div className='box'>
                <BoxUser />
            </div>
        </body>
    )
}

export default MainUser