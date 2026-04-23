// pages 폴더에 페이지 추가하고
// router에 path 추가해서 연결하면 됩니다
// home은 그냥 예시에유
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;