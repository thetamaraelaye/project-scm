import React, { useState } from "react";
import {
  registerUserValidatorStepOne,
  registerUserValidatorStepTwo,
} from "../../validationSchema/validator";
import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import logo from "../../assets/icons/logo.jpg";
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import arrow_prev from "../../assets/icons/arrow_prev.svg";
import warning from "../../assets/icons/warning.svg";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);

  const [step1Values, setStep1Values] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date_of_birth: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  interface Values {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    date_of_birth: string;
    email: string;
    password: string;
    confirm_password: string;
  }

  interface OtherEmployeeDetails {
    account_name: string;
    bank_name: string;
    account_number: string;
    bvn: string;
  }

  const [page, setPage] = useState(1);

  const handleGoBack = () => {
    setPage(1);
  };

  const handleChangePage = (values: Values) => {
    console.log(values);
    setStep1Values(values);
    setPage(2);
    // setText('Sign Up')
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmPasswordVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  //second step of the form

  const handleSubmit = (values: OtherEmployeeDetails) => {
    // dispatch(
    //   userLogin({
    //     token: values.email,
    //     password: values.password,
    //   })
    // );
  };

  return (
    <>
      <div className="px-6 md:px-10 py-8 relative overflow-hidden">
        <div className="hidden md:block absolute -top-20 -right-24 bg-[#efe6f8] w-[450px] h-[450px] rounded-full blur-[150px]"></div>
        <div className="flex justify-between">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:h-[90px] lg:w-[90px]"
            />
          </div>
          <div className="z-10"></div>
        </div>
        <div className="md:max-w-lg lg:max-w-md mx-auto md:py-16 py-20">
          <div className="flex items-center flex-row justify-between">
            {page === 1 ? null : (
              <div>
                <img
                  src={arrow_prev}
                  alt="link to previous page"
                  onClick={() => handleGoBack()}
                />
              </div>
            )}

            <h6 className="text-sm font-semibold">Sign up</h6>
            {page === 1 ? (
              <p className="text-right text-sm">{page}/2</p>
            ) : (
              <p className="">2/2</p>
            )}
          </div>
          <div className="flex gap-[2px]">
            <div className="w-1/2 bg-[#9437f1] rounded-[2px] h-1 mt-[27px]"></div>
            <div
              className={`w-1/2 ${
                page === 1 ? " bg-[#dbc7ef]" : " bg-[#9437f1]"
              } rounded-[2px] h-1 mt-[27px]`}
            ></div>
          </div>

          <div className="mt-7">
            <h6 className="text-[#9F50ED] font-semibold text-xl text-left">
              Create Account
            </h6>
            <p className="text-[#433443] font-medium text-sm mt-1 text-left">
              Enter your Credentials to create your account{" "}
            </p>
          </div>

          {page === 1 && (
            <Formik
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                handleChangePage(values);
              }}
              validationSchema={registerUserValidatorStepOne}
              initialValues={{
                firstName: step1Values ? step1Values.firstName : "",
                lastName: step1Values ? step1Values.lastName : "",
                phoneNumber: step1Values ? step1Values.phoneNumber : "",
                date_of_birth: step1Values ? step1Values.date_of_birth : "",
                email: step1Values ? step1Values.email : "",
                password: step1Values ? step1Values.password : "",
                confirm_password: step1Values
                  ? step1Values.confirm_password
                  : "",
              }}
            >
              {({
                handleChange,
                isSubmitting,
                handleSubmit,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form
                  className="mt-8"
                  onSubmit={() => handleChangePage(values)}
                >
                  <>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-secondary text-sm font-medium text-left"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={values.firstName}
                          onChange={handleChange}
                          className={
                            touched.firstName && errors.firstName
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#98A2B3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.firstName && errors.firstName ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.firstName && errors.firstName}
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          value={values.lastName}
                          onChange={handleChange}
                          className={
                            touched.lastName && errors.lastName
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.lastName && errors.lastName ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.lastName && errors.lastName}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="block mb-2 text-secondary text-sm font-medium text-left">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          className={
                            touched.email && errors.email
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.email && errors.email ? (
                        <div className="flex">
                          <img src={warning} className="" alt="warning" />
                          <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                            {touched.email && errors.email}
                          </small>
                        </div>
                      ) : null}
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          className={
                            touched.phoneNumber && errors.phoneNumber
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.phoneNumber && errors.phoneNumber ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.phoneNumber && errors.phoneNumber}
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date_of_birth"
                            placeholder="YYYY-MM-DD"
                            value={values.date_of_birth}
                            onChange={handleChange}
                            className={
                              touched.date_of_birth && errors.date_of_birth
                                ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                                : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                            }
                            onBlur={handleBlur}
                          />
                        </div>
                        {touched.date_of_birth && errors.date_of_birth ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.date_of_birth && errors.date_of_birth}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="block mb-2 text-secondary text-sm font-medium text-left">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          className={
                            touched.password && errors.password
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        <img
                          onClick={togglePasswordVisiblity}
                          src={passwordShown ? eye : eye_off}
                          alt="eye"
                          className="absolute top-1/2 transfrom -translate-y-1/2 right-4 cursor-pointer"
                        />
                      </div>
                      {touched.password && errors.password ? (
                        <div className="flex">
                          <img src={warning} className="" alt="warning" />
                          <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                            {touched.password && errors.password}
                          </small>
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-5">
                      <label className="block mb-2 text-secondary text-sm font-medium text-left">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={passwordConfirmShown ? "text" : "password"}
                          name="confirm_password"
                          placeholder="Password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          className={
                            touched.confirm_password && errors.confirm_password
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        <img
                          onClick={toggleConfirmPasswordVisiblity}
                          src={passwordConfirmShown ? eye : eye_off}
                          alt="eye"
                          className="absolute top-1/2 transfrom -translate-y-1/2 right-4 cursor-pointer"
                        />
                      </div>
                      {touched.confirm_password && errors.confirm_password ? (
                        <div className="flex">
                          <img src={warning} className="" alt="warning" />
                          <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                            {touched.confirm_password &&
                              errors.confirm_password}
                          </small>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        // disabled={"#dbc7ef"}
                        className="bg-[#9437f1] disabled:bg-[#dbc7ef] rounded-lg w-full py-4 text-white font-medium hover:bg-[#c08ff0] transition-all text-sm"
                      >
                        Continue
                      </button>
                    </div>
                  </>
                </Form>
              )}
            </Formik>
          )}

          {page === 2 && (
            <Formik
              onSubmit={(
                values: OtherEmployeeDetails,
                { setSubmitting }: FormikHelpers<OtherEmployeeDetails>
              ) => {
                handleSubmit(values);
              }}
              validationSchema={registerUserValidatorStepTwo}
              initialValues={{
                account_name: "",
                bank_name: "",
                account_number: "",
                bvn: "",
              }}
            >
              {({
                handleChange,
                isSubmitting,
                handleSubmit,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <label className="block mb-2 text-secondary text-sm font-medium text-left">
                      BVN
                    </label>
                    <input
                      type="text"
                      name="bvn"
                      placeholder="BVN"
                      value={values.bvn}
                      onChange={handleChange}
                      className={
                        touched.bvn && errors.bvn
                          ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443]text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                          : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                      }
                      onBlur={handleBlur}
                    />
                    {touched.bvn && errors.bvn ? (
                      <div className="flex">
                        <img src={warning} className="" alt="warning" />
                        <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                          {touched.bvn && errors.bvn}
                        </small>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-5">
                    <label className="block mb-2 text-secondary text-sm font-medium text-left">
                      Bank
                    </label>
                    <input
                      type="text"
                      name="bank"
                      placeholder="Full Name of Bank"
                      value={values.bank_name}
                      onChange={handleChange}
                      className={
                        touched.bank_name && errors.bank_name
                          ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443]text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                          : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                      }
                      onBlur={handleBlur}
                    />
                    {touched.bank_name && errors.bank_name ? (
                      <div className="flex">
                        <img src={warning} className="" alt="warning" />
                        <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                          {touched.bank_name && errors.bank_name}
                        </small>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <label className="block mb-2 text-secondary text-sm font-medium text-left">
                      Account Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="account_number"
                        placeholder="Account Number"
                        value={values.account_number}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className={
                          touched.account_number && errors.account_number
                            ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443]text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                            : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                        }
                        onBlur={handleBlur}
                      />
                    </div>
                    {/* <div className='absolute top-1/2 transfrom -translate-y-1/2 right-4 cursor-pointer nimate-spin'>
                  <AutorenewIcon style={{width: 20, height: 20, color: "#BDB4FE"}} />
                  </div> */}
                    {touched.account_number && errors.account_number ? (
                      <div className="flex">
                        <img src={warning} className="" alt="warning" />
                        <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                          {touched.account_number && errors.account_number}
                        </small>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <label className="block mb-2 text-secondary text-sm font-medium text-left">
                      Account Name
                    </label>
                    <input
                      type="text"
                      name="account_name"
                      placeholder="Account Name"
                      className="appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      //disabled={loading} //hover color is #24752B
                      className="bg-[#9437f1] disabled:bg-[#dbc7ef] rounded-lg w-full py-4 text-white font-medium hover:bg-[#c08ff0] transition-all text-sm"
                    >
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          <div className="text-center mt-3">
            <p className="text-[#433443] text-sm font-semibold">
              Already have an account?{" "}
              <Link to="/" className="text-[#9F50ED] font-semibold text-sm">
                Log in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
