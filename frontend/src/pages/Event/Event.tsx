import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { Message } from "@@/Message/Message"
import { socket } from "@/webSockets"
import { useGetStream } from "@/hooks/useStream"

export const Event = () => {
  const params: any = useParams()
  const { stream }: any = useGetStream(params.id)
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessage] = useState<any>([])
  const sectionChat = useRef(null)

  const send = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/stream/${params.id}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        message: newMessage,
        username: 'anon' + Math.floor(Math.random() * 1000),
      })
    })

    setNewMessage('')

    //scroll to down
    //@ts-ignore
    sectionChat.current.scrollTop = sectionChat.current.scrollHeight
  }

  useEffect(() => {
    stream?.messages?.length && setMessage((prev: any[]) => prev.concat(stream.messages))
  }, [stream])

  useEffect(() => {

    const channelSucribed = socket().join(`stream.${params.id}`);
    // channelSucribed.here(() => {
    //   // setOnlineUsers(channelSucribed.subscription.members.count)
    //   console.log("channelSucribed.subscription.members.count")
    // })

    channelSucribed.listen('.App\\Events\\StreamSendMessage', (e: any) => {
      setMessage((prev: any) => [...prev, e.message])
    })

    //get online users
    return () => {
      channelSucribed.stopListening('.App\\Events\\StreamSendMessage')
    };

  }, [])

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
      <div className="w-full flex justify-around h-full max-h-[720px] px-28	">
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
          <section ref={sectionChat} className="h-[80%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-6 pt-4">
            {
              messages?.length &&
              messages.map((message: any, i: number) => (
                <Message key={i} message={message} />
              ))
            }
          </section>

          <section className="flex h-[5%] justify-center items-center bg-slate-900 px-6 py-4 gap-4 rounded-b-lg">
            <textarea
              className="w-full border-[#1E293B] p-2 focus:border-white border-2 h-[60px] rounded-b-lg"
              placeholder="Enviar un mensaje"
              value={newMessage} onChange={(e) => setNewMessage(e.target.value)} >

            </textarea>
            <button
              className="!bg-transparent"
              onClick={send}>
              Enviar
            </button>
          </section>
        </section>

      </div>
    </>
  )
}
