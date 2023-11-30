import {
  createBrowserRouter,
} from "react-router-dom"
import App from "components/App"

const routes = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    // children: [
    //   {
    //     path: 'code',
    //     element: <Code />,
    //   },
    //   {
    //     path: 'music',
    //     element: <UnderConstruction />,
    //   },
    //   {
    //     path: 'contact',
    //     element: <UnderConstruction />,
    //   }
    // ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

export default routes
