import React from "react";
import "./layout.css";
import learnableImage from "../images/learnableImage.svg"

const Layout = ({ children }) => {
  return (
    <div
      className="layout-wrapper"
      style={{
        backgroundImage: `url(${learnableImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"#071852"
      }}
    >
      <h1>
        learnable <span>20 </span>- application form
      </h1>
      {children}
    </div>
  );
};
export { Layout };
