
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__grid contenedor">
                <div className="footer__contenido">
                    <h3 className="footer__logo logo">&#60;TitanScript&#62;</h3>

                    <p className="footer__texto">DevWebCamp es una conferencia para desarrolladores de todos los niveles, se lleva a cabo de forma presencial y en línea.</p>
                </div>

                <nav className="menu-redes">
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://facebook.com/C%C3%B3digo-Con-Juan-103341632130628">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-facebook"></i></span>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://twitter.com/codigoconjuan">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-x-twitter"></i></span>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://youtube.com/codigoconjuan">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-youtube"></i></span>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://instagram.com/codigoconjuan">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-instagram"></i></span>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://tiktok.com/@codigoconjuan">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-tiktok"></i></span>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://github.com/codigoconjuan">
                        <span className="menu-redes__ocultar"><i className="fa-brands fa-github"></i></span>
                    </a>
                </nav>
            </div>

            <p className="footer__copyright">TitanScript <span className="footer__copyright-regular"> - Todos los Derechos Reservados</span></p>
        </footer>
    )
}
