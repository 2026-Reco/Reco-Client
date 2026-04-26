// pages 폴더에 페이지 추가하고
// router에 path 추가해서 연결하면 됩니다
// home은 그냥 예시에유
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp.jsx";
import Login from "../pages/Login.jsx";
import InputLogin from "../components/InputLogin.jsx";
import SnsLogin from "../components/SnsLogin.jsx";

import Search from "../pages/Search"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/signup",
    element: <SignUp/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  { path: "/search", element: <Search /> }
]);

export default router;