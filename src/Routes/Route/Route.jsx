import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:3000/services"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Register></Register>,
  },
]);
export default router;
