import { Field } from "formik";
import React from "react";

const SelectComponent = (props) => {
  return (
    <div className="col-auto">
      <label htmlFor={props.name}>{props.text}:</label>
      <Field as="select" name={props.name} id="state">
      {props.options.map((option, index)=>{
         return <option key={index} value={option.value} className="check" >{option.text}</option>
      })}
      </Field>
    </div>
  );
};

export default SelectComponent;
