import { Route,Routes } from "react-router-dom"
import Cards from "./Components/Cards"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import Test from "./pages/Test"



const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}>
     Home
     </Route>
     <Route path="/allproducts" element={<AllProducts/>}>
     AllProducts
     </Route>
     <Route path="/viewall" element={<AllProducts/>}>
     viewall
     </Route>
    </Routes>

  
    
    </div>
  )
}

export default App