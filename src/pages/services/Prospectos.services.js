import { db } from "../components/firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const prospectosCollectionRef = collection(db, "Prospectos");

class ProspectosDataService {
    addProspectos = (newProspectos) => {
        return addDoc(prospectosCollectionRef, newProspectos);
    };

    updateProspectos = (id, updateProspectos) => {
        const ProspectosDoc = doc(db, "Prospectos", id);
        return updateDoc(ProspectosDoc, updateProspectos);
    };

    deleteProspectos = (id) => {
        const ProspectosDoc = doc(db, "Prospectos", id);
        return deleteDoc(ProspectosDoc);
    }

    getAllProspectos = () => {
        return getDocs(prospectosCollectionRef);
    }

    getProspectos = (id) => {
        const ProspectosDoc = doc(db, "Prospectos", id);
        return getDoc(ProspectosDoc);
    }
}

export default new ProspectosDataService();