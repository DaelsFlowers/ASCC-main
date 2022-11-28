import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import "./seguimiento.css"
import SeguimientoContent from './SeguimientoContent.js'
const Seguimiento = () => {
    return (
        <body>
            <div className='box'>
                <Navbar />
                <SeguimientoContent />
            </div>
        </body>
    )
}

export default Seguimiento