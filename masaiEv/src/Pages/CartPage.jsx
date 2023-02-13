import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/action";
import "./cartpage.css";
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isLoading, isError } = useSelector((state) => state.product);
  console.log("cart", cart);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="cart-heading">Cart Page</div>
      <div className="cart-product-cards">
        {/* filter out the cart items from the product list (products that has some cartQuantity) and show them here, by rendering it in the ProductCard component */}
        {isLoading ? (
          <h1>data is comming in cart</h1>
        ) : isError ? (
          <h1>kuch galat h </h1>
        ) : (
          cart.map((elem,index) => {
            return (
              <>
                <div style={{ border: "1px solid" }} key={index}>
                  <div data-cy="product-card-name">{elem.name}</div>
                  <div data-cy="product-card-category">{elem.category}</div>
                  <div>
                    <img
                      className="img"
                      data-cy="product-card-image"
                      src={elem.image}
                      alt="Product"
                    />
                  </div>
                  <div data-cy="product-card-price">₹ {elem.price}</div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartPage;
