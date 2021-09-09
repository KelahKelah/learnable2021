import React from "react";
import { Buttons } from "../../../../components/buttons/buttons";
import {useHistory} from "react-router-dom";
import "../education/education.css";

const Education = () => {
  const history = useHistory() ;

  const handleNext = () => {
    history.push("#thought")
  }
  const handlePrevious = () => {
    history.push("#personalData")
  }
  
  return (
    <div className="education">
      <h2 className="personalDataHeader"> educational background </h2>
      <div className="questionHeader">
        What is your choice of Learning Path?
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Front End Development
        </label>
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Back End Development
        </label>
      </div>
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Product Design
        </label>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label questionLabel">
          Input your previous work link{" "}
          <span className="inputLink">(Gitlink/Behance/Dribble)</span>.
        </label>
        <input
          type="text"
          class="form-control inputBackground"
          id="exampleFormControlInput1"
        />
      </div>
      <div>
        <div className="questionHeader">What is your educational status ?</div>
        <div class="form-check radioList">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Graduate
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
            Undergraduate
          </label>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label questionLabel">
          What is your current institution / institution finished ( if graduate)
          ?.
        </label>
        <input
          type="text"
          class="form-control inputBackground"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="row mb-3">
        <div class="col-4">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            What year did you graduate?
          </label>

          <select
            class="form-select form-control inputBackground"
            aria-label="Default select example"
          >
            <option selected>Year</option>
            <option value="1">2021</option>
          </select>
        </div>
      </div>
      <div className="questionHeader">Have you done NYSC?</div>
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
      <div class="form-check radioList">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Currently
        </label>
      </div>
      <div class="row mb-3">
        <div class="col-4">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            When is your year of POP (if yes)?
          </label>
          <select
            class="form-select form-control inputBackground"
            aria-label="Default select example"
          >
            <option selected>Year</option>
            <option value="1">2021</option>
          </select>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label questionLabel">
          Where are you serving ( if currently ) ?
        </label>
        <input
          type="text"
          class="form-control inputBackground"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="row mb-3">
        <div class="col">
          <label
            for="exampleFormControlInput1"
            class="form-label formLabel questionLabel"
          >
            When will you be done with NYSC ( if currently ) ?
          </label>
          <div class="row mx-auto">
            <select
              class="form-select form-control col mr-3 inputBackground"
              aria-label="Defa ult select example"
            >
              <option selected>Day</option>
              <option value="1">2021</option>
            </select>
            <select
              class="form-select form-control col mr-3 inputBackground"
              aria-label="Default select example"
            >
              <option selected>Month</option>
              <option value="1">2021</option>
            </select>
            <select
              class="form-select form-control col inputBackground"
              aria-label="Default select example"
            >
              <option selected>Year</option>
              <option value="1">2021</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label
            for="exampleFormControlInput1"
            class="form-label formLabel questionLabel"
          >
            When is your probable day of mobilsation ( if no ) ?
          </label>
          <div class="row mx-auto">
            <select
              class="form-select form-control col mr-3 inputBackground"
              aria-label="Defa ult select example"
            >
              <option selected>Day</option>
              <option value="1">2021</option>
            </select>
            <select
              class="form-select form-control col mr-3 inputBackground"
              aria-label="Default select example"
            >
              <option selected>Month</option>
              <option value="1">2021</option>
            </select>
            <select
              class="form-select form-control col inputBackground"
              aria-label="Default select example"
            >
              <option selected>Year</option>
              <option value="1">2021</option>
            </select>
          </div>
        </div>
      </div>
      <div className="dataButtons">
        <Buttons label="Left" buttonClass="left" onClick={()=>handlePrevious()}  />
        <Buttons label="Right" buttonClass="right" onClick={()=>handleNext()}  />
      </div>
    </div>
  );
};
export { Education };
