import React, { useEffect, useState } from "react";
import InputComponent from "./utilitycomponents/InputComponent";
import SelectComponent from "./utilitycomponents/SelectComponent";
import TextBox from "./utilitycomponents/TextBox";

import { useFormikContext } from "formik";
import { City, State } from "country-state-city";

const BasicDetails = (props) => {
  const relationshipOptions = [
    {
      value: "single",
      text: "Single",
    },
    {
      value: "married",
      text: "Married",
    },
  ];

  const stateOptions = State.getStatesOfCountry("IN").map((state) => ({
    value: state.isoCode,
    text: state.name,
  }));

  const { values, setFieldValue } = useFormikContext();
  const [selectedState, setSelectedState] = useState(stateOptions[0].value);

  const cityOptions = City.getCitiesOfState("IN", selectedState).map(
    (city) => ({
      value: city.name,
      text: city.name,
    })
  );
  const [selectedCity, setSelectedCity] = useState(cityOptions[0].value);
  const onStateChnageHandler = (event) => {
    const stateVal = event.target.value;
    setSelectedState(stateVal);
    setFieldValue("state", stateVal);
  };
  const onCityChangeHandler = (event) => {
    // const cityVal = event.target.value;
    // setSelectedState(cityVal);
    // setFieldValue("state", cityVal);
  };
  const onCityStateChnageHandler = (event) => {
    if (event.target.name === "state") {
      console.log("state nu", event.target.value);
      // setSelectedState(
      //   State.getStatesOfCountry("IN").filter(
      //     (state) => state.isoCode === event.target.value
      //   )[0].isoCode
      // );
      setFieldValue("state", event.target.value);
    } else if (event.target.name === "city") {
      console.log("city nu", event.target.value);
      setSelectedCity(event.target.value);
      setFieldValue("city", selectedCity);
    } else {
      setFieldValue(event.target.name, event.target.value);
    }
  };
  const onChnageHandler = (event) => {
    console.log(
      "hiojiuiyuttoy",
      event.target.name,
      event.target.value,
      setFieldValue
    );
    setFieldValue(event.target.name, event.target.value);
  };
  return (
    <div className="mb-3">
      <h3>Basic Details</h3>
      <h1>{selectedState}</h1>
      <h1>{selectedCity}</h1>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="firstname" text="First Name" />
        <InputComponent type="text" name="lastname" text="Last Name" />
      </div>

      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="designation" text="Designation" />
        <InputComponent type="email" name="email" text="Email" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <TextBox name="address" text="Address1" />
        <TextBox name="address2" text="Address2" />
      </div>

      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="tel" name="phoneNumber" text="Phone Number" />
        {/* <label htmlhtmlFor="state">State:</label>
          <select name="state" id="state">
            <option
              value=""
              checked
            >--select state</option>
            <option value="gujarat" className="check" checked>
              Gujarat
            </option>
            <option value="maharashtra" className="check">
              Maharashtra
            </option>
            <option value="rajsthan" className="check">
              Rajsthan
            </option>
          </select> */}
        <SelectComponent
          name="state"
          text="State"
          options={stateOptions}
          value={selectedState}
          onChange={
            onStateChnageHandler
            // (event) =>
            // setSelectedState(
            //   State.getStatesOfCountry("IN").filter(
            //     (state) => state.isoCode === event.target.value
            //   )[0].isoCode
            // )
          }
        />
      </div>

      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        {/* <label htmlFor="city">City:</label>
          <select name="city" id="city">
            <option value="" checked>
              Ahmedabad
            </option>
            <option value="">Vadodara</option>
            <option value="">Rajkot</option>
          </select> */}
        <SelectComponent
          name="city"
          text="City"
          options={cityOptions}
          value={selectedCity}
          onChange={onCityChangeHandler}
        />
        {/* <div className="col-auto">
          <label htmlFor="gender">Gender:</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div> */}
        {/* <InputComponent text="gender"/> */}
        <div className="col-auto">
          <div className="row g-3 align-items-center my-2 justify-content-evenly">
            <label htmlFor="gender">Gender:</label>
            <InputComponent
              type="radio"
              name="gender"
              text="Male"
              value="male"
            />
            <InputComponent
              type="radio"
              name="gender"
              text="Female"
              value="female"
            />
          </div>
        </div>
      </div>

      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        {/* <label htmlFor="relationship">RelationShip Status:</label>
          <select name="relationship" id="relation">
            <option value="" hidden checked></option>
            <option value="single" className="check">
              Single
            </option>
            <option value="married" className="check">
              Married
            </option>
          </select> */}
        <SelectComponent
          name="relationship"
          text="RelationShip Status"
          options={relationshipOptions}
          onChange={onChnageHandler}
        />
        <InputComponent type="number" name="zipcode" text="Zip Code" />
      </div>

      <div className="row g-3 align-items-center my-2 justify-content-evenly ">
        <InputComponent type="date" name="dob" text="dob" />
      </div>
      <button type="submit">Next</button>
    </div>
  );
};

export default BasicDetails;
