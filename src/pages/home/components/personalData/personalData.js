import React from "react";
import { Buttons } from "../../../../components/buttons/buttons";
import {useHistory} from "react-router-dom";
import "../personalData/personalData.css";

const PersonalData = () => {
  const history = useHistory() ;

  const handleNext =()=> {
    history.push("/#education")
  }

  return (
    <div className="personalData">
      <h2 className="personalDataHeader"> personal data </h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label formLabel">
          Email address
        </label>
        <input
          type="email"
          class="form-control inputBackground"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label formLabel">
          Full Name
        </label>
        <input type="text" class="form-control inputBackground" id="exampleFormControlInput1" />
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            Phone Number
          </label>
          <input type="text" class="form-control inputBackground" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            Sex
          </label>
          <input type="text" class="form-control inputBackground" aria-label="Last name" />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label formLabel">
          Address
        </label>
        <input type="text" class="form-control inputBackground" id="exampleFormControlInput1" />
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            Phone Number
          </label>
          <input type="text" class="form-control inputBackground" aria-label="First name" placeholder="Day" />
        </div>
        <div class="col">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            ..
          </label>
          <input type="text" class="form-control inputBackground" aria-label="Last name" placeholder="Month" />
        </div>
        <div class="col">
          <label for="exampleFormControlInput1" class="form-label formLabel">
            ..
          </label>
          <input type="text" class="form-control inputBackground" aria-label="Last name" placeholder="Year" />
        </div>
      </div>
      <div className="dataButtons">
        <div> </div>
        <Buttons label="Right" buttonClass="right" onClick={()=>handleNext()} />
      </div>
    </div>
  );
};
export { PersonalData };
