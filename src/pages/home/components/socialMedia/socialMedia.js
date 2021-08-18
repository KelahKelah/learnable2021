import React from "react";
import { Buttons } from "../../../../components/buttons/buttons";
import "../socialMedia/socialMedia.css";

const SocialMedia = () => {
  const socialList = [
    { id: 1, label: "Fill in your Linkedin account link" },
    { id: 2, label: "Fill in your Twitter account link" },
    { id: 3, label: "Fill in your Tinder account link" },
    { id: 4, label: "Fill in your Instagram account link" },
    { id: 5, label: "Fill in your Facebook account link" },
  ];
  return (
    <div className="socialContainer">
      <h2 className="personalDataHeader"> personal data </h2>
      <div class="mb-3">
        {socialList.map((item, id) => {
          return (
            <div className="mediaEntry">
              <label
                for="exampleFormControlInput1"
                class="form-label formLabel"
                key={id}
              >
                {item.label}
              </label>
              <input
                type="text"
                class="form-control inputBackground"
                id="exampleFormControlInput1"
              />{" "}
            </div>
          );
        })}
      </div>
      <div className="dataButtons">
        <Buttons label="Back" buttonClass="left" class="col-6" />
        <Buttons label="Right" buttonClass="right" />
      </div>
    </div>
  );
};
export { SocialMedia };
