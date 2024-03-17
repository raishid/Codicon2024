import { Footer } from "@@/Footer/Footer"
import { Premios } from "@@/Premios/Premios"
import { Sponsors } from "@@/Sponsors/Sponsors"
import { Conferencias } from "@@/conferencias/Conferencias"

export const Home = () => {
  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuevas Ponencias cada día</h2>
        <p className="descripcion">Dictadas por los mayores expertos en desarrollo web</p>

        <div className="eventos">
          <h2 className="eventos heading eventos__heading">Siguientes Conferencias</h2>
          <Conferencias />
          {/* <p className="eventos__fecha">Viernes 22 de Marzo</p>

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
                        </div> Cierre de eventos__grid */}
        </div>
      </main>
      <Sponsors />
      {/* <section className="contenedor-md">
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
                </section> */}
      {/* <section>
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
                </section> */}
      <Premios />
      
      {/* <footer className="footer">
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
                </footer> */}
    </>
  )
}
