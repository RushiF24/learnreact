import React from "react";
import SelectComponent from "./utilitycomponents/SelectComponent";
import InputComponent from "./utilitycomponents/InputComponent";

const EducationDetails = (props) => {
  const educationOptions = [
    {
      value: "ssc",
      text: "SSC",
    },
    {
      value: "hsc",
      text: "HSC",
    },
    {
      value: "bachelor",
      text: "Bachelor",
    },
  ];
  return (
    <div>
    <h3>Educational Details</h3>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <SelectComponent
          name="course"
          text="Course"
          options={educationOptions}
        />
        <InputComponent type="number" name="passingyear" text="Passing Year" />
        <InputComponent type="number" name="pecentage" text="Pecentage" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <SelectComponent
          name="course"
          text="Course"
          options={educationOptions}
        />
        <InputComponent type="number" name="passingyear" text="Passing Year" />
        <InputComponent type="number" name="pecentage" text="Pecentage" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <SelectComponent
          name="course"
          text="Course"
          options={educationOptions}
        />
        <InputComponent type="number" name="passingyear" text="Passing Year" />
        <InputComponent type="number" name="pecentage" text="Pecentage" />
      </div>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default EducationDetails;
