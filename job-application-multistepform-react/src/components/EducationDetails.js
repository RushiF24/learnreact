import React from "react";
import SelectComponent from "./utilitycomponents/SelectComponent";
import InputComponent from "./utilitycomponents/InputComponent";
import { FieldArray, useFormikContext } from "formik";

const EducationDetails = (props) => {
  const { values } = useFormikContext();
  
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
      <FieldArray name="education">
        {({ push, pop }) => (
          <>
            {values.education.map((edu, index) => (
              <div className="row g-3 align-items-center my-2 justify-content-evenly" key={index}>
                <SelectComponent
                  name={`education.${index}.course`}
                  // name={edu.course}
                  text="Course"
                  options={educationOptions}
                />
                <InputComponent
                  type="number"
                  name={`education.${index}.passingyear`}
                  // name={edu.passingyear}
                  text="Passing Year"
                />
                <InputComponent
                  type="number"
                  name={`education.${index}.percentage`}
                  // name={edu.percentage}
                  text="Percentage"
                />
              </div>
            ))}
            <div className="d-flex">
              <button
                className="mx-2"
                type="button"
                onClick={() => {
                  push({ course: "", passingyear: "", percentage: "" });
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

      <button type="button" onClick={props.prev}>Prev</button>
      <button type="submit">Next</button>
    </div>
  );
};

export default EducationDetails;
