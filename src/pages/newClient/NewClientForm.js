import React, { useState } from 'react'
import "./newClientForm.css"

import ClientDataService from "../services/Clients.services"


const NewClientForm = () => {

    const event = new Date();


    const [empresa, setEmpresa] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [puesto, setPuesto] = useState("");
    const [etiqueta, setEtiqueta] = useState("");
    const [favorito, setFavorito] = useState(false);
    const [estatus, setEstatus] = useState("Nuevo");
    const [mensaje, setMensaje] = useState("");
    const [empleado, setEmpleado] = useState("");
    const [cmsg, setCmsg] = useState(0);
    const [cphone, setCphone] = useState(0);
    const [cemail, setCemail] = useState(0);
    const [dateReg, setDateReg] = useState(event.toDateString());


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (empresa === "" ||
            nombre === "" ||
            email === "" ||
            phone === "" ||
            puesto === "" ||
            etiqueta === "") {
            return;
        }
        const newClient = {
            empresa,
            nombre,
            email,
            phone,
            puesto,
            etiqueta,
            favorito,
            estatus,
            mensaje,
            empleado,
            cmsg,
            cphone,
            cemail,
            dateReg
        }
        console.log(newClient)

        try {
            await ClientDataService.addClient(newClient);

        } catch (err) {
            console.log(err)
        }
        setEmpresa("");
        setNombre("");
        setEmail("");
        setPhone("");
        setPuesto("");
        setEtiqueta("");
        setFavorito("");
        setEstatus("");
        setMensaje("");
        setEmpleado("");
        setCmsg("");
        setCphone("");
        setCemail("");
        setDateReg("");
    };

    return (
        <div className='newClientForm'>
            <div className='contentClientForm'>
                <div className='tittle'> NUEVO CLIENTE</div>
                <form className='newclientFormform'>

                    <div className='newClientForm1'>
                        <div className='newClientFormInput empresa'>
                            <label >EMPRESA</label>
                            <br />
                            <input type={"text"}
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)} />
                        </div>
                        <div className='newClientFormInput nombre'>
                            <label>NOMBRE</label>
                            <br />
                            <input type={"text"}
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput correo'>
                            <label>CORREO</label>
                            <br />
                            <input type={"mail"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='newClientFormInput telefono'>
                            <label>TELEFONO</label>
                            <br />
                            <input type={"text"}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='newClientFormInput puesto'>
                            <label>PUESTO</label>
                            <br />
                            <select name="puesto"
                                value={puesto}
                                onChange={(e) => setPuesto(e.target.value)}>
                                <option value="none"></option>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                            </select>
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput etiqueta'>
                            <label>ETIQUETA</label>
                            <br />
                            <input type={"text"}
                                value={etiqueta}
                                onChange={(e) => setEtiqueta(e.target.value)} />
                        </div>
                    </div>
                </form>
                <div className="newClientFormButtom"
                    onClick={handleSubmit}>
                    <div className='newClientFormButtomText'> GUARDAR</div>
                </div>

            </div>

        </div>
    )
}

export default NewClientForm