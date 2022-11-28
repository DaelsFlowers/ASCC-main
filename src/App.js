import React from 'react';
import { auth, db } from "./pages/services/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import {
  doc,
  getDoc
} from 'firebase/firestore'


//#region pages
import Home from "./pages/Login/Home"
import UserControler from './pages/services/UserControler';
//#endregion




function App() {

  const [user, setUser] = React.useState(null);



  async function getRol(uid) {
    const docuRef = doc(db, `Empleados/${uid}`)
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal
  }

  function setuserWithFirebaseAndRol(authenticatedUser) {
    getRol(authenticatedUser.uid).then((rol) => {
      const userdata = {
        uid: authenticatedUser.uid,
        email: authenticatedUser.email,
        rol: rol
      };
      setUser(userdata)
      console.log("usarData final", userdata)
    });
  }

  onAuthStateChanged(auth, async authenticatedUser => {
    if (authenticatedUser) {
      if (!user) {
        setuserWithFirebaseAndRol(authenticatedUser)
      }
    } else {
      setUser(null);
    }
  })

  return <>{user ? <UserControler user={user} /> : <Home />}</>
}

export default App;
