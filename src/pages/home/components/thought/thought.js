import React from "react";
import { Buttons } from "../../../../components/buttons/buttons";
import {useHistory} from "react-router-dom";
import "../thought/thought.css";

const Thought = () => {
  const history = useHistory() ;

  const handleNext = () => {
    history.push("#socialMedia")
  }
  const handlePrevious = () => {
    history.push("#education")
  }
  
  return (
    <div className="thoughtsContainer">
      <h2 className="personalDataHeader">thoughts</h2>
      <div class="mb-3">
        <div className="questionHeader">Select a question</div>
        <div class="form-check radioList">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            A truck driver is going down a one way street the wrong way, and
            passes at least ten cops. Why is he not caught ?
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
            Some months have 31 days, others have 30 days. How many have 28
            days?
          </label>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="exampleFormControlTextarea1"
          class="form-label thoughtLabel"
        >
          List three books you have read? ( Eg: Purple Hibiscus by Chimamanda
          Adichie )
        </label>
        <textarea
          class="form-control inputBackground"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <div class="mb-5">
        <label
          for="exampleFormControlTextarea1"
          class="form-label thoughtLabel"
        >
          Summarize one of the books you’ve read
        </label>
        <textarea
          class="form-control inputBackground"
          id="exampleFormControlTextarea1"
          rows="6"
        ></textarea>
      </div>
      <div class="mb-5">
        <label
          for="exampleFormControlTextarea1"
          class="form-label thoughtLabel"
        >
          What is your greatest achievement ?
        </label>
        <textarea
          class="form-control inputBackground"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
      </div>
      <div className="dataButtons">
        <Buttons label="Back" buttonClass="left" class="col-6" onClick={()=>handlePrevious()}   />
        <Buttons label="Right" buttonClass="right" onClick={()=>handleNext()}   />
      </div>
    </div>
  );
};
export { Thought };
