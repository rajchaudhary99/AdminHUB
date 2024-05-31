import Single from "../../components/single/Single"
import { singleProduct } from "../../data"


const Products = () => {
  return (
    <div className="products">
     <Single {...singleProduct}/>
    </div>
  )
}

export default Products
