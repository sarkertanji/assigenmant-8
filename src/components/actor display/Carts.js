import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./Carts.css";

const Carts = (props) => {
  const icon = <FontAwesomeIcon icon={faList} />;
  //   console.log(props);
  const { name, role, age, country, demand, img } = props.actor;
  //   console.log(hendaleEvent);
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-detail">
        <h3>Name: {name}</h3>
        <h3>Role: {role}</h3>
        <h3>Age: {age}</h3>
        <h3>Country: {country}</h3>
        <h3>Charge: ${demand}</h3>
        <button
          className="regular-btn"
          onClick={() => props.hendaleEvent(props.actor)}
        >
          {icon} Add To List
        </button>
      </div>
    </div>
  );
};

export default Carts;
