import React, { useState } from 'react'
import "./newProspectoForm.css"

import ProspectosCollectionRef from "../services/Prospectos.services"


const NewProspectoForm = () => {

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
        const newProspectos = {
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
        console.log(newProspectos)

        try {
            await ProspectosCollectionRef.addProspectos(newProspectos);

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
        <div className='newProspectoForm'>
            <div className='contentProspectoForm'>
                <div className='tittle'> NUEVO PROSPECTO</div>
                <form className='newProspectoFormform'>
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput empresa'>
                            <label >EMPRESA</label>
                            <br />
                            <input type="text"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)} />
                        </div>
                        <div className='newProspectoFormInput nombre'>
                            <label>NOMBRE</label>
                            <br />
                            <input type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput correo'>
                            <label>CORREO</label>
                            <br />
                            <input type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='newProspectoFormInput telefono'>
                            <label>TELEFONO</label>
                            <br />
                            <input type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='newProspectoFormInput puesto'>
                            <label>PUESTO</label>
                            <br />
                            <select name="puesto"
                                value={puesto}
                                onChange={(e) => setPuesto(e.target.value)}>
                                <option value="volvo"></option>
                                <option value="saab">A</option>
                                <option value="mercedes">B</option>
                                <option value="audi">C</option>
                            </select>
                        </div>
                    </div>
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput etiqueta'>
                            <label>ETIQUETA</label>
                            <br />
                            <input type="text"
                                value={etiqueta}
                                onChange={(e) => setEtiqueta(e.target.value)} />
                        </div>
                    </div>
                </form>
                <div onClick={handleSubmit} className="newProspectoFormButtom">
                    <div className='newProspectoFormButtomText'> GUARDAR</div>
                </div>
            </div>
        </div>
    )
}

export default NewProspectoForm