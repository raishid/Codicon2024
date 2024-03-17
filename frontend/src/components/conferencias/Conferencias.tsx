import { conferencias } from "@/App.constant"
import { Link } from "react-router-dom"

export const Conferencias = () => {
    return (
        <>
            {
                conferencias.map((conferencia,i) => (
                    <section key={i}>
                        <p className="eventos__fecha">{conferencia.date}</p>
                        <div className="eventos__grid">
                            {
                                conferencia.ponentes.map((ponente,i) => (
                                    <Link
                                        to={"/event/ejemplo"}
                                        key={i} 
                                        className="evento">
                                        <p className="evento__hora">{ponente.hora}</p>

                                        <div className="evento__informacion">
                                            <h4 className="evento__nombre">{ponente.title}</h4>
                                            <p className="evento__introduccion">{ponente.description}</p>

                                            <div className="evento__autor-info">
                                                <img src={ponente.imagen} className="evento__imagen-autor" alt="Imagen Ponente" />

                                                <p className="evento__autor-nombre">{ponente.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </section>
                ))
            }
        </>
    )
}
