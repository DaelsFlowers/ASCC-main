import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import "./empleados.css"
import EmpleadosContent from "./EmpleadosContent.js"
const Empleados = () => {
    return (
        <body>
            <div className='box'>
                <Navbar />
                <EmpleadosContent />
            </div>
        </body>
    )
}

export default Empleados