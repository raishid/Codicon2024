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
                            <div className="evento">
                                <p className="evento__hora">10:00am - 10:55am</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">11:00am - 11:55am</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">1:00pm - 1:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">2:00pm - 2:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">3:00pm - 3:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">4:00pm - 4:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">5:00pm - 5:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">6:00pm - 6:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">TypeScript en React</h4>
                                    <p className="evento__introduccion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia alias ratione id aliquam similique cupiditate quis quod facilis aut, nisi molestiae sit, exercitationem sed odit incidunt corporis, dolores at?</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Alba Castro</p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Cierre de eventos__grid */}

                        <p className="eventos__fecha">Sábado 23 de Marzo</p>

                        <div className="eventos__grid">
                            <div className="evento">
                                <p className="evento__hora">10:00am - 10:55am</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">11:00am - 11:55am</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">1:00pm - 1:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">2:00pm - 2:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">3:00pm - 3:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">4:00pm - 4:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">5:00pm - 5:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>

                            <div className="evento">
                                <p className="evento__hora">6:00pm - 6:55pm</p>

                                <div className="evento__informacion">
                                    <h4 className="evento__nombre">Python: El nuevo estandar para la programación en Backend</h4>
                                    <p className="evento__introduccion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat mollitia praesentium officia. Suscipit neque perferendis quos voluptatem debitis fuga aliquam voluptate incidunt alias iusto ipsam atque et expedita, quam quo.</p>

                                    <div className="evento__autor-info">
                                        {/* <img className="evento__imagen-autor" loading="lazy" width="200" height="300" src="/img/speakers/imagen.png" alt="Imagen Ponente"></img> */}
                                        <p className="evento__autor-nombre">Orlando Sánchez</p>
                                    </div>
                                </div>
                            </div>
                        </div>  {/* Cierre de eventos__grid */}
                    </div>
                </main>
            </body>
        </>
    )
}

export default App
