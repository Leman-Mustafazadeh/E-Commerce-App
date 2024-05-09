import AdminRouter from "../pages/Admin/AdminRouter";
import Products from "../pages/Admin/Products";
import Categories from "../pages/Admin/Categories";
import AdminUsers from "../pages/Admin/AdminUsers";
import AddCategory from "../pages/Admin/AddCategory";
import AddProducts from "../pages/Admin/AddProducts";
import Dashboard from "../pages/Admin/Dashboard";
import Messages from "../pages/Admin/Messages";
import Orders from "../pages/Admin/Orders";
import UserRouter from "../pages/ClientPage/UserRouter";
import Home from "../pages/ClientPage/Home";
import Basket from "../pages/ClientPage/Basket";
import ContactUs from "../pages/ClientPage/ContactUs";
import Register from "../pages/ClientPage/Register";
import User from "../pages/ClientPage/User";
import UserLogin from "../pages/ClientPage/UserLogin";
import UserProductDetail from "../pages/ClientPage/UserProductDetail";
import UserProducts from "../pages/ClientPage/UserProducts";
import Login from "../pages/Admin/Login";
export const ROUTES = [
  {
    path: "/",
    element: <UserRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "userlogin",
        element: <UserLogin />,
      },
      {
        path: "userproductdetail/:id",
        element: <UserProductDetail />,
      },
      {
        path: "userproducts",
        element: <UserProducts />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRouter />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "addcategory",
        element: <AddCategory />,
      },
      {
        path: "adminusers",
        element: <AdminUsers />,
      },
      {
        path: "addproducts",
        element: <AddProducts />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path:'login',
        element:<Login/>
      }
    ],
  },
];
