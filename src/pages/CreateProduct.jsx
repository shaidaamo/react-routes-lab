import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: '',
    quantity: ''
  });
  const navigate = useNavigate()

  
  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  
  async function handleSubmit(event){
    event.preventDefault() 
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`,formData)

     navigate('/products/' + response.data._id) 
  }

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">title :</label>
        <input 
        type="text" 
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        />

        <label htmlFor="description">description:</label>
        <input 
        type="text" 
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        />

        <label htmlFor="category">category:</label>
        <input 
        type="text" 
        name="category"
        id="category"
        value={formData.category}
        onChange={handleChange}
        />

          <label htmlFor="price">price:</label>
        <input 
        type="number" 
        name="price"
        id="price"
        value={formData.price}
        onChange={handleChange}
        />

          <label htmlFor="quantity">quantity:</label>
        <input 
        type="number" 
        name="quantity"
        id="quantity"
        value={formData.quantity}
        onChange={handleChange}
        />

        <button>Create Product</button>

      </form>
    </div>
  );
}

export default CreateProduct;