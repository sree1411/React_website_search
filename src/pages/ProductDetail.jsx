import { NavLink, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  let { id } = useParams();
  const apiPath = `products/${id}`;
  const { data: products } = useFetch(apiPath);

  return <div>ProductDetailed Information
  <div key={products.id} style={{ alignItems: "center", padding: "10px" }}>
        <img
          src={products.image}
          alt="imagetext"
          style={{ width: "100px", height: "100px", aspectRatio: "3/2" }}
        />
        <div>{products.title}</div>
        <div>{products.price}</div>
        <div>{products.description}</div>
        <div>{products.category}</div>
        <div>{products.rating?.rate ?? "no rating"}</div>
        <div>{products.rating?.count?? "no rating"}</div>
      

         <NavLink to="/"  className="btn btn-success">
         back to Home</NavLink>
      </div>
  
  
  </div>;
};

export default ProductDetail;
