import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('http://localhost:5000/news')
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><News/></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path:'/terms',
        element:<TermsAndConditions/>
      }
    ],
  },
]);
