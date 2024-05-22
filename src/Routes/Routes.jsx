import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/Layouts/MainLayout";
import Login from "../Pages/Login and register/Login";
import Register from "../Pages/Login and register/Register";
import AddItem from "../Pages/Dashboard/AddItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/addItem",
            element: <AddItem></AddItem>
        },
      ]
    },
  ]);

  export default router