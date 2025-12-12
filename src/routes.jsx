import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import DefaultProfile from "./DefaultProfile";
import Popeye from "./Popeye";
import Spinach from "./Spinach";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <DefaultProfile />,
      },
      {
        path: "popeye",
        element: <Popeye />,
      },
      {
        path: "spinach",
        element: <Spinach />,
      },
    ],
  },
];

export default routes;
