import Home from "./pages/Home";
import SignUp from "./pages/SignUp.jsx";
import styled from "styled-components"
import { RouterProvider } from "react-router-dom"
import router from "./router/router"

const AppContainer = styled.div`
  max-width: 393px;   /* width 대신 max-width */
  width: 100%;        /* 이거 추가 */
  margin: 0 auto;
  min-height: 100vh;  /* 852px 대신 100vh */
  background-color: white;
  overflow: hidden;
  * {
  box-sizing: border-box;
  // margin: 0;
  // padding: 0;
} 
`


function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  )
}

export default App