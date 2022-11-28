import React, { useEffect, useState } from 'react'
import "./seguimientoContent.css"
import { NavLink } from "react-router-dom";

import ClientDataService from "../services/Clients.services"
import ProspectoDataService from "../services/Prospectos.services"

import Mycomponent from './Editregisters';




const SeguimientoContent = () => {

    const [clients, setClients] = useState([]);
    const [seguimientoCategoria, setSeguimientoCategoria] = useState([]);


    const [RegisterId, setRegisterId] = useState("");
    console.log(setRegisterId)

    function getRegisterIdHandler() {
        return (
            <div>
                <Mycomponent name="daysi" />
            </div>
        );
    }

    useEffect(() => {
        if (seguimientoCategoria === "Clientes") {
            getClients();
        } else if (seguimientoCategoria === "Prospectos") {
            getProspectos();
        }
    }, [seguimientoCategoria]);

    const getClients = async () => {
        const data = await ClientDataService.getAllClients();
        setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    const getProspectos = async () => {
        const data = await ProspectoDataService.getAllProspectos();
        setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };


    return (
        <>
            <div className='SeguimientoContent'>
                <div className='filterSeguimiento'>
                    <select name="seguimientoCategoria"
                        className='SeguimientoCategoria'
                        value={seguimientoCategoria}
                        onChange={(e) => setSeguimientoCategoria(e.target.value)}>
                        <option value="Clientes">CLIENTES</option>
                        <option value="Prospectos">PROSPECTOS</option>
                    </select>
                </div>
                <div className='SeguiminetoTittle'>
                    SEGUIMIENTO
                </div>
                <div className='listSeguimineto'>
                    <div className='SeguiminetoContentTags'>
                        <div className='gridSeguimiento'>
                            <div className='items'>#</div>
                            <div className='items'>CONTACTO</div>
                            <div className='items'>EMPRESA</div>
                            <div className='items'>PUESTO</div>
                            <div className='items'>CORREO/TELEFONO</div>
                            <div className='items'>ESTATUS</div>
                            <div className='items'>ETIQUETA</div>
                            <div className='items'>FAVORITOS</div>
                        </div>
                    </div>
                    <NavLink to={{ pathname: "/EditarRegistro", state: { tittle: RegisterId } }}>
                        {clients.map((doc, index) => {
                            return (
                                <div className='sqllist' onClick={(e) => { getRegisterIdHandler(doc.id) }}>
                                    <div className='SeguiminetoContentList' key={doc.id} >
                                        <div className='gridSeguimientoList'  >
                                            <div className='itemsList'>{index + 1}</div>
                                            <div className='itemsList'>{doc.nombre}</div>
                                            <div className='itemsList'>{doc.empresa}</div>
                                            <div className='itemsList'>{doc.puesto}</div>
                                            <div className='itemsList'>{doc.email + " / " + doc.phone}</div>
                                            <div className='itemsListEstatus'>
                                                {doc.estatus}
                                            </div>
                                            <div className='itemsList'>{doc.etiqueta}</div>
                                            <input disabled={true} type={"checkbox"} checked={doc.favorito} className='itemsList checkboxitem' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default SeguimientoContent