import * as Yup from "yup";

export const validationSchema = [
  Yup.object().shape({
    firstname: Yup.string()
      .required("First Name is required")
      .max(15, "Must be 15 characters or less"),
    lastname: Yup.string()
      .required("Last Name is required")
      .max(15, "Must be 15 characters or less"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    designation: Yup.string()
      .required("Designation is required")
      .max(15, "Must be 15 characters or less"),
    phoneNumber: Yup.number()
      .required("Phone Number is required")
      .min(10, "Phone Number field should be more than 10 characters"),
    zipcode: Yup.string()
      .length(5)
      .matches(/^[0-9]{5}/)
      .required()
      .zipcode('Invalida zip code'),
  }),
];
