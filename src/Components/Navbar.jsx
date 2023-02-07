import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "../Redux/actionTypes";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {cart} = useSelector(state=>state.product)
  useEffect(()=>{
    dispatch({type:ADD_TO_CART,payload:""})
  },[dispatch])
  console.log(cart)
  return (
    <div style={{ display: "flex", padding: "0 10px", position: "relative" }}>
      <div className="navbar-title">
        <Link to="/">Product Dashboard</Link>
      </div>
      <div
        style={{
          position: "absolute",
          right: "30px",
          top: "12px",
          display: "flex",
          gap: "30px",
        }}
      >
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button
          data-cy="add-product-navbar-button"
          className="navbar-add-product-btn"
          onClick={() => navigate("/add")}
        >
          Add Product
        </button>

        <div style={{ position: "relative" }}>
          {/* The count should reflect the number of products, which has some cartQuantity value  */}
          <div data-cy="navbar-cart-count" className="navbar-cart-count">
            {cart.length}
          </div>
          <Link to="/cart">
            <img
              data-cy="cart-image-link"
              src="./shopping-cart.png"
              alt="cart"
              width="30px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
