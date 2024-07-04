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
      .max(25, "Must be 25 characters or less"),
    state: Yup.string()
      .required("state is required"),
    city: Yup.string()
      .required("city is required"),
    relationship: Yup.string()
      .required("relationship is required"),
    // phoneNumber: Yup.number()
    //   .required("Phone Number is required")
    //   .min(10, "Phone Number field should be more than 10 characters"),
    // .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    zipcode: Yup.string()
      .length(5)
      .matches(/^[0-9]{5}/)
      .required()
      .label("Invalida zip code"),
    address: Yup.string().required(),
  }),
  Yup.object().shape({
    education: Yup.array().of(
      Yup.object().shape({
        course: Yup.string().max(10, "Must be 10 characters or less"),
        passingyear: Yup.number()
          .min(1975, "Invalid Year!!")
          .max(new Date().getFullYear(), "Invalid year!!"),
        percentage: Yup.number()
          .min(1, "Invalid Percentage!!")
          .max(100, "Invalid Percentage!!"),
      })
    ),
  }),
  Yup.object().shape({
    workexperience: Yup.array().of(
      Yup.object().shape({
        companyname: Yup.string().max(20, "Must be 20 characters or less"),
        designation: Yup.string().max(20, "Must be 20 characters or less"),
        from: Yup.string(),
        to: Yup.string().test({
          message: "End date should be after start date",
          test: function (value) {
            // You can access the price field with `this.parent`.
            return value > this.parent.from;
          },
        }),
      })
    ),
  }),
  Yup.object().shape({
    languages: Yup.array().of(
      Yup.object().shape({
        language: Yup.array().of(Yup.string()),
        abilities: Yup.array().of(
          Yup.string()
        ),
      })
    ),
  }),
  Yup.object().shape({
    technologies: Yup.array().of(
      Yup.object().shape({
        tech: Yup.array(),
        level: Yup.string(),
      })
    ),
  }),
  Yup.object().shape({
    refrances: Yup.array().of(
      Yup.object().shape({
        refname: Yup.string(),
        contactno: Yup.number()
          .required("Phone Number is required")
          .min(10, "Phone Number field should be more than 10 characters"),
        relation: Yup.string().max(20, "Must be 10 characters or less"),
      })
    ),
  }),
  Yup.object().shape({
    prefferedlocation: Yup.string(),
    noticeperiode: Yup.number()
      .required("Last Name is required")
      .min(1, "Must be upto 12 number or less")
      .max(12, "Must be upto 12 number or less"),
    department: Yup.string(),
    expectedctc: Yup.number(),
    currentctc: Yup.number(),
  })
  // .required("Last Name is required")
  // .max(4, "Must be 4 characters or less"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  // designation: Yup.string()
  //   .required("Designation is required")
  //   .max(25, "Must be 25 characters or less"),
  // phoneNumber: Yup.number()
  //   .required("Phone Number is required")
  //   .min(10, "Phone Number field should be more than 10 characters"),
  //   // .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
  // zipcode: Yup.string()
  //   .length(5)
  //   .matches(/^[0-9]{5}/)
  //   .required()
  //   .label('Invalida zip code'),
  // address: Yup.string()
  // .required()
];
