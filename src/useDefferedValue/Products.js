import React, { useMemo } from "react";

const COUNT = 1000;

const itemStyle = {
 margin: "1rem 0",
 backgroundColor: "lightskyblue",
 borderRadius: "4px",
 boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
 padding: "10px",
};

const Products = ({ searchTerm }) => {
 const items = useMemo(
  () =>
   [...Array(COUNT)].map(
    () =>
     (searchTerm ? searchTerm + " " : "") + Math.trunc(Math.random() * COUNT)
   ),
  [searchTerm]
 );

 return (
  <div>
   {items.map((product, i) => (
    <div key={i} style={itemStyle}>
     {product}
    </div>
   ))}
  </div>
 );
};

export default Products;
