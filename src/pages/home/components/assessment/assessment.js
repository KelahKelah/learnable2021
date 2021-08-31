import React from "react";
import { Buttons } from "../../../../components/buttons/buttons";
import "../assessment/assessment.css";

const Assessment = () => {
  return (
    <div className="assessmentContainer">
      <h2 className="personalDataHeader"> assessment </h2>
      <div className="questionHeader">
        Would you be available for 6 months between May-October, 2020 ?
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Yes
        </label>
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          No
        </label>
      </div>
      <div className="questionHeader">
        Do you have adequate accomodation in Enugu ?
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Yes
        </label>
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          No
        </label>
      </div>
      <div className="questionHeader">
        By submitting this form I confirm that the information given in this
        form is true, complete and accurate.
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input radioBorder"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          I agree ( submit form )
        </label>
      </div>
      <div className="dataButtons">
        <Buttons label="Back" buttonClass="left" class="col-6" />
        <Buttons label="Right" buttonClass="right" />
      </div>
    </div>
  );
};
export { Assessment };
