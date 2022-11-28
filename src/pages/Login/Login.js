import * as React from 'react';
import "./Login.css"

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../components/firebase"


function Login({
    setAuthState,
    setUser
}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setUser(email)
                    setAuthState('home')
                });
        }
    }
    return (
        <div className='login'>
            <div class="container">
                <div className='top'>
                    <div className='loginlogo'>ASCC</div>
                    <br />
                    <div className='ingresa'>INGRESA A TU CUENTA</div>
                </div>
                <form >
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required type={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <span class="omrs-input-label"  >Username</span>
                        </label>
                    </div>
                    <br />
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required type={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <span class="omrs-input-label" >Password</span>
                        </label>
                    </div>
                    <div className='button' onClick={handleLogin} >
                        <div class="btn-grad">
                            LOGIN
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login





