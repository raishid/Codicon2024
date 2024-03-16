import Echo from 'laravel-echo';

export const socket = () => {
  return new Echo({
    broadcaster: 'pusher',
    wsHost: import.meta.env.VITE_SOCKET_HOST,
    wsPort: import.meta.env.VITE_SOCKET_PORT,
    key: import.meta.env.VITE_SOCKET_APP_KEY,
    cluster: 'mt1',
    forceTLS: false,
    disableStats: true,
  })
}