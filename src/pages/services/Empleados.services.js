import { db } from "./firebase";

import {
    collection,
    getDocs,
    // getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const empleadosCollectionRef = collection(db, "Empleados");

class EmpleadosDataService {
    addClient = (newEmpleado) => {
        return addDoc(empleadosCollectionRef, newEmpleado);
    };

    updateClient = (id, updateEmpleado) => {
        const EmpleadosDoc = doc(db, "Empleados", id);
        return updateDoc(EmpleadosDoc, updateEmpleado);
    };

    deleteEmpleado = (id) => {
        const EmpleadosDoc = doc(db, "Empleados", id);
        return deleteDoc(EmpleadosDoc);
    }

    getAllEmpleados = () => {
        return getDocs(empleadosCollectionRef);
    }

    // getEmpleado = (id) => {
    //     const EmpleadosDoc = doc(db, "Empleados", id);
    //     return getDoc(EmpleadosDoc);
    // }
}

export default new EmpleadosDataService();