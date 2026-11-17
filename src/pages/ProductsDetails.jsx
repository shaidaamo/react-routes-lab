import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"

function ProductsDetails() {
    const [ product, setProduct ] = useState(null)

    const { productId } = useParams()

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
      <h1>Product Details</h1>
        {product ? 
        <>
        <p>title : {product.title}</p>
        <p>description: {product.description}</p>
        <p>category: {product.category}</p>
        <p>price: {product.price}</p>
        <p>quantity: {product.quantity}</p>
        </>
         : null}
    </div>
  )
}

export default ProductsDetails
