import { Routes,Route } from "react-router"
import AllProducts from "./pages/AllProducts"
import CreateProduct from "./pages/CreateProduct"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import ProductsDetails from "./pages/ProductsDetails"

function App() {
  
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/new-product" element={<CreateProduct />} />
      <Route path="/products/:productId" element={<ProductsDetails />} />
    </Routes>
    </div>
  )
}

export default App