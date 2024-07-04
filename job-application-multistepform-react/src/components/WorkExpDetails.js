import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";
import { FieldArray, useFormikContext } from "formik";

const WorkExpDetails = (props) => {
  const { values } = useFormikContext(props.name);
  
  // console.log("in work exp value is ", values);
  return (
    <div>
      <h3>Work Experience</h3>
      {/* <div className="d-flex">

    <button className="mx-2">+</button>
    <button className="mx-2">-</button>
    </div> */}
      <FieldArray name="workexperience">
        {({ push, pop }) => (
          <>
          {values.workexperience.map((workexp,index)=>(
            <div className="row g-3 align-items-center my-2 justify-content-evenly" key={index}>
              <InputComponent
                type="text"
                name={`workexperience.${index}.companyname`}
                text="Company Name"
              />
              <InputComponent
                type="text"
                name={`workexperience.${index}.designation`}
                text="Designation"
              />
              <InputComponent type="date" name={`workexperience.${index}.from`} text="From" />
              <InputComponent type="date" name={`workexperience.${index}.to`} text="To" />
            </div>
          ))}
          <div className="d-flex">
              <button
                className="mx-2"
                type="button"
                onClick={() => {
                  console.log("bnbnbnbnbnbnbnbn")
                  push({ companyname:"", designation:"", from:"", to:"" });
                }}
              >
                +
              </button>
              <button
                className="mx-2"
                type="button"
                onClick={() => {
                  pop();
                }}
              >
                -
              </button>
            </div>
          </>
        )}
      </FieldArray>
      {/* <div className="row g-3 align-items-center my-2 justify-content-evenly">
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
      </div> */}
      <button type="button" onClick={props.prev}>Prev</button>
      <button type="submit">Next</button>
    </div>
  );
};

export default WorkExpDetails;
