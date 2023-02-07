import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/action";
import "./productpage.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, products } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ width: "100%" }}>
      <div className="product-cards">
        {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
         */}
        {isLoading ? (
          <h1>data aarha hai..</h1>
        ) : isError ? (
          <h1>kuch to error hai...</h1>
        ) : (
          products.map((elem) => {
            return <ProductCard key={elem.id} {...elem} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProductPage;
