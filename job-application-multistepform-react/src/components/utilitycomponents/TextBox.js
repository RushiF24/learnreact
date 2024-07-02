import React from 'react'
import {Field, useField } from 'formik'

const TextBox = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="col-auto">
          <label htmlFor={props.name}>{props.text}:</label>
          <Field as="textarea" {...field} {...props} cols="24" rows="3"></Field>
          {meta.touched && meta.error ? (
         <div className="error" style={{ fontSize: "15px", color: "red" }}>{meta.error}</div>
       ) : null}
    </div>
  )
}

export default TextBox