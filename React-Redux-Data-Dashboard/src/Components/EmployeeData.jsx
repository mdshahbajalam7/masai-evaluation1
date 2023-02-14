import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeedata } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const dispatch = useDispatch();
  const { isLoading, isError, employeeData } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getEmployeedata());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Employee Data</h2>
      <div className="employee_data">
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}
        {isLoading ? (
          <h1>data aarha hai...</h1>
        ) : isError ? (
          <h1>Error...</h1>
        ) : (
          employeeData.map((elem) => {
            return (
              <div className="data" key={elem.id}>
                <img className="img" src={elem.image} alt="" />
                <p>{elem.name}</p>
                <p>{elem.gender}</p>
                <p>{elem.department}</p>
                <p>{elem.salary}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
