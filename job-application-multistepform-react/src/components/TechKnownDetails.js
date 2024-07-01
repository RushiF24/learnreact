import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";

const TechKnownDetails = (props) => {
  const techs = ["php", "mysql", "laravel"];
  const levels = ["beginer", "mideator", "Expert"];
  return (
    <div>
      <h3>Technologies you know</h3>
      {techs.map((tech) => {
        return (
          <div className="row g-3 align-items-center my-2 justify-content-evenly">
            <InputComponent
              type="checkbox"
              name={tech}
              text={tech.charAt(0).toUpperCase() + tech.slice(1)}
            />
            {levels.map((level) => {
              return (
                <InputComponent type="radio" name={tech} text={level} />
              );
            })}
          </div>
        );
      })}
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default TechKnownDetails;
