import React from 'react'
import "./newClient.css"
import Navbar from '../components/Navbar/Navbar.js'
import NewClientForm from './NewClientForm'

const NewClient = () => {
    return (
        <body>
            <div className='navbar2'>
                <Navbar />
            </div>
            <div className='box'>
                <NewClientForm />
            </div>
        </body>
    )
}

export default NewClient