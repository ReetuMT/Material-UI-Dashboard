import { BrowserRouter,Route,Routes } from "react-router-dom"


import Sidenav from "./Component/Sidenav"
import Home from "./Page/Home"
import About from "./Page/About"
import Setting from "./Page/Setting"

function App() {


  return (
    <>
   <BrowserRouter>
   {/* <Sidenav/> */}
    <Routes>
    <Route path="/Material-UI-Dashboard" exact element = {<Home/>} />
    <Route path="/about" exact element={<About/>} />
    <Route path="/setting" eact element={<Setting/>} />
    </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App
