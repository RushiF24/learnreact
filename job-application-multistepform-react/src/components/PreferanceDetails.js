import React from "react";
import SelectComponent from "./utilitycomponents/SelectComponent";
import InputComponent from "./utilitycomponents/InputComponent";

const PreferanceDetails = (props) => {
  const locationsOptions = [
    {
      value: "ahmedabad",
      text: "Ahmedabad",
    },
    {
      value: "surat",
      text: "Surat",
    },
    {
      value: "rajkot",
      text: "Rajkot",
    },
  ];
  const departmentOptions = [
    {
      value: "development",
      text: "Development",
    },
    {
      value: "design",
      text: "Design",
    },
    {
      value: "marketing",
      text: "Marketing",
    },
  ];
  return (
    <div>
      <h3>PreferanceDetails</h3>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <SelectComponent
          name="prefferedLocation"
          text="Prefered Location"
          options={locationsOptions}
        />
        <InputComponent
          type="number"
          name="noticeperiode"
          text="Notice Period"
        />
        <SelectComponent
          name="department"
          text="Department"
          options={departmentOptions}
        />
        <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent
          type="number"
          name="expectedctc"
          text="Expected CTC"
        />
        <InputComponent
          type="number"
          name="currentctc"
          text="Current CTC"
        />
        </div>
      </div>
      <button type="button" onClick={props.prev}>Prev</button>
      <button type="submit">Submit</button>
    </div>
  );
};

export default PreferanceDetails;
