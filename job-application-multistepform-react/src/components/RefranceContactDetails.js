import React from "react";
import InputComponent from "./utilitycomponents/InputComponent";

const RefranceContactDetails = (props) => {
  return (
    <div>
      <h3>Refrance Contacts</h3>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="refname" text="Name" />
        <InputComponent type="text" name="contactno" text="Contact Number" />
        <InputComponent type="text" name="relation" text="Relation" />
      </div>
      <div className="row g-3 align-items-center my-2 justify-content-evenly">
        <InputComponent type="text" name="refname" text="Name" />
        <InputComponent type="text" name="contactno" text="Contact Number" />
        <InputComponent type="text" name="relation" text="Relation" />
      </div>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default RefranceContactDetails;
