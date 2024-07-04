import { Field, useField } from "formik";
import React from "react";

const SelectComponent = (props) => {

  const [field, meta] = useField(props.name);
  // console.log(field, props); 

  // console.log(field, props);
  return (
    <div className="col-auto">
      <label htmlFor={props.name}>{props.text} {props.value}:</label>
      <Field as="select"{...field} {...props}>
      {props.options.map((option, index)=>{
         return <option key={index} value={option.value}>{option.text}</option>
      })}
      </Field>
    </div>
  );
};

export default SelectComponent;