import {
  createBrowserRouter,
} from "react-router-dom";
import App from "@/App";
import Stream from "./routes/stream";


export default () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/stream/:id',
      element: <Stream />
    }
  ])
}