import React from "react";
import { useDispatch } from "react-redux";
import {
  decerimentProduct,
  deleteProducts,
  incrementProduct,
} from "../Redux/action";
import "./productcard.css";

const ProductCard = (item) => {
  const dispatch = useDispatch();
  const deletebutton = (id) => {
    dispatch(deleteProducts(id));
  };
  const handleincrementClick = (itemId, cartQuantity) => {
    let payload = { cartQuantity: item.cartQuantity + 1 };
    dispatch(incrementProduct(itemId, payload));
  };
  const handledecenmentClick = (itemId, cartQuantity) => {
    let payload = { cartQuantity: item.cartQuantity - 1 };
    console.log("payload",payload);
    dispatch(decerimentProduct(itemId, payload));
  };
  const handledivClick = () => {
    // navigator(`/cart`);
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
      <div data-cy="product-card-price">₹ {item.price}</div>
      <div className="flex-div">
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
            onClick={() => handleincrementClick(item.id, item.cartQuantity)}
            data-cy="add-to-cart"
            className="add-to-cart"
          >
            +
          </button>
          <span data-cy="product-quantity">{item.cartQuantity}</span>
          <button
            onClick={()=>handledecenmentClick(item.id, item.cartQuantity)}
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
