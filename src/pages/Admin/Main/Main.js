import React from 'react'
import "./Main.css"
import Navbar from '../components/Navbar/Navbar'
import BoxUser from './Box'

const Main = () => {
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

export default Main