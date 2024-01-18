import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="productCard" onClick={showDetail}>
      <div className="imgW">
        <img src={item?.img} alt="" />
      </div>
      <div className="choice">
        {item?.choice == true ? "Conscious choice" : ""}
      </div>
      <div className="title">{item?.title}</div>
      {/* item? --> item이 있으면 true 에러방지 */}
      <div>\ {item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
