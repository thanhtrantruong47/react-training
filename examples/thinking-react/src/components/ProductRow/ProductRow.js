import React from "react";

const ProductRow = ({ name, price, stocked }) => {
  const productName = stocked ? (
    name
  ) : (
    <span style={{ color: "red" }}>{name}</span>
  );

  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
