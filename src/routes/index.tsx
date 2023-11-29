import {
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom"
import App from "components/App";

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
        element: <>choose</>
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default routes
