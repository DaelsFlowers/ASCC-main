
import React from 'react';
import { auth } from "./pages/components/firebase"
import { onAuthStateChanged } from 'firebase/auth';

//#region pages
import Home from "./pages/Login/Home"
import Principal from './pages/Principal';
//#endregion

function App() {

  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unSubcribeAuth = onAuthStateChanged(auth, async authenticatedUser => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email)
        setAuthState("home");
      } else {
        setUser(null);
        setAuthState("login");
      }
    })
    return unSubcribeAuth;
  }, [user])

  if (authState === null) return <div>loading...</div>
  if (authState === 'login') return <Home setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'home') return <Principal setAuthState={setAuthState} setUser={setUser} />
  if (user) return <Principal user={user} setAuthState={setAuthState} setUser={setUser} />

}

export default App;
