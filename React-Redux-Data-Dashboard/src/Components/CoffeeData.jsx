import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeedata } from "../Redux/AppReducer/action";
import "./data.css";
export default function CoffeeData() {
  const dispatch = useDispatch();
  const { isLoading, isError, coffeeData } = useSelector((state) => state);
  console.log("coffeeData", coffeeData);
  useEffect(() => {
    dispatch(getCoffeedata());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Coffee Data</h2>
      <div className="coffee_data">
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
        {isLoading ? (
          <h1>data aarha hai...</h1>
        ) : isError ? (
          <h1>Error...</h1>
        ) : (
          coffeeData.map((elem) => {
            return (
              <div className="data" key={elem.id}>
                <img className="img" src={elem.image} alt="" />
                <p>Title:- {elem.title}</p>
                <p>Price:-{elem.price}</p>
                {/* <p>
                  {elem.ingredients.map((e) => (
                    <p>{e}</p>
                  ))}
                </p> */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
