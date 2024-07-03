import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";
// import { useFormikContext } from "formik";

const LanguageKnownDetails = (props) => {
  // const { values } = useFormikContext();
  const languages = ["hindi", "english", "gujarati"];
  const abilities = ["read", "write", "speak"];
  return (
    <div>
      <h3>Languages you know</h3>
      {languages.map((lang, index) => (
        <div
          className="row g-3 align-items-center my-2 justify-content-evenly"
          key={index}
        >
          <InputComponent
            type="checkbox"
            name={`languages.${index}.language`}
            text={lang.charAt(0).toUpperCase() + lang.slice(1)}
            value={lang}
          />
          {abilities.map((ability, index2) => {
            return (
              <InputComponent type="checkbox" name={`languages.${index}.abilities`} text={ability} value={ability} key={index2}/>
            );
          })}
        </div>
      ))}
      <button type="button" onClick={props.prev}>
        Prev
      </button>
      <button type="submit">Next</button>
    </div>
  );
};

export default LanguageKnownDetails;
