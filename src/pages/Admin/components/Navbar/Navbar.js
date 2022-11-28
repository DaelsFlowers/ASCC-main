import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

import { signOut } from 'firebase/auth';
import { auth } from "../../../services/firebase"

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
                <NavLink to="/Seguimiento" className={({ isActive }) => (isActive ? "active" : "desactive")}>
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
