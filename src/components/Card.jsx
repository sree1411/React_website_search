import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div>
      <div key={product.id} style={{ alignItems: "center", padding: "10px" }}>
        <img
          src={product.image}
          alt="imagetext"
          style={{ width: "100px", height: "100px", aspectRatio: "3/2" }}
        />
        <div>{product.title}</div>
         <NavLink to={`/productdetail/${product.id}`}  className="btn btn-success">Click Here detail information</NavLink>
      </div>
    </div>
  );
};

export default Card;
