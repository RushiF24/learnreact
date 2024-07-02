import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";
import SelectComponent from "./utilitycomponents/SelectComponent";
import TextBox from "./utilitycomponents/TextBox";

const BasicDetails = (props) => {
  const stateOptions = [
    {
      value: "gujarat",
      text: "Gujarat",
    },
    {
      value: "maharashtra",
      text: "Maharashtra",
    },
    {
      value: "rajsthan",
      text: "Rajsthan",
    },
  ];
  const cityOptions = [
    {
      value: "ahemedabad",
      text: "Ahemedabad",
    },
    {
      value: "rajkot",
      text: "Rajkot",
    },
    {
      value: "surat",
      text: "Surat",
    },
  ];

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

  return (
    <div className="mb-3">
      <h3>Basic Details</h3>
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
        <SelectComponent name="state" text="State" options={stateOptions} />
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
        <SelectComponent name="city" text="City" options={cityOptions} />
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
