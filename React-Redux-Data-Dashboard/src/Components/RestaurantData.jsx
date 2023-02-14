import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantdata } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  const { isLoading, isError, restaurantData } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getRestaurantdata());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{textAlign:"center"}}> Restaurant Data </h2>
      <div className="restaurant_data">
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {isLoading ? (
          <h1>data aarha hai...</h1>
        ) : isError ? (
          <h1>Error...</h1>
        ) : (
          restaurantData.map((elem) => {
            return (
              <div className="data" key={elem.id}>
                <img className="img" src={elem.image} alt="" />
                <p>{elem.title}</p>
                <p>{elem.price}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
