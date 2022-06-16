import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({ items }) => {
  const { itemId } = useParams();
  const currentItem = items.filter((item) => {
    return item.name === itemId;
  });
  const { name, description, price } = currentItem[0];
  return (
    <>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">£{parseFloat(price).toFixed(2)}</p>
          <Link to="/menu" className="btn btn-primary bg-custom ">
            Back to Items
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
