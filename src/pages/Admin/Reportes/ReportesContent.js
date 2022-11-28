import React, { useEffect, useState } from 'react'
import "./reportesContent.css"
import msg from "../../../image/msg.png"
import call from "../../../image/call.png"
import mail from "../../../image/mail.png"

import ClientDataService from "../../services/Clients.services"
import ProspectoDataService from "../../services/Prospectos.services"


const ReportesContent = () => {


    const [clients, setClients] = useState([]);
    const [prospect, setProspect] = useState([]);

    const [tipo, setTipo] = useState("");
    const [estatus, setEstatus] = useState("");
    const [datein, setDatein] = useState("");
    const [dateout, setDateout] = useState("");


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



    const Tcall = 0;
    const Tmsg = 0;
    const Tmail = 0;
    const Total = Tcall + Tmsg + Tcall;

    return (

        <div className='ReportesContent'>
            <div className='ReportesTittle'>
                REPORTES
            </div>
            <div className='query'>
                <div className='querycontent'>
                    <div className='querygrid'>
                        <div className='queryitem'>
                            TIPO DE REGISTRO
                            <br />
                            <select name="seguimientoCategoria"
                                className='queryaplicate'
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}>
                                <option value="Clientes">CLIENTES</option>
                                <option value="Prospectos">PROSPECTOS</option>
                            </select>
                        </div>
                        <div className='queryitem'>
                            ESTATUS
                            <br />
                            <select name="seguimientoCategoria"
                                className='queryaplicate'
                                value={estatus}
                                onChange={(e) => setEstatus(e.target.value)}>
                                <option value="CONTACTADO">CONTACTADO</option>
                                <option value="ESPERA">ESPERA</option>
                                <option value="TERMINADO">TERMINADO </option>
                                <option value="NINGUNO">NINGUNO</option>
                            </select>
                        </div>
                        <div className='queryitem'>
                            EMPLEADO
                            <br />
                            <input name="seguimientoCategoria"
                                className='queryaplicate'
                                value={estatus}
                                onChange={(e) => setEstatus(e.target.value)}>
                            </input>
                        </div>

                        <div className='queryitemfecha'>
                            FECHA
                            <br /><br />
                            <div className='queryaplicatefecha'>
                                <div>
                                    <label>DESDE</label>
                                    <input type={"date"}
                                        value={datein}
                                        onChange={(e) => setDatein(e.target.value)} />
                                </div>
                                <div>
                                    <label>HASTA</label>
                                    <input type={"date"}
                                        value={dateout}
                                        onChange={(e) => setDateout(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='queryitem'>
                            <div className="addbotton2">
                                <div className='addbottonText2'>
                                    APLICAR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listReportes'>
                <div className='ReportesContentTags'>
                    <div className='gridReportes'>
                        <div className='items'>#</div>
                        <div className='items'>FECHA</div>
                        <div className='items'>EMPLEADO</div>
                        <div className='items'>CONTACTO</div>
                        <div className='items'>EMPRESA</div>
                        <div className='items'>ESTATUS</div>
                        <div className='items'>ANOTACIONES</div>
                        <div className='items'>ULTIMA ACTUALIZACION</div>
                    </div>
                </div>
                {clients.map((doc, index) => {
                    return (
                        <div className='sqllist' >

                            <div className='ReportesContentList' key={doc.id}  >

                                <div className='gridReportesList'  >
                                    <div className='itemsList'>{index + 1}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>
                                    <div className='itemsList'>DANIEL FLORES</div>
                                    <div className='itemsList'>{doc.empresa}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>
                                    <div className='itemsListEstatus'>
                                        {doc.estatus}
                                    </div>
                                    <div className='itemsList'>{doc.mensaje}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>

                                </div>

                            </div>

                        </div>
                    )
                })}
                {prospect.map((doc, index) => {
                    return (
                        <div className='sqllist'>
                            <div className='ReportesContentList' key={doc.id}>
                                <div className='gridReportesList'>
                                    <div className='itemsList'>{index + 1}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>
                                    <div className='itemsList'>DANIEL FLORES</div>
                                    <div className='itemsList'>{doc.empresa}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>
                                    <div className='itemsListEstatus'>
                                        {doc.estatus}
                                    </div>
                                    <div className='itemsList'>{doc.mensaje}</div>
                                    <div className='itemsList'>{doc.dateReg}</div>
                                </div>
                            </div>
                        </div>
                    )

                })}


                <div className='TotalContent'>
                    <div className='TotalNoti'>
                        <div className='TotalNotiText'>
                            Total: {Total}
                        </div>
                        <div className='Totalmsg'>
                            {Tcall} <img src={call} alt="mail" />
                        </div>
                        <div className='TotalMail'>
                            {Tmsg}<img src={msg} alt="mail" />
                        </div>
                        <div className='TotalCall'>
                            {Tmail}<img src={mail} alt="mail" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportesContent