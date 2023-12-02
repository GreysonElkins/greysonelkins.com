import {
  createBrowserRouter,
} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import App from "components/App"

const routes = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <App />
      </>
    )
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

export default routes
