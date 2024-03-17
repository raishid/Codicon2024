export const Navbar = () => {
  return (
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
  )
}
