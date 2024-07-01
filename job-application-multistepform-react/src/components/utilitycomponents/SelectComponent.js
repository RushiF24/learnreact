import React from "react";

const SelectComponent = (props) => {
  return (
    <div className="col-auto">
      <label for={props.name}>{props.text}:</label>
      <select name={props.name} id="state">
      {props.options.map((option)=>{
         return <option value={option.value} className="check" >{option.text}</option>
      })}
      </select>
    </div>
  );
};

export default SelectComponent;
