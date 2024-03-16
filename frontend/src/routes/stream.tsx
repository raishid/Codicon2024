import { useParams } from 'react-router-dom'
import { useGetStream } from '@/hooks/useStream'
import Chat from '@/components/Chat'

export default function Stream() {
  const { id } = useParams()

  const { stream, loading, error } = useGetStream(id)

  return (
    <>
      <section className=''>

        {loading === false ? <Chat id={id} messages={stream?.messages.reverse()} /> : ''}
      </section>
    </>
  )
}