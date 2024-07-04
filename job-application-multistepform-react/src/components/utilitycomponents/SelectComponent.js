import { ErrorMessage, Field, useField } from "formik";
import React from "react";

const SelectComponent = (props) => {

  const [field] = useField(props.name);
  const errorStyle = { color: 'red', fontSize: '0.875em', marginTop: '0.25em' };
  return (
    <div className="col-auto">
      <label htmlFor={props.name}>{props.text} {props.value}:</label>
      <Field as="select"{...field} {...props}>
      <option value="">Select {props.text}</option>
      {props.options.map((option, index)=>{
         return <option key={index} value={option.value}>{option.text}</option>
      })}
      </Field>
      <ErrorMessage name={props.name} component="div" style={errorStyle}/>
    </div>
  );
};

export default SelectComponent;