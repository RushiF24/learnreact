import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";

const LanguageKnownDetails = (props) => {
  const languages = ["hindi", "english", "gujarati"];
  const abilities = ["read", "write", "speak"];
  return (
    <div>
      <h3>Languages you know</h3>
      {languages.map((lang) => {
        return (
          <div className="row g-3 align-items-center my-2 justify-content-evenly">
            <InputComponent
              type="checkbox"
              name={lang}
              text={lang.charAt(0).toUpperCase()+lang.slice(1)}
            />
            {abilities.map((ability) => {
              return (
                <InputComponent
                  type="checkbox"
                  name={ability}
                  text={ability}
                />
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

export default LanguageKnownDetails;
