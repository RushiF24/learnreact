import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";

const WorkExpDetails = (props) => {
  return (
    <div>
    <h3>Work Experience</h3>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="companyname" text="Company Name" />
        <InputComponent type="text" name="cdesignation" text="Designation" />
        <InputComponent type="date" name="from" text="From" />
        <InputComponent type="date" name="to" text="To" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="companyname" text="Company Name" />
        <InputComponent type="text" name="cdesignation" text="Designation" />
        <InputComponent type="date" name="from" text="From" />
        <InputComponent type="date" name="to" text="To" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="companyname" text="Company Name" />
        <InputComponent type="text" name="cdesignation" text="Designation" />
        <InputComponent type="date" name="from" text="From" />
        <InputComponent type="date" name="to" text="To" />
      </div>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default WorkExpDetails;
