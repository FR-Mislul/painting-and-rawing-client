import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Registration from "../components/Pages/Registration";
import MyPainting from "../components/Pages/MyPainting";
import PrivetRout from "../provider/PrivetRout";
import AddYourPainting from "../components/Pages/AddYourPainting";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/addYourPainting',
        element: <PrivetRout><AddYourPainting></AddYourPainting></PrivetRout>
      },
      {
        path: '/myPainting',
        element: <PrivetRout><MyPainting></MyPainting></PrivetRout>
      }
    ]
  },
]);

export default Router;