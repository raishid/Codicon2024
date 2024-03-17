import { regalos } from "@/App.constant"

export const Premios = () => {
    return (
        <section>
            <div className="contenedor">
                <h4 className="heading">Premios</h4>
                <p className="descripcion">Sortearemos distintos premios en cada una de nuestras conferencias</p>

                <div className="regalos">
                    {
                        regalos.map((regalo,i) => (
                            <div
                                key={i} 
                                className="regalos__contenedor">
                                <p className="regalos__contenido">{regalo.regalo}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
