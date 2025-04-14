import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Registration from "../components/Pages/Registration";
import MyPainting from "../components/Pages/MyPainting";
import PrivetRout from "../provider/PrivetRout";
import AddYourPainting from "../components/Pages/AddYourPainting";
import PaintingGallery from "../components/Pages/PaintingGallery";
import MyPaintingAndComment from "../components/Pages/MyPaintingAndComment";
import MyComments from "../components/Pages/MyComments";
import UpdatePainting from "../components/Pages/UpdatePainting";
import UpdateComment from "../components/Pages/UpdateComment";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://painting-and-rawing-server.vercel.app/paintings'),
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
        path: '/paintingGallery',
        element: <PaintingGallery></PaintingGallery>,
        loader: () => fetch('https://painting-and-rawing-server.vercel.app/paintings'),
      },
      {
        path: '/myPaintingAndComment',
        element: <PrivetRout><MyPaintingAndComment></MyPaintingAndComment></PrivetRout>,
        children: [
          {
            index: true,
            element: <MyPainting></MyPainting>,
            loader : () => fetch('https://painting-and-rawing-server.vercel.app/paintings')
          },
          {
            path: 'comment',
            element: <MyComments></MyComments>,
            loader: () => fetch('https://painting-and-rawing-server.vercel.app/comments')
          }
        ]
      },
      {
        path: '/updatePainting/:id',
        element: <UpdatePainting></UpdatePainting>,
        loader: ({params}) => fetch(`https://painting-and-rawing-server.vercel.app/paintings/${params.id}`)
      },
      {
        path: '/updateComment/:id',
        element: <UpdateComment></UpdateComment>,
        loader: ({params}) => fetch(`https://painting-and-rawing-server.vercel.app/comments/${params.id}`)
      }
    ]
  },
]);

export default Router;