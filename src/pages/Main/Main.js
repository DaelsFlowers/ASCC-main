import React from 'react'
import "./Main.css"
import Navbar from '../components/Navbar/Navbar'
import Box from './Box'

const Main = () => {
    return (
        <body>
            <div className='navbar2'>
                <Navbar />
            </div>
            <div className='box'>
                <Box />
            </div>
        </body>
    )
}

export default Main