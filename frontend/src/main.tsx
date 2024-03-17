import React from 'react'
import ReactDOM from 'react-dom/client'
import Pusher from 'pusher-js';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.ts'
import '@fontsource-variable/outfit';
import App from './App.tsx'


declare global {
  interface Window {
    Pusher: typeof Pusher;
  }
}
window.Pusher = Pusher;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
/*import { RouterProvider } from 'react-router-dom';
import Routes from '@/RouterProvider.tsx'

declare global {
  interface Window {
    Pusher: typeof Pusher;
  }
}
window.Pusher = Pusher;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes()} />
)*/
