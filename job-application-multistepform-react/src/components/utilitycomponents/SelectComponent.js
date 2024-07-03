import { Field } from "formik";
import React from "react";

const SelectComponent = (props) => {
  return (
    <div className="col-auto">
      <label htmlFor={props.name}>{props.text}:</label>
      <Field as="select" name={props.name} id={props.name} onChange={props.onChnageHandler}>
      {props.options.map((option, index)=>{
         return <option key={index} value={option.value} className="check">{option.value}</option>
      })}
      </Field>
    </div>
  );
};

export default SelectComponent;
