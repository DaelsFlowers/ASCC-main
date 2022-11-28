import React, { useEffect, useState } from 'react'
import "./Box.css"


import ClientDataService from "../../services/Clients.services"
import ProspectoDataService from "../../services/Prospectos.services"

const Box = () => {
    const [clients, setClients] = useState([]);
    const [prospect, setProspect] = useState([]);

    useEffect(() => {
        getClients();
        getProspect();
    }, []);

    const getClients = async () => {
        const dataClients = await ClientDataService.getAllClients();
        setClients(dataClients.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    const getProspect = async () => {
        const dataProspects = await ProspectoDataService.getAllProspectos();
        setProspect(dataProspects.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    return (
        <div className='Box'>
            <div className='content'>

                <div className='Clientes2'>
                    <div className='clientes'>
                        <div className='titulo'>CLIENTES GUARDADOS</div>
                        <div class="grid-clientesGuardados">
                            <div class="categoria">EMPRESA</div>
                            <div class="categoria">TIPO</div>
                            <div class="categoria">NOMBRE</div>
                            <div class="categoria">ULTIMO REGISTRO</div>
                        </div>
                        {/* ESTA ZONA ES PARA EL BACK */}
                        <div class="grid-clientesGuardados">
                            <div class="categoria">{ }</div>
                            <div class="categoria">{ }</div>
                            <div class="categoria">{ }</div>
                            <div class="categoria">{ }</div>
                        </div>
                    </div>
                </div>
                <div className='Registros'>
                    <div className='registros'>
                        <div className='titulo'>ULTIMOS REGISTROS</div>
                        <div class="grid-ultimoUpdate">
                            <div class="categoriaG">FECHA</div>
                            <div class="categoriaG">EMPLEADO</div>
                            <div class="categoriaG">EMPRESA</div>
                            <div class="categoriaG">TIPO</div>
                            <div class="categoriaG">CORREO</div>
                            <div class="categoriaG">TELEFONO</div>
                            <div class="categoriaG">ESTATUS</div>
                        </div>
                        <br />
                        {clients.map((doc, index) => {
                            return (
                                <div className='sqllist' >

                                    <div className='ReportesContentList' key={doc.id}  >

                                        <div className='gridReportesList2'  >

                                            <div className='itemsList'>{doc.dateReg}</div>
                                            <div className='itemsList'>DANIEL FLORES</div>
                                            <div className='itemsList'>{doc.empresa}</div>
                                            <div className='itemsList'>CLIENTE</div>
                                            <div className='itemsList'>{doc.email}</div>
                                            <div className='itemsList'>{doc.phone}</div>
                                            <div className='itemsList'>{doc.estatus}</div>


                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                        {prospect.map((doc, index) => {
                            return (
                                <div className='sqllist'>
                                    <div className='ReportesContentList' key={doc.id}>
                                        <div className='gridReportesList2'>
                                            <div className='itemsList'>{doc.dateReg}</div>
                                            <div className='itemsList'>DANIEL FLORES</div>
                                            <div className='itemsList'>{doc.empresa}</div>
                                            <div className='itemsList'>PROSPECTO</div>
                                            <div className='itemsList'>{doc.email}</div>
                                            <div className='itemsList'>{doc.phone}</div>
                                            <div className='itemsList'>{doc.estatus}</div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box