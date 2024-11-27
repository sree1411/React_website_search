import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [id]);

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
