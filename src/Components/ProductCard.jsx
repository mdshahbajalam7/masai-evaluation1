import React from "react";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../Redux/action";
import "./productcard.css";

const ProductCard = (item) => {
  const dispatch = useDispatch();
  const deletebutton = (id) => {
    dispatch(deleteProducts(id));
  };
  const handleincrementClick = () => {};
  const handledecenmentClick = () => {};
  const handledivClick = () => {
    navigator(`/cart`);
  };
  return (
    <div
      data-cy={`product-card-${item.id}`}
      className="maindiv"
      onClick={() => handledivClick(item.id)}
    >
      <div data-cy="product-card-name">{item.name}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img
          className="img"
          data-cy="product-card-image"
          src={item.image}
          alt="Product"
        />
      </div>
      <div data-cy="product-card-price">€ {item.price}</div>
      <div>
        <div>
          {/* Add a onClick handler for delete functionality */}
          <button
            data-cy="delete-button"
            className="danger"
            onClick={() => deletebutton(item.id)}
          >
            <img src="./delete.png" alt="delete" width="20px" />
          </button>
        </div>
        <div>
          <button
            onClick={handleincrementClick}
            data-cy="add-to-cart"
            className="add-to-cart"
          >
            +
          </button>
          <span data-cy="product-quantity">{item.cartQuantity}</span>
          <button
            onClick={handledecenmentClick}
            data-cy="remove-from-cart"
            className="remove-from-cart"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
