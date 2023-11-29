import {
  createBrowserRouter,
} from "react-router-dom"
import App from "components/App";
import Characters from "components/Characters";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "code",
        element: <>code</>
      },
      {
        path: "music",
        element: <>music</>
      },
      {
        path: "contact",
        element: <>contact</>
      },
      {
        path: "choose-your-character",
        element: <Characters/>
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default routes
