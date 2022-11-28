import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'


import Main from './Main/Main';
import NewClient from './newClient/NewClient';
import NewProspecto from "./NewProspecto/NewProspecto"
import Seguimiento from './Seguimiento/Seguimiento';
import Editregisters from "./Seguimiento/Editregisters";
const PrincipalUsuarios = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Main />} prop={props} />
                    <Route path="/Main" element={<Main />} prop={props} />
                    <Route path="/NewClient" element={<NewClient prop={props} />} />
                    <Route path="/NewProspecto" element={<NewProspecto prop={props} />} />
                    <Route path="/Seguimiento" element={<Seguimiento prop={props} />} />
                    <Route path="/Editregisters" element={<Editregisters prop={props} />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default PrincipalUsuarios