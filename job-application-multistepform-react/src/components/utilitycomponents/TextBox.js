import React from 'react'

const TextBox = (props) => {
  return (
    <div className="col-auto">
          <label for={props.name}>{props.text}:</label>
          <textarea name={props.name} id={props.name} cols="24" rows="3"></textarea>
    </div>
  )
}

export default TextBox