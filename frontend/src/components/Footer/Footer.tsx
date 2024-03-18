
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__grid contenedor">
                <div className="footer__contenido">
                    <h3 className="footer__logo logo">&#60;TitanScript&#62;</h3>

                    <p className="footer__texto">TitanScript es una conferencia para desarrolladores de todos los niveles, se lleva a cabo de forma presencial y en línea.</p>
                </div>

                <nav className="menu-redes">
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://linkedin.com">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://youtube.com">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://tiktok.com">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://github.com">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </nav>
            </div>

            <p className="footer__copyright">TitanScript <span className="footer__copyright-regular"> - Todos los Derechos Reservados 2024 &copy;</span></p>
        </footer>
    )
}
