import React from 'react'
import ReactDOM from 'react-dom/client'
import Pusher from 'pusher-js';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from '@/RouterProvider.tsx'

declare global {
  interface Window {
    Pusher: typeof Pusher;
  }
}
window.Pusher = Pusher;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes()} />
)
