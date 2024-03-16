import { useEffect, useState, useRef } from "react";
import { socket } from "@/webSockets"
export default function Chat({ id, messages }) {

  const [message, setMessage] = useState([])

  const [newMessage, setNewMessage] = useState('')

  const chatRef = useRef(null)

  useEffect(() => {
    socket().channel(`stream-${id}`).listen('.App\\Events\\StreamSendMessage', (e) => {
      setMessage((prev) => [...prev, e.message])
    })
    return () => {
      socket().channel(`stream-${id}`).stopListening('.App\\Events\\StreamSendMessage');
    };

  }, [])

  useEffect(() => {
    setMessage(messages)
  }, [messages])

  const sendMessage = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/stream/${id}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        message: newMessage
      })
    })

    setNewMessage('')

    chatRef.current?.focus()

  }

  return (
    <aside className="bg-slate-100 min-w-[350px] min-h-[600px] float-right">
      <div className="flex flex-col justify-between h-full px-8 py-4">
        <div className="h-full my-2">
          {
            message.map((m) => (
              <p className="mb-2" key={m.id}>
                <span key={m.id}>
                  {m.user_id ? '👨‍🚀' : '👽'}
                </span>
                {m.message}
              </p>
            ))
          }
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="flex-1">
            <textarea ref={chatRef} className="w-full min-h-[100px] resize-none" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}>

            </textarea>
          </div>
          <div className="shink">
            <button type="button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}