import React from 'react'

const InputComponent = (props) => {
  return (
    <div className="col-auto">
        <label for={props.name}>
            {props.text}:
          </label>
          <input type={props.type} name={props.name} id={props.name} />
    </div>
  )
}

export default InputComponent