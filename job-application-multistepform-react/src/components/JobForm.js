import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import EducationDetails from "./EducationDetails";
import WorkExpDetails from "./WorkExpDetails";
import LanguageKnownDetails from "./LanguageKnownDetails";
import TechKnownDetails from "./TechKnownDetails";
import RefranceContactDetails from "./RefranceContactDetails";
import PreferanceDetails from "./PreferanceDetails";

import { validationSchema } from "./validationSchema";

import { Formik } from "formik";

const JobForm = () => {
  const next = () => {
    console.log(step);
    setStep(step + 1);
  };
  const prev = () => {
    console.log(step);
    setStep(step - 1);
  };
  const forms = [
    <BasicDetails next={next} prev={prev} />,
    <EducationDetails next={next} prev={prev} />,
    <WorkExpDetails next={next} prev={prev} />,
    <LanguageKnownDetails next={next} prev={prev} />,
    <TechKnownDetails next={next} prev={prev} />,
    <RefranceContactDetails next={next} prev={prev} />,
    <PreferanceDetails next={next} prev={prev} />,
  ];

  const [step, setStep] = useState(1);
  const currentValidationSchema = validationSchema[step];
  const isLastStep = step === forms.length - 1;

  // switch(step){
  //     case 1:
  //         return <BasicDetails next={next}/>
  //     case 2:
  //         return <EducationDetails next={next}/>
  //     case 3:
  //         return <WorkExpDetails next={next}/>
  //     case 4:
  //         return <LanguageKnownDetails next={next}/>
  //     case 5:
  //         return <TechKnownDetails next={next}/>
  //     case 6:
  //         return <RefranceContactDetails next={next}/>
  //     case 7:
  //         return <PreferanceDetails next={next}/>
  //     default:
  //         return <div>Multistep form</div>
  // }
  const handleSubmit = () => {
    if (isLastStep) {
      alert(`Dear, Your account has been created successfully`);
    } else {
    }
  };
  const initialValue = {
    firstname: "",
    lastname: "",
    designation: "",
    email: "",
    address: "",
    address2: "",
    phoneNumber: "",
    state: "",
    city: "",
    relationship: "",
    zipcode: "",
    dob: "",
    // course: "",
    // passingyear: "",
    // pecentage: ""
  };
  return (
    <div>
      <h1>Job Application Form</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={currentValidationSchema}
      />
      <form action="/" method="post" className="m-5">
        {step <= 7 && forms[step - 1]}
      </form>
    </div>
  );
};

export default JobForm;
