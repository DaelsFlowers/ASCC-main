import React from 'react'
import "./newProspecto.css"
import Navbar from '../components/Navbar/Navbar'
import NewProspectoForm from './NewProspectoForm'

const NewProspecto = () => {
    return (
        <body>
            <div className='navbar2'>
                <Navbar />
            </div>
            <div className='box'>
                <NewProspectoForm />
            </div>
        </body>
    )
}

export default NewProspecto