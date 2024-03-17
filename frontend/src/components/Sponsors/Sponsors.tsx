import { sponsors } from "./Sponsors.constanst"

export const Sponsors = () => {
    return (
        <section className="contenedor-md">
            <div className="sponsors__grid">
                {
                    sponsors.map((sponsor,i) => (
                        <div
                            key={i} 
                            className="sponsors__contenido">
                            <a href="/">
                                <img src={sponsor.imagen} alt="" className="sponsors__imagen" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
