import React from 'react'
import PrincipalUsuarios from '../User/PrincipalUsuarios'
import PrincipalAdmin from '../Admin/PrincipalAdmin'

function UserControler({ user }) {
    return (
        <div>
            {
                user.rol === "Administrador" ? <PrincipalAdmin /> : <PrincipalUsuarios />
            }
        </div>
    )
}

export default UserControler