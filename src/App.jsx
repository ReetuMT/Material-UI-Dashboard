import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Page/Home"
import About from "./Page/About"
import Setting from "./Page/Setting"
import Analytics from "./Page/Analytics"
import AddProduct from "./Products/AddProduct"
import EditProduct from "./Products/EditProduct"

function App() {


  return (
    <>
   <BrowserRouter>
   {/* <Sidenav/> */}
    <Routes>
    <Route path="/Material-UI-Dashboard" exact element = {<Home/>} />
    <Route path="/about" exact element={<About/>} />
    <Route path="/setting" exact element={<Setting/>} />
    <Route path="/analytics" exact element={<Analytics/>} />
    <Route path="/editProduct/:productId" element={<EditProduct />} />
    <Route path="/create" exact element={<AddProduct/>} />
    </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App
