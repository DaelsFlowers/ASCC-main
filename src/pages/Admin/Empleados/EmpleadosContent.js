import React, { useEffect, useState } from 'react'
import "./empleadosContent.css"
import { auth, db } from '../components/firebase';
import {
    collection,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    setDoc
} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';



export default function EmpleadosContent() {
    const event = new Date();
    const valorinicial = {
        nombre: "",
        correo: "",
        contrasena: "",
        contrasenaR: "",
        clientes: "0",
        empresas: "0",
        prospectos: "0",
        date: event.toDateString(),
        rol: "Usuario"
    }
    const [subId, setSubId] = useState("");

    const [users, setUsers] = useState(valorinicial);
    const [listar, setListar] = useState([]);
    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUsers({ ...users, [name]: value })
    }

    async function registartUsuario(users) {
        const infoUsuario = await createUserWithEmailAndPassword(auth, users.correo, users.contrasena).then((user) => {
            return user
        })
        console.log(infoUsuario.user.uid)

        const docuref = doc(db, `Empleados/${infoUsuario.user.uid}`);
        setDoc(docuref, {
            nombre: users.nombre,
            correo: users.correo,
            contrasena: users.contrasena,
            clientes: users.clientes,
            empresas: users.empresas,
            prospectos: users.prospectos,
            date: users.date,
            rol: users.rol,
        })

        // await addDoc(collection(db, `Empleados/${}`), {
        //     ...users
        // })
    }


    //save doc
    const guardarDatos = async (e) => {
        e.preventDefault();
        if (subId === "") {
            if (users.nombre === "" || users.contrasena === "" || users.correo === "") {
                alert("FAVOR DE COMPLETAR TODOS LOS CAMPOS BIEN")
            } else if (users.contrasena !== users.contrasenaR) {
                alert("LAS CONTRASEÑAS TIENEN QUE SER IGUALES Y MAYOR A 8 DIGITOS")
            } else {
                try {
                    registartUsuario(users)

                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            await setDoc(doc(db, "Empleados", subId), {
                ...users
            })
        }
        setUsers({ ...valorinicial });
        setSubId("")
    }
    //get doc
    useEffect(() => {
        const getLista = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Empleados"))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setListar(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getLista()
    }, [listar])



    //delete doc
    const deleteUsers = async (id) => {
        await deleteDoc(doc(db, "Empleados", id))
    }

    //update doc
    const getOne = async (id) => {
        try {
            const docRef = doc(db, "Empleados", id)
            const docSnap = await getDoc(docRef)
            setUsers(docSnap.data())
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (subId !== "") {
            getOne(subId)
        }
    }, [subId])


    //form and show list docs
    return (
        <div className='EmpleadoContent'>
            <div className='EmpleadoTittle'>
                Empleado
            </div>
            <div className='add'>
                <div className='addcontent'>
                    <form >
                        <div className='addgrid'>

                            <div className='additem'>
                                NOMBRE
                                <br />
                                <input className='addaplicate' name='nombre' value={users.nombre}
                                    onChange={capturarInputs} type={"text"} />
                            </div>
                            <div className='additem'>
                                CORREO
                                <br />
                                <input className='addaplicate' name='correo' value={users.correo}
                                    onChange={capturarInputs} type={"email"} />
                            </div>
                            <div className='additem'>
                                CONTRASEÑA
                                <br />
                                <input className='addaplicate' name='contrasena' value={users.contrasena}
                                    onChange={capturarInputs} type={"password"} />
                            </div>
                            <div className='additem'>
                                CONTRASEÑA
                                <br />
                                <input className='addaplicate' name='contrasenaR' value={users.contrasenaR}
                                    onChange={capturarInputs} type={"password"} />
                            </div>
                            <div className='additem'>
                                <div className="addbotton">
                                    <div onClick={guardarDatos} className='addbottonText'>
                                        {
                                            subId === "" ? "AGREGAR" : "ACTUALIZAR"
                                        }
                                    </div>
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
                    </form>
                </div>
            </div>
            <div className='listEmpleado'>
                <div className='EmpleadoContentTags'>
                    <div className='gridEmpleado'>
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
                <div className='sqllist'>
                    {
                        listar.map(list => {
                            return (
                                <div key={list.id}>
                                    <div className='EmpleadoContentList'>
                                        <div className='gridEmpleadoList'>
                                            <div className='itemsList'>{list.nombre}</div>
                                            <div className='itemsList'>{list.correo}</div>
                                            <div className='itemsList'>{list.contrasena}</div>
                                            <div className='itemsList'>{list.clientes}</div>
                                            <div className='itemsList'>{list.empresas}</div>
                                            <div className='itemsList'>{list.prospectos}</div>
                                            <div className='itemsList'>{list.date}</div>
                                            <div className='itemsList' style={{ display: "flex", justifyContent: "center" }}>
                                                <div className='itemList-btn' onClick={() => setSubId(list.id)}>EDITAR</div>
                                                <div className='itemList-btn2' onClick={() => deleteUsers(list.id)} >BORRAR</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}