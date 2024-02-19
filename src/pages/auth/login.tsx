import React, { useEffect, useState } from "react";

import warning from "../../assets/icons/warning.svg";

import { Formik, Form, FormikHelpers } from "formik";
import { loginValidator } from "../../validationSchema/validator";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import logo from "../../assets/icons/logo.jpg";


const LoginPage = () => {
    const navigate = useNavigate();
    //const dispatch = useAppDispatch();

    interface Values {
        email: string;
        password: string;
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    const handleSubmit = (values: Values) => {
        // dispatch(
        //   userLogin({
        //     token: values.email,
        //     password: values.password,
        //   })
        // );
      };

    // useEffect(() => {
    //     if (isAuthenticated) {
    //       if (is_admin) {
    //         navigate("/overview");
    //       } else {
    //         navigate("/product");
    //       }
    //     }
    //   }, [isAuthenticated, navigate, is_admin]);

    return (
        <>
              <div className="px-6 md:px-10 py-8 relative overflow-hidden">
        <div className="hidden md:block absolute -top-20 -right-24 bg-[#DBFFDF] w-[450px] h-[450px] rounded-full blur-[150px]"></div>
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="logo" className="md:w-[129px] md:h-[40px]" />
          </div>
          <div className="z-10"></div>
        </div>

        <div className="md:max-w-lg lg:max-w-md mx-auto md:py-28 py-20">
          {/* ALERT */}
          {/* {
                error && <ErrorAlert errorMsg="Your credentials doesn’t match our records" />
                } */}

          <div>
            <h6 className="text-primary font-semibold text-2xl">
              Welcome Back
            </h6>
            <p className="text-secondary1 font-medium text-sm mt-1">
              Enter your Credentials below to get Started{" "}
            </p>
          </div>
          <Formik
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                handleSubmit(values);
              }}
            validationSchema={loginValidator}
            initialValues={{
              email: "",
              password: "",
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
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-secondary text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={
                      touched.email && errors.email
                        ? "appearance-none w-full placeholder:text-[#96A397] placeholder:text-sm  text-[#344335] text-base focus:border-[#B92043] focus:outline-none rounded-lg border border-[#B92043] bg-white py-3 px-4"
                        : "appearance-none w-full placeholder:text-[#96A397] placeholder:text-sm text-[#344335] text-base focus:border-[#2B8C34] focus:outline-none focus:shadow-input rounded-lg border border-[#96A397] bg-white py-3 px-4"
                    }
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div className="flex">
                      <img src={warning} className="" alt="warning" />
                      <small className="text-[#B92043] font-medium text-xs pl-[5.65px] pt-[4px]">
                        {touched.email && errors.email}
                      </small>
                    </div>
                  ) : null}
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-secondary text-sm font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      // onChange={(event) => setPassword(event.target.value)}
                      name="password"
                      placeholder="Password"
                      className={
                        touched.password && errors.password
                          ? "appearance-none w-full placeholder:text-[#96A397] placeholder:text-sm  text-[#344335]text-base focus:border-[#B92043] focus:outline-none rounded-lg border border-[#B92043] bg-white py-3 px-4"
                          : "appearance-none w-full placeholder:text-[#96A397] placeholder:text-sm text-[#344335] text-base focus:border-[#2B8C34] focus:outline-none focus:shadow-input rounded-lg border border-[#96A397] bg-white py-3 px-4"
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <img
                      onClick={togglePasswordVisiblity}
                      src={passwordShown ? eye : eye_off}
                      alt="eye"
                      className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    />
                  </div>
                  {touched.password && errors.password ? (
                    <div className="flex">
                      <img src={warning} className="" alt="warning" />
                      <small className="text-[#B92043] font-medium text-xs pl-[5.65px] pt-[4px]">
                        {touched.password && errors.password}
                      </small>
                    </div>
                  ) : null}
                </div>
                <div className="mt-2">
                  <Link
                    to="/forgot-password"
                    className="text-secondary font-medium text-xs"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    //disabled={loading}
                    className="bg-primary disabled:bg-[#ABB6AC] rounded-lg w-full py-4 text-white font-medium hover:bg-[#24752B] transition-all text-sm"
                  >
                    Log In
                  </button>
                </div>

                <div className="text-center mt-3">
                  <p className="text-[#344335] text-sm font-semibold">
                    Don’t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-primary font-semibold text-sm"
                    >
                      Sign Up
                    </Link>{" "}
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
        </>
    )





}

export default LoginPage;