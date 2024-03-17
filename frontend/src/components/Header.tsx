export const Header = () => {
    return (
        <header className="header">
            <div className="contenedor">
                <nav className="header__navegacion">
                    <a href="/registro" className="header__enlace">Crea tu Cuenta</a>
                    <a href="/login" className="header__enlace">Iniciar Sesión</a>
                </nav>

                <div className="header__contenido">
                    <a href="/">
                        <h1 className="logo texto-fluido texto-degradado">&#60;TitanScript/&#62;</h1>
                    </a>

                    <p className="header__texto">Febrero 24-25 2024</p>
                    <p className="header__texto header__modalidad">En Línea - Presencial</p>

                    <a href="/registro" className="boton">Comprar Pase</a>
                </div>
            </div>
        </header>
    )
}
