export const Shop = () => {
    return (
        <main className="contenedor-sm">
            <h2 className="heading">Crea tu cuenta en TitanScript</h2>
            <p className="descripcion">Llena el siguiente formulario</p>

            <form method="POST" action="/" className="formulario">
                <div className="formulario__campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="formulario__input" placeholder="Ingresa tu nombre"/>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="nombre">Apellido</label>
                    <input type="text" name="apellido" id="apellido" className="formulario__input" placeholder="Ingresa tu apellido"/>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" className="formulario__input" placeholder="Ingresa tu Correo"/>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" className="formulario__input" placeholder="Ingresa tu contraseña"/>
                </div>

                <div className="formulario__campo">
                    <label htmlFor="password2">Confirmar contraseña</label>
                    <input type="password" name="password2" id="password2" className="formulario__input" placeholder="Confirma tu contraseña"/>
                </div>

                <input type="submit" className="formulario__submit boton" value="Crear Cuenta"/>
            </form>
        </main>


    )
}
