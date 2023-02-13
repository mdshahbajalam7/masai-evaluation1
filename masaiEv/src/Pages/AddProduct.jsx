import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProducts } from "../Redux/action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const naviage = useNavigate();
  const handleadd = () => {
    const payload = {
      name: name,
      image: image,
      category: category,
      price: price,
    };
    console.log(payload);
    dispatch(postProducts(payload));
    naviage("/");
  };
  return (
    <div>
      <h3>Add Product</h3>
      <div className="add-product-wrapper">
        <div className="form-element-div">
          <label className="form-label">Product title</label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            data-cy="add-product-title"
            type="text"
          />
        </div>
        <div className="form-element-div">
          <label className="form-label">Product Category</label>
          <select
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            data-cy="add-product-category"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div className="form-element-div">
          <label className="form-label">Product Image</label>
          <input
            data-cy="add-product-image"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div>
        <div className="form-element-div">
          <label className="form-label">Product Price</label>
          <input
            value={price}
            onChange={(e) => setprice(e.target.value)}
            data-cy="add-product-price"
            type="text"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button data-cy="add-product-button" onClick={handleadd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
