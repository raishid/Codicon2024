import { ponentesSabado, ponentesViernes, regalos, sponsors } from "./App.constant"
import "./App.css"

function App() {
    return (
        <>
            <body>
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

                <div className="barra">
                    <div className="barra__contenido contenedor">
                        <a href="/" >
                            <h2 className="barra__logo">&#60;TitanScript/&#62;</h2>
                        </a>

                        <nav className="navegacion">
                            <a href="/devwebcamp" className="navegacion__enlace">Eventos</a>
                            <a href="/paquetes" className="navegacion__enlace">Paquetes</a>
                            <a href="/workshops-conferencias" className="navegacion__enlace">Workshops / Conferencias</a>
                            <a href="/registro" className="navegacion__enlace">Comprar Pase</a>
                        </nav>
                    </div>
                </div>

                <main className="contenedor">
                    <h2 className="heading">Nuevas Ponencias cada día</h2>
                    <p className="descripcion">Dictadas por los mayores expertos en desarrollo web</p>

                    <div className="eventos">
                        <h2 className="eventos heading eventos__heading">Siguientes Conferencias</h2>
                        <p className="eventos__fecha">Viernes 22 de Marzo</p>

                        <div className="eventos__grid">
                            {
                                ponentesViernes.map(ponente => (
                                    <div className="evento">
                                        <p className="evento__hora">{ponente.hora}</p>

                                        <div className="evento__informacion">
                                            <h4 className="evento__nombre">{ponente.title}</h4>
                                            <p className="evento__introduccion">{ponente.description}</p>

                                            <div className="evento__autor-info">
                                                <img src={ponente.imagen} className="evento__imagen-autor" alt="Imagen Ponente" />

                                                <p className="evento__autor-nombre">{ponente.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> {/* Cierre de eventos__grid */}

                        <p className="eventos__fecha">Sábado 23 de Marzo</p>

                        <div className="eventos__grid">
                            {
                                ponentesSabado.map(ponente => (
                                    <div className="evento">
                                        <p className="evento__hora">{ponente.hora}</p>

                                        <div className="evento__informacion">
                                            <h4 className="evento__nombre">{ponente.title}</h4>
                                            <p className="evento__introduccion">{ponente.description}</p>

                                            <div className="evento__autor-info">
                                                <img src={ponente.imagen} className="evento__imagen-autor" alt="Imagen Ponente" />

                                                <p className="evento__autor-nombre">{ponente.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> {/* Cierre de eventos__grid */}
                    </div>
                </main>
                <section className="contenedor-md">
                    <div className="sponsors__grid">
                        {
                            sponsors.map(sponsor => (
                                <div className="sponsors__contenido">
                                    <a href="/">
                                        <img src={sponsor.imagen} alt="" className="sponsors__imagen"/>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section>
                    <div className="contenedor">
                        <h4 className="heading">Premios</h4>
                        <p className="descripcion">Sortearemos distintos premios en cada una de nuestras conferencias</p>

                        <div className="regalos">
                            {
                                regalos.map(regalo => (
                                    <div className="regalos__contenedor">
                                        <p className="regalos__contenido">{regalo.regalo}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footer__grid contenedor">
                        <div className="footer__contenido">
                            <h3 className="footer__logo logo">&#60;TitanScript&#62;</h3>

                            <p className="footer__texto">DevWebCamp es una conferencia para desarrolladores de todos los niveles, se lleva a cabo de forma presencial y en línea.</p>
                        </div>

                        <nav className="menu-redes">
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://facebook.com/C%C3%B3digo-Con-Juan-103341632130628">
                                <span className="menu-redes__ocultar">Facebook</span>
                            </a> 
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://twitter.com/codigoconjuan">
                                <span className="menu-redes__ocultar">Twitter</span>
                            </a> 
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://youtube.com/codigoconjuan">
                                <span className="menu-redes__ocultar">YouTube</span>
                            </a> 
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://instagram.com/codigoconjuan">
                                <span className="menu-redes__ocultar">Instagram</span>
                            </a> 
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://tiktok.com/@codigoconjuan">
                                <span className="menu-redes__ocultar">Tiktok</span>
                            </a> 
                            <a className="menu-redes__enlace" rel="noopener noreferrer" target="_blank" href="https://github.com/codigoconjuan">
                                <span className="menu-redes__ocultar">Github</span>
                            </a>
                        </nav>
                    </div>

                    <p className="footer__copyright">TitanScript <span className="footer__copyright-regular"> - Todos los Derechos Reservados</span></p>
                </footer>
            </body>
        </>
    )
}

export default App
