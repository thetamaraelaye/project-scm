import * as Yup from "yup";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// export const tokenValidator = Yup.object({
//   token: Yup.string().required("Token is required"),
// });

export const registerUserValidatorStepOne = Yup.object({
    first_name: Yup.string().required("Last Name is required"),
    last_name: Yup.string().required("First Name is required"),
    email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    address: Yup.string(),
    date_of_birth: Yup.date().required("Date of Birth is required"),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('Passwords must match').oneOf([Yup.ref('password')], 'Passwords must match'),
  });

export const registerUserValidatorStepTwo = Yup.object({
  account_name: Yup.string(),
  account_number:  Yup.string()
  .min(10, 'Account number cannot be less than 10 digits')
  .max(10, 'Exceeded characters for Account Number')
  .required("Account Number is required").matches(
    /^-?[0-9]+(.[0-9]{1-7})?$/,
    "Enter a valid Account Number"),
  bank_name: Yup.string(),
  bvn:  Yup.string()
  .min(11, 'BVN number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for BVN Number')
  .required("BVN is required").matches(
    /^-?[0-9]+(.[0-9]{1-7})?$/,
    "Enter a valid BVN Number"),
})

export const registerSupplierValidator = Yup.object({
  phone_number: Yup.string().required("Phone Number is required"),
  last_name: Yup.string().required("First Name is required"),
  first_name: Yup.string().required("Last Name is required"),
  dob: Yup.string().required("Date of Birth is required"),
  landmark: Yup.string(),
  bvn:  Yup.string()
  .min(11, 'BVN number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for BVN Number')
  .required("BVN is required").matches(
    /^-?[0-9]+(.[0-9]{1-7})?$/,
    "Enter a valid BVN Number")
});