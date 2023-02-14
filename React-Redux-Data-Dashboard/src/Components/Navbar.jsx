import { Link } from "react-router-dom";
import "./data.css";
function Navbar() {
  return (
    <div className="navbar">
      {/*Provide the three links here */}
      <Link className="link" to="/coffee-data">
        CoffeeData
      </Link>
      <Link className="link" to="/employee-data">
        EmployeeData
      </Link>
      <Link className="link" to="/restaurant-data">
        RestaurantData
      </Link>
    </div>
  );
}

export { Navbar };
