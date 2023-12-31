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
import ManageServices from "../../Pages/ManageServices/ManageServices";
import ModalUpdate from "../../Pages/ManageServices/ModalUpdate";
import MySchedules from "../../Pages/MySchedules/MySchedules";
import Reviews from "../../Pages/Reviews/Reviews";
import Profile from "../../Pages/Profile/Profile";

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
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-ride-share-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <ModalUpdate></ModalUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-ride-share-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () =>
          fetch("https://assignment-11-ride-share-server.vercel.app/review"),
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
