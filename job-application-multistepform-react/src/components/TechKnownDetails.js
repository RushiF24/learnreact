import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";

const TechKnownDetails = (props) => {
  const techs = ["php", "mysql", "laravel"];
  const levels = ["beginer", "mideator", "Expert"];
  return (
    <div>
      <h3>Technologies you know</h3>
      {techs.map((tech, index) => {
        return (
          <div
            className="row g-3 align-items-center my-2 justify-content-evenly"
            key={index}
          >
            <InputComponent
              type="checkbox"
              name={`technologies.${index}.tech`}
              text={tech.charAt(0).toUpperCase() + tech.slice(1)}
              value={tech}
            />
            {levels.map((level, index2) => {
              return <InputComponent type="radio" name={`technologies.${index}.level`} text={level} value={level} key={index2}/>;
            })}
          </div>
        );
      })}
      <button type="button" onClick={props.prev}>
        Prev
      </button>
      <button type="submit">Next</button>
    </div>
  );
};

export default TechKnownDetails;
