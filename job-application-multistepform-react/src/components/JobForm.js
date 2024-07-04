import React, { useState } from "react";

import BasicDetails from "./BasicDetails";
import EducationDetails from "./EducationDetails";
import WorkExpDetails from "./WorkExpDetails";
import LanguageKnownDetails from "./LanguageKnownDetails";
import TechKnownDetails from "./TechKnownDetails";
import RefranceContactDetails from "./RefranceContactDetails";
import PreferanceDetails from "./PreferanceDetails";

import { validationSchema } from "./validationSchema";

import { Form, Formik } from "formik";

const JobForm = () => {
  const next = () => {
    console.log(step);
    setStep(step + 1);
  };
  const prev = () => {
    console.log(step);
    setStep(step - 1);
  };

  const forms = [BasicDetails, EducationDetails, WorkExpDetails, LanguageKnownDetails, TechKnownDetails, RefranceContactDetails, PreferanceDetails];

  const [step, setStep] = useState(1);
  const CurrentStepComponent = forms[step - 1];
  const currentValidationSchema = validationSchema[step - 1];
  const handleSubmit = (values, actions) => {
    if (step === 7) {
      console.log("final data", values)
      alert(`Dear, Your account has been created successfully`);
    } else {
      console.log("__----------------", values, actions)
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
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
    education: [{ course: "", passingyear: "", percentage: "" }],
    workexperience: [{ companyname: "", designation: "", from: "", to: "" }],
    languages: [{ language: "", abilities: "" }],
    technologies: [{ tech: "", level: "" }],
    refrances: [{ refname: "", contactno: "", relation: "" }],
    prefferedlocation: "",
    noticeperiode: "",
    department: "",
    expectedctc: "",
    currentctc: ""
  };
  return (
    <div>
      <h1>Job Application Form</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={currentValidationSchema}
      >
        {({ values, setFieldValue }) => (

          <Form className="m-5">
            <CurrentStepComponent next={next} prev={prev} values={values} setFieldValue={setFieldValue} />
            {/* {forms[step-1]} */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobForm;
