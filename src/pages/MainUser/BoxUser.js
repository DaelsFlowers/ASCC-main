import React from 'react'
import "./Box.css"
const BoxUser = () => {


    return (
        <div className='Box'>
            <div className='content'>

                <div className='Clientes'>
                    <div className='clientes'>
                        <div className='titulo'>CLIENTES GUARDADOS</div>
                        <div class="flex-container">
                            <div class="categoria">EMPRESA</div>
                            <div class="categoria">NOMBRE</div>
                            <div class="categoria">ULTIMO REGISTRO</div>
                        </div>
                        {/* ESTA ZONA ES PARA EL BACK */}
                        <div class="flex-container">

                        </div>
                    </div>
                </div>
                <div className='Registros'>
                    <div className='registros'>
                        <div className='titulo'>CLIENTES GUARDADOS</div>
                        <div class="flex-container">
                            <div class="categoriaG">HORA</div>
                            <div class="categoriaG">EMPLEADO</div>
                            <div class="categoriaG">EMPRESA</div>
                            <div class="categoriaG">NOMBRE</div>
                            <div class="categoriaG">CORREO</div>
                            <div class="categoriaG">TELEFONO</div>
                            <div class="categoriaG">ESTATUS</div>
                        </div>
                        {/* ESTA ZONA ES PARA EL BACK */}
                        <div class="flex-container">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxUser