import { Premios } from "@@/Premios/Premios"
import { Sponsors } from "@@/Sponsors/Sponsors"
import { Conferencias } from "@@/conferencias/Conferencias"
// import { Modal } from "@@/Modal"

export const Home = () => {
  // const a = () => {
  //   fetch("https://stream.deladmin.xyz/api/streams")
  //     .then(a => a.json())
  //     .then(a => console.log({a}))
  // } 
  return (
    <>
    {/* <button onClick={a}>a</button> */}
      <main className="contenedor">
        <h2 className="heading">Nuevas Ponencias cada día</h2>
        <p className="descripcion">Dictadas por los mayores expertos en desarrollo web</p>
        <div className="eventos">
          <h2 className="eventos heading eventos__heading">Siguientes Conferencias</h2>
          <Conferencias />
        </div>
      </main>
      <Sponsors />
      <Premios />
      {/* <Modal /> */}
    </>
  )
}
