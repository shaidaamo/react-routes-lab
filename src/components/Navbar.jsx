import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
      <Link to='/products'>All Products</Link>
      <Link to='/'>Homepage</Link>
      <Link to='/products/new-product'>Create Products</Link>
    </nav>
  )
}

export default Navbar