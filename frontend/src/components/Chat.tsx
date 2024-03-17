import { useEffect, useState, useRef } from "react";
import { socket } from "@/webSockets"
export default function Chat({ id, messages }) {

  const [message, setMessage] = useState([])

  const [username, setUsername] = useState('')

  const [newMessage, setNewMessage] = useState('')

  const [onlineUsers, setOnlineUsers] = useState(0)

  const chatRef = useRef(null)

  useEffect(() => {
    const channelSucribed = socket().join(`stream.${id}`);
    channelSucribed.here(() => {
      setOnlineUsers(channelSucribed.subscription.members.count)
    })

    channelSucribed.listen('.App\\Events\\StreamSendMessage', (e) => {
      setMessage((prev) => [...prev, e.message])
    })

    //get online users
    return () => {
      channelSucribed.stopListening('.App\\Events\\StreamSendMessage')
    };

  }, [])

  useEffect(() => {
    setMessage(messages)
  }, [messages])

  useEffect(() => {
    setUsername('anon' + Math.floor(Math.random() * 1000))
  }, [id])

  const sendMessage = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/stream/${id}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        message: newMessage,
        username: username,
      })
    })

    setNewMessage('')

    chatRef.current?.focus()

  }

  return (
    <aside className="bg-slate-100 min-w-[350px] min-h-[600px] float-right">
      <div className="flex flex-col justify-between h-full px-8 py-4">
        online users: {onlineUsers}
        <div className="h-full my-2">
          {
            message &&
            message.map((m) => (
              <p className="mb-2 flex flex-col" key={m.id}>
                <div>
                  <span key={m.id}>
                    {m.user_id ? '👨‍🚀' : '👽'}
                  </span>
                  <span>{m.username}</span>
                </div>
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