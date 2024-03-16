import { useEffect, useState } from "react"


export const useStreams = () => {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.API_URL}/streams`)
      .then(res => res.json())
      .then(data => setStream(data))
  }, [])

  return stream;
}

export function useGetStream(id: string) {
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stream/${id}`, {
      headers: {
        accept: "application/json",
      }
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(err => {
            setError(err)
          })
          throw new Error('No se pudo obtener el stream.');
        }
        return res.json();
      })
      .then(data => {
        setStream(data);
        setLoading(false);
      }).catch(_er => {
        setLoading(false);

      })
  }, [id])

  return {
    stream,
    loading,
    error
  };
}