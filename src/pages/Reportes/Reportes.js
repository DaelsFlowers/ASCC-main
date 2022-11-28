import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import "./reportes.css"
import ReporteContent from "./ReportesContent.js"
const Reporte = () => {
    return (
        <body>
            <div className='box'>
                <Navbar />
                <ReporteContent />
            </div>
        </body>
    )
}

export default Reporte