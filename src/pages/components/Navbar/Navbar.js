import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.css"

import { signOut } from 'firebase/auth';
import { auth } from "../firebase"

export default function Home({
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                setAuthState('login');
            })
            .catch((err) => console.log(err));
    }

    return (


        <div className='navbar'>
            <NavLink to="/Main">
                <h1>ASCC</h1>
            </NavLink>
            <ol className='navbarlist'>
                <NavLink className={({ isActive }) => (isActive ? "active" : "desactive")}
                    to="/NewClient">
                    <li>
                        Nuevo Cliente
                    </li>
                </NavLink>
                <NavLink to="/NewProspecto">
                    <li>
                        Nuevo Prospecto
                    </li>
                </NavLink>
                <NavLink to="/Seguimiento">
                    <li>
                        Segumiento
                    </li>
                </NavLink>
                <NavLink to="/Reporte">
                    <li>
                        Reportes
                    </li>
                </NavLink>
                <NavLink to="/Empleados">
                    <li>
                        Empleados
                    </li>
                </NavLink>
            </ol>
            <div className='salir' onClick={signOutHandler}>
                <h2>
                    Salir
                </h2>
            </div>
        </div>

    )
}
