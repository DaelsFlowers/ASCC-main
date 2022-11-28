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

const clientCollectionRef = collection(db, "Clients");

class ClientDataService {
    addClient = (newClient) => {
        return addDoc(clientCollectionRef, newClient);
    };

    updateClient = (id, updateClient) => {
        const ClientDoc = doc(db, "Clients", id);
        return updateDoc(ClientDoc, updateClient);
    };

    deleteClient = (id) => {
        const ClientDoc = doc(db, "Clients", id);
        return deleteDoc(ClientDoc);
    }

    getAllClients = () => {
        return getDocs(clientCollectionRef);
    }

    getClient = (id) => {
        const ClientDoc = doc(db, "Clients", id);
        return getDoc(ClientDoc);
    }
}

export default new ClientDataService();