import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../buttons/buttons.css";

export const Buttons = ({ label, onClick, buttonClass, buttonLink }) => {
  return (
    <button
      type="button"
      className="btn btn-primary directionArrow"
      onClick={onClick}
    >
      {buttonClass === "right" ? (
        <Link to={buttonLink}>
          {" "}
           {label} <AiOutlineArrowRight />
        </Link>
      ) : (
        <Link to={buttonLink}>
          {" "}
          <AiOutlineArrowLeft /> {label}
        </Link>
      )}
    </button>
  );
};
