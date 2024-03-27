import React, { useState } from "react";
import {} from "../../validationSchema/validator";
import logo from "../../assets/icons/logo.jpg";
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import arrow_prev from "../../assets/icons/arrow_prev.svg";
import warning from "../../assets/icons/warning.svg";

const SetUpAccount = () => {
  const [step1Values, setStep1Values] = useState({});
  interface Values {
    companyName: string;
    businessReg: string;
    estimatedInventoryCapability: string;
    estimatedClienteleBase: string;
    businessEmailAddress: string;
    businessPhoneNumber: string;
    businessDialCode: string;
  }

  interface OtherDetails {
    addressType: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
    x_url: string;
    instagram_url: string;
    facebook_url: string;
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
  //second step of the form

  const handleSubmit = (values: OtherDetails) => {
    let res = {
      ...step1Values,
      ...values,
    };
    console.log(res);
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
              //validationSchema={}
              initialValues={{
                companyName: "",
                businessReg: "",
                estimatedInventoryCapability: "",
                estimatedClienteleBase: "",
                businessEmailAddress: "",
                businessPhoneNumber: "",
                businessDialCode: "",
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
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={values.companyName}
                          onChange={handleChange}
                          className={
                            touched.companyName && errors.companyName
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#98A2B3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.companyName && errors.companyName ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.companyName && errors.companyName}
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Business Registration Number
                        </label>
                        <input
                          type="text"
                          name="businessReg"
                          placeholder="Registration Number"
                          value={values.businessReg}
                          onChange={handleChange}
                          className={
                            touched.businessReg && errors.businessReg
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.businessReg && errors.businessReg ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.businessReg && errors.businessReg}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="block mb-2 text-secondary text-sm font-medium text-left">
                        Business Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="businessEmailAddress"
                          placeholder="Email Address"
                          onChange={handleChange}
                          className={
                            touched.businessEmailAddress &&
                            errors.businessEmailAddress
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.businessEmailAddress &&
                      errors.businessEmailAddress ? (
                        <div className="flex">
                          <img src={warning} className="" alt="warning" />
                          <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                            {touched.businessEmailAddress &&
                              errors.businessEmailAddress}
                          </small>
                        </div>
                      ) : null}
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div className="mt-4 md:mt-0">
                        <div className="">
                          <label className="block mb-2 text-secondary text-sm font-medium text-left ">
                            Dial Code
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="234"
                              minLength={3}
                              placeholder="Dial Code"
                              onChange={handleChange}
                              className={
                                touched.businessDialCode &&
                                errors.businessDialCode
                                  ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                                  : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                              }
                              onBlur={handleBlur}
                            />
                          </div>
                          {touched.businessDialCode &&
                          errors.businessDialCode ? (
                            <div className="flex">
                              <img src={warning} className="" alt="warning" />
                              <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                                {touched.businessDialCode &&
                                  errors.businessDialCode}
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="businessPhoneNumber"
                          placeholder="Phone Number"
                          value={values.businessPhoneNumber}
                          onChange={handleChange}
                          className={
                            touched.businessPhoneNumber &&
                            errors.businessPhoneNumber
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.businessPhoneNumber &&
                        errors.businessPhoneNumber ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.businessPhoneNumber &&
                                errors.businessPhoneNumber}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div className="mt-4 md:mt-0">
                        <div className="">
                          <label className="block mb-2 text-secondary text-sm font-medium text-left ">
                            Estimated Inventory Capacity
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="number"
                              placeholder="Estimated Inventory Capacity in figures"
                              onChange={handleChange}
                              className={
                                touched.estimatedInventoryCapability &&
                                errors.estimatedInventoryCapability
                                  ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                                  : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                              }
                              onBlur={handleBlur}
                            />
                          </div>
                          {touched.estimatedInventoryCapability &&
                          errors.estimatedInventoryCapability ? (
                            <div className="flex">
                              <img src={warning} className="" alt="warning" />
                              <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                                {touched.estimatedInventoryCapability &&
                                  errors.estimatedInventoryCapability}
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Estimated Number of Clients
                        </label>
                        <input
                          type="text"
                          name="estimatedClienteleBase"
                          placeholder="Phone Number"
                          value={values.estimatedClienteleBase}
                          onChange={handleChange}
                          className={
                            touched.estimatedClienteleBase &&
                            errors.estimatedClienteleBase
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.estimatedClienteleBase &&
                        errors.estimatedClienteleBase ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.estimatedClienteleBase &&
                                errors.estimatedClienteleBase}
                            </small>
                          </div>
                        ) : null}
                      </div>
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
                values: OtherDetails,
                { setSubmitting }: FormikHelpers<OtherDetails>
              ) => {
                handleSubmit(values);
              }}
              //validationSchema={}
              initialValues={{
                addressType: "",
                zipCode: "",
                city: "",
                state: "",
                country: "",
                x_url: "",
                instagram_url: "",
                facebook_url: "",
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
                <Form className="mt-8" onSubmit={handleSubmit}>
                  <>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-secondary text-sm font-medium text-left"
                        >
                          Address Type
                        </label>
                        <input
                          type="text"
                          name="addressType"
                          placeholder="addressType"
                          value={values.addressType}
                          onChange={handleChange}
                          className={
                            touched.addressType && errors.addressType
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#98A2B3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.addressType && errors.addressType ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.addressType && errors.addressType}
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="Zip Code"
                          value={values.zipCode}
                          onChange={handleChange}
                          className={
                            touched.zipCode && errors.zipCode
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.zipCode && errors.zipCode ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.zipCode && errors.zipCode}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                      <div className="mt-4 md:mt-0">
                        <div>
                          <label className="block mb-2 text-secondary text-sm font-medium text-left">
                            City
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={values.city}
                            onChange={handleChange}
                            className={
                              touched.city && errors.city
                                ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                                : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.city && errors.city ? (
                            <div className="flex">
                              <img src={warning} className="" alt="warning" />
                              <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                                {touched.city && errors.city}
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          State
                        </label>
                        <input
                          type="text"
                          name="estimatedClienteleBase"
                          placeholder="Phone Number"
                          value={values.state}
                          onChange={handleChange}
                          className={
                            touched.state && errors.state
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.state && errors.state ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.state && errors.state}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-4">
                      <div className="mt-4 md:mt-0">
                        <div>
                          <label className="block mb-2 text-secondary text-sm font-medium text-left">
                            X url
                          </label>
                          <input
                            type="url"
                            name="x url"
                            placeholder="X url"
                            value={values.x_url}
                            onChange={handleChange}
                            className={
                              touched.x_url && errors.x_url
                                ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                                : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.x_url && errors.x_url ? (
                            <div className="flex">
                              <img src={warning} className="" alt="warning" />
                              <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                                {touched.x_url && errors.x_url}
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Instagram Url
                        </label>
                        <input
                          type="text"
                          name="instagram_url"
                          placeholder="Instagram Url"
                          value={values.instagram_url}
                          onChange={handleChange}
                          className={
                            touched.instagram_url && errors.instagram_url
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.instagram_url && errors.instagram_url ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.instagram_url && errors.instagram_url}
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label className="block mb-2 text-secondary text-sm font-medium text-left">
                          Facebook Url
                        </label>
                        <input
                          type="text"
                          name="instagram_url"
                          placeholder="Instagram Url"
                          value={values.facebook_url}
                          onChange={handleChange}
                          className={
                            touched.facebook_url && errors.facebook_url
                              ? "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm  text-[#433443] text-base focus:border-[#d53502] focus:outline-none rounded-lg border border-[#d53502] bg-white py-3 px-4"
                              : "appearance-none w-full placeholder:text-[#a296a3] placeholder:text-sm text-[#433443] text-base focus:border-[#BDB4FE] focus:outline-none focus:shadow-input rounded-lg border border-[#a296a3] bg-white py-3 px-4"
                          }
                          onBlur={handleBlur}
                        />
                        {touched.facebook_url && errors.facebook_url ? (
                          <div className="flex">
                            <img src={warning} className="" alt="warning" />
                            <small className="text-[#d53502] font-medium text-xs pl-[5.65px] pt-[4px]">
                              {touched.facebook_url && errors.facebook_url}
                            </small>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        // disabled={"#dbc7ef"}
                        className="bg-[#9437f1] disabled:bg-[#dbc7ef] rounded-lg w-full py-4 text-white font-medium hover:bg-[#c08ff0] transition-all text-sm"
                      >
                        Register As A Supplier
                      </button>
                    </div>
                  </>
                </Form>
              )}
            </Formik>
          )}

          <div className="text-center mt-3">
            <p className="text-[#433443] text-sm font-semibold">
              Already have an account?{" "}
              <Link
                to="/supplier"
                className="text-[#9F50ED] font-semibold text-sm"
              >
                Log in as a Supplier
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUpAccount;
