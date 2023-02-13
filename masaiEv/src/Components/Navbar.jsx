import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../Redux/action";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {cart} = useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  console.log(cart)
  return (
    <div className="container">
      <div className="navbar-title">
        <Link to="/">Product Dashboard</Link>
      </div>
      <div
      className="innerdiv"
      >
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button
          data-cy="add-product-navbar-button"
          className="navbar-add-product-btn"
          onClick={() => navigate("/add")}
        >
          Add Product
        </button>

        <div className="div">
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
