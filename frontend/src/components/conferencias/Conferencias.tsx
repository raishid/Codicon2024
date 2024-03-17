import { Link } from "react-router-dom"

export const Conferencias = ({streams}:any) => {
    return (
        <>
            {
                streams?.length &&
                streams?.map((streams:any,i:number) => (
                    <section key={i}>
                        <p className="eventos__fecha">{streams.start_date}</p>
                        <div className="eventos__grid">
                            <Link
                                to={"/event/"+streams.id}
                                key={i} 
                                className="evento">
                                <p className="evento__hora">{streams.hora}</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">{streams.name}</h4>
                                    <p className="evento__introduccion">{streams.description}</p>

                                    <div className="evento__autor-info">
                                        <img src={streams.poster_url} className="evento__imagen-autor" alt="Imagen Ponente" />

                                        <p className="evento__autor-nombre">{streams.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                ))
            }
        </>
    )
}
