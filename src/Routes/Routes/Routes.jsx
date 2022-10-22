import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

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
        element: <News/>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      
      }
    ],
  },
]);
