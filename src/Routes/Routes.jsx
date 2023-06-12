import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Insta from "../Pages/Home/Insta/Insta";
import Classes from "../Pages/Home/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Compo/ErrorPage";
import Dashboard from "../Layout/Dashboard";


import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import InstaClasses from "../Pages/Dashboard/InstaClasses/InstaClasses";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstaHome from "../Pages/Dashboard/InstaHome/InstaHome";
import MainClass from "../Compo/MainClass";
import MainInsta from "../Compo/MainInsta";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Enrol from "../Pages/Dashboard/Enrol.jsx/Enrol";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/insta",
        element: <Insta></Insta>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    
     
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      //extra classes page
      {
        path: "/class",
        element: <MainClass></MainClass>,
      },
      {
        path: "/instruc",
        element: <MainInsta></MainInsta>
      },
    ],
  },


  // dashboard route
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>, 
    children: [

      // User Route

      {
        path: 'userhome', 
        element: <UserHome></UserHome>
      },
      {
        path: 'mycart', 
        element: <MyClasses></MyClasses>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path:'history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'enroll',
        element: <Enrol></Enrol>
      },


      

      //Admin Route
      {
        path: 'adminhome', 
        element: <AdminHome></AdminHome>
      },

      {
        path: 'allusers', 
        element: <AllUsers></AllUsers>
      },
      {
        path: 'manageitems',
        element: <ManageItems></ManageItems>
      },



      // Instructor Route
      {
        path: 'instahome', 
        element: <InstaHome></InstaHome>
      },

      {
        path: 'addItem',
        element: <AddItem></AddItem>
      },
      {
        path: 'instaclass',
        element: <InstaClasses></InstaClasses>
      },
    ]
  }
]);
