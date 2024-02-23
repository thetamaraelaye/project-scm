import React, {useState, useEffect} from 'react'
import { registerUserValidator } from '../../validationSchema/validator'
import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import logo from "../../assets/icons/logo.jpg";

const Signup = () => {

    interface Values {
        firstName: string;
        lastName: string;

        email: string;
        password: string;
    }

  return (
    <>
      <h1>Signup</h1>
    </>
  )
}

export default Signup;
