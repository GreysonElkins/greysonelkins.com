import {
  createBrowserRouter,
} from "react-router-dom"
import App from "components/App";
import UnderConstruction from "components/UnderConstruction";
import Characters from "components/Characters";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'code',
        element: <UnderConstruction />,
      },
      {
        path: 'music',
        element: <UnderConstruction />,
      },
      {
        path: 'contact',
        element: <UnderConstruction />,
      },
      {
        path: 'choose-your-character',
        element: <Characters />,
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

export default routes
