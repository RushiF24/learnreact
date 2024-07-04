import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";
import { FieldArray, useFormikContext } from "formik";

const RefranceContactDetails = (props) => {
  const { values } = useFormikContext(props.name);
  return (
    <div>
      <h3>Refrance Contacts</h3>
      <FieldArray name="refrances">
        {({ push, pop }) => (
          <>
            {values.refrances.map((ref, index) => (
              <div className="row g-3 align-items-center my-2 justify-content-evenly" key={index}>
                <InputComponent type="text" name={`refrances.${index}.refname`} text="Name" />
                <InputComponent
                  type="tel"
                  name={`refrances.${index}.contactno`}
                  text="Contact Number"
                />
                <InputComponent type="text" name={`refrances.${index}.relation`} text="Relation" />
              </div>
            ))}
          </>
        )}
      </FieldArray>
      <button type="button" onClick={props.prev}>
        Prev
      </button>
      <button type="submit">Next</button>
    </div>
  );
};

export default RefranceContactDetails;
