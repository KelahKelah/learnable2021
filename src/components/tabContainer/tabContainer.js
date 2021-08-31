import React from "react";
import { NavLink } from "react-router-dom";
import "../tabContainer/tabContainer.css";

const TabContainer = ({ children }) => {
  const tabHeader = [
    {
      id: 1,
      header: "Personal Data",
      text: "Tell us about yourself",
      link: "#personalData",
    },
    {
      id: 2,
      header: "Education",
      text: "Tell us about your field of study",
      link: "#education",
    },
    {
      id: 3,
      header: "Thoughts",
      text: "Tell us about yourself",
      link: "#thought",
    },
    {
      id: 4,
      header: "Social Media",
      text: "Let's connect",
      link: "#socialMedia",
    },
    {
      id: 5,
      header: "Assessment",
      text: "Final confirmation",
      link: "#assessment",
    },
  ];
  return (
    <div className="tabContainer">
      <ul class="nav nav-tabs nav-fill">
        {tabHeader.map((item, id) => {
          return (
            <NavLink to={item.link} class="nav-item" key={id}>
              <li>
                <a class="navLink" aria-current="page" href="#">
                  {item.header}
                </a>
                <p>{item.text}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
      {children}
    </div>
  );
};
export { TabContainer };
