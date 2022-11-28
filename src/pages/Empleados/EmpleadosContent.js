import React, { useEffect, useState } from 'react'
import "./empleadosContent.css"
import { db } from '../components/firebase';

import { doc, getDoc } from 'firebase/firestore';
import { auth } from "../components/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import EmpleadosDataService from "../services/Empleados.services"
import { async } from '@firebase/util';


export default function EmpleadosContent({
    setAuthState,
    setUser
}) {

    const valorinicial = {
        nombre: "",
        correo: "",
        contrasena: "",
        clientes: "",
        empresas: "",
        prospectos: "",
        date: "",
        rol: ""
    }
    const [users, setUsers] = useState(valorinicial);
    const event = new Date();
    const [nombre, setNombre] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [contrasena, setContrasena] = React.useState('');
    const [contrasenaR, setContrasenaR] = React.useState('');
    const [clientes, setClientes] = React.useState(0);
    const [empresas, setEmpresas] = React.useState(0);
    const [prospectos, setProspectos] = React.useState(0);
    const [date, setdate] = React.useState(event.toDateString());
    const [rol, setrol] = React.useState("Usuario");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombre === "" ||
            correo === "" ||
            contrasena === "" ||
            contrasenaR === "") {
            return;
        }
        const newEmpleado = {
            nombre,
            correo,
            contrasena,
            clientes,
            empresas,
            prospectos,
            date,
            rol
        }
        console.log(newEmpleado)

        try {
            await EmpleadosDataService.addClient(newEmpleado)
            if (correo !== null && contrasena !== null) {
                if (contrasena === contrasenaR) {
                    createUserWithEmailAndPassword(auth, correo, contrasena)
                        .then((user) => {
                            setUser(user.user.email);
                            setAuthState('home')
                        })
                } else {
                    alert("Password is Incorrect")
                }
            }
        } catch (err) {
            console.log(err)
        }
        setNombre("");
        setCorreo("");
        setContrasena("");
        setContrasenaR("");
    }


    const [empleados, setEmpleados] = useState([]);
    const [subid, setSubid] = useState("");
    useEffect(() => {
        getEmpleados();
    }, []);

    const getEmpleados = async () => {
        const data = await EmpleadosDataService.getAllEmpleados();
        console.log(data.docs);
        setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };


    const deleteuser = (id) => {
        EmpleadosDataService.deleteEmpleado(id);
    }

    useEffect(() => {
        if (subid !== "") {
            updateuser(subid);
        }
    }, [subid])


    const updateuser = async (id) => {
        try {
            const docRef = doc(db, "Empleados", id)
            const docSnap = await getDoc(docRef)
            setUsers(docSnap.data())
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='EmpleadoContent'>
            <div className='EmpleadoTittle'>
                Empleado
            </div>
            <div className='add'>
                <div className='addcontent'>
                    <div className='addgrid'>
                        <div className='additem'>
                            NOMBRE
                            <br />
                            <input className='addaplicate' value={nombre}
                                onChange={(e) => setNombre(e.target.value)} type={"text"} />
                        </div>
                        <div className='additem'>
                            CORREO
                            <br />
                            <input className='addaplicate' value={correo}
                                onChange={(e) => setCorreo(e.target.value)} type={"email"} />
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <br />
                            <input className='addaplicate' value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)} type={"password"} />
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <br />
                            <input className='addaplicate' value={contrasenaR}
                                onChange={(e) => setContrasenaR(e.target.value)} type={"password"} />
                        </div>
                        <div className='additem'>
                            <div onClick={handleSubmit} className="addbotton">
                                <div className='addbottonText'>AGREGAR</div>
                            </div>
                        </div>
                        <div className='additem'>
                            NOMBRE
                            <br />
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            <div className="addbotton">
                                <div className='addbottonText'>BUSCAR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listEmpleado'>
                <div className='EmpleadoContentTags'>
                    <div className='gridEmpleado'>
                        <div className='items'>#</div>
                        <div className='items'>NOMBRE</div>
                        <div className='items'>CORREO</div>
                        <div className='items'>CONTRASEÑA</div>
                        <div className='items'>NO.CLIENTES</div>
                        <div className='items'>NO.EMPRESAS</div>
                        <div className='items'>NO.PROSPECTOS</div>
                        <div className='items'>FECHA DE INICIO</div>
                        <div className='items'>ACCION</div>
                    </div>
                </div>
                {empleados.map((doc, index) => {
                    return (
                        <div className='sqllist'>
                            <div className='EmpleadoContentList'>
                                <div className='gridEmpleadoList'>
                                    <div className='itemsList'>{index + 1}</div>
                                    <div className='itemsList'>{doc.nombre}</div>
                                    <div className='itemsList'>{doc.correo}</div>
                                    <div className='itemsList'>{doc.contrasena}</div>
                                    <div className='itemsList'>{doc.clientes}</div>
                                    <div className='itemsList'>{doc.empresas}</div>
                                    <div className='itemsList'>{doc.prospectos}</div>
                                    <div className='itemsList'>{doc.date}</div>
                                    <div className='itemsList' style={{ display: "flex", justifyContent: "center" }}>
                                        <div className='itemList-btn' onClick={() => setSubid(doc.id)}>EDITAR</div>
                                        <div className='itemList-btn2' onClick={() => deleteuser(doc.id)}>BORRAR</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}