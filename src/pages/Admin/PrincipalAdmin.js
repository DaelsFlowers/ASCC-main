import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'


import Main from '../Main/Main';
import Seguimiento from './Seguimiento/Seguimiento';
import Reporte from './Reportes/Reportes';
import Empleados from './Empleados/Empleados';
import Editregisters from "./Seguimiento/Editregisters";


const PrincipalAdmin = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Main />} prop={props} />
                    <Route path="/Main" element={<Main />} prop={props} />
                    <Route path="/Seguimiento" element={<Seguimiento prop={props} />} />
                    <Route path="/Reporte" element={<Reporte prop={props} />} />
                    <Route path="/Empleados" element={<Empleados prop={props} />} />
                    <Route path="/EditarRegistro" element={<Editregisters prop={props} />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default PrincipalAdmin