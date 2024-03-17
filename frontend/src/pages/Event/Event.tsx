import { Message } from "@@/Message/Message"

export const Event = () => {
  return (
    <>
      {/* <div className="px-28">
        <h2 className="m-0">Nuevas Ponencias cada día</h2>
        <small className="">Dictadas por los mayores expertos en desarrollo web</small>
      </div> */}
      <div className="px-28 my-5">
        <div className="text-sky-500 dark:text-sky-400">
          <h2 className="m-0">Nuevas Ponencias cada día</h2>
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          <p>Dictadas por los mayores expertos en desarrollo web</p>
        </div>
      </div>
      <div className="w-full flex justify-around h-full max-h-[620px] px-28	">
        <section className="video w-[60%]">
          {/* <video src="https://www.youtube.com/embed/XeYutMjMM6Y"></video> */}
          <iframe
            className="w-full  h-full rounded-3xl"
            src="https://www.youtube.com/embed/XeYutMjMM6Y"
            title="Mis 9 PELICULAS Favoritas Que Transcurren Entera O Parcialmente En AVIONES | #TeLoResumo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </section>
        <section className="chat w-[25%] bg-slate-800 rounded-t-3xl">
          <h3 className="h-[10%] m-0 p-5 text-4xl text-white bg-slate-900 flex justify-center items-center rounded-t-3xl">Chat</h3>
          <section className="h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-6 pt-4">
            {
              Array.from({ length: 5 }, () => (
                <Message />
              ))
            }
          </section>
          <section className="flex justify-center items-center bg-slate-900 px-6 py-4 gap-4 rounded-b-lg">
            <textarea className="w-full border-[#1E293B] p-2 focus:border-white border-2 h-[60px] rounded-b-lg" placeholder="Enviar un mensaje"></textarea>
            <button className="!bg-transparent">
            </button>
          </section>

        </section>

      </div>
    </>
  )
}
