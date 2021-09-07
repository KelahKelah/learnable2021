import React from "react";
import "./layout.css";
import learnableImage from "../images/learnableImage.svg"

const Layout = ({ children }) => {
  const date = new Date;
  const year = date.getFullYear().toString()
  const slicedYear = year.slice(-2)

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
        learnable <span>{slicedYear} </span>- application form
      </h1>
      {children}
    </div>
  );
};
export { Layout };
