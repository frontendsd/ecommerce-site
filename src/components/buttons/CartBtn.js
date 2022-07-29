import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CartBtn() {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/Cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart"></span> Cart ({state.length})
      </NavLink>
    </>
  );
}

export default CartBtn;
