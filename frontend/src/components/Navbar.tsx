import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="barra">
      <div className="barra__contenido contenedor">
        <Link to="/" >
          <h2 className="barra__logo">&#60;TitanScript/&#62;</h2>
        </Link>

        <nav className="navegacion">
          <Link to="/paquetes" className="navegacion__enlace">Paquetes</Link>
          <Link to="/shop" className="navegacion__enlace">Comprar Pase</Link>
        </nav>
      </div>
    </div>
  )
}
