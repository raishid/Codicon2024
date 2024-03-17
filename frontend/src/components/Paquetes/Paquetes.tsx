export const Paquetes = () => {
    return (
        <main className="contenedor">
            <h2 className="heading">Paquetes TitanScript</h2>
            <p className="descripcion">Compara los paquetes de TitanScript</p>

            <div className="paquetes__grid">
                <div className="paquete">
                    <div className="paquete-ordenar">
                        <h3 className="paquete__nombre">Pase Gratis</h3>
                        <ul className="paquete__lista">
                            <li className="paquete__elemento">Acceso Virtual a TitanScript</li>
                        </ul>
                    </div>
                        <p className="paquete__precio">$0</p>
                </div>

                <div className="paquete">
                    <div className="paquete-ordenar">
                        <h3 className="paquete__nombre">Pase Presencial</h3>
                        <ul className="paquete__lista">
                            <li className="paquete__elemento">Acceso Presencial a TitanScript</li>
                            <li className="paquete__elemento">Pase por dos días</li>
                            <li className="paquete__elemento">Acceso Workshops y Conferencias</li>
                            <li className="paquete__elemento">Acceso a las grabaciones</li>
                            <li className="paquete__elemento">Merchandising del Evento</li>
                            <li className="paquete__elemento">Comida y bebida</li>
                        </ul>
                    </div>

                    <p className="paquete__precio">$199</p>
                </div>

                <div className="paquete">
                    <div className="paquete-ordenar">
                        <h3 className="paquete__nombre">Pase Virtual</h3>
                        <ul className="paquete__lista">
                            <li className="paquete__elemento">Acceso Virtual a TitanScript</li>
                            <li className="paquete__elemento">Pase por dos días</li>
                            <li className="paquete__elemento">Enlaces a Workshops y Conferencias</li>
                            <li className="paquete__elemento">Acceso a las grabaciones</li>
                        </ul>
                    </div>

                    <p className="paquete__precio">$49</p>
                </div>
            </div>
        </main>
    )
}
