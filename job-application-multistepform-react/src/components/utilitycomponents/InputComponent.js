import React from 'react'
import {useField } from 'formik'

const InputComponent = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className="col-auto">
        <label htmlFor={props.name}>
            {props.text}:
          </label>
          <input {...field} {...props} />
          {meta.touched && meta.error ? (
         <div className="error" style={{ fontSize: "15px", color: "red" }}>{meta.error}</div>
       ) : null}
    </div>
  )
}

export default InputComponent