import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";
import { logo } from "../../assets/export";
import { useFormik } from "formik";


import { FaArrowLeftLong } from "react-icons/fa6";
import { ForgotSchema } from "../../schema/authentication/authenticationSchema";
import { forgotValues } from "../../init/authentication/authentication";
export default function ForgotPassword() {
  const navigate = useNavigate("");
  const [loading,setloading]=useState(false)
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: forgotValues,
      validationSchema: ForgotSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
      }
    });

  return (
    <div className="mt-10">
      <img
        src={logo}
        alt="orange_logo"
        className="w-[128px] mx-auto  relative z-10"
      />
      <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col  p-6 justify-center   rounded-[19px]">
        <div className="w-auto flex  items-center">
          {/* <NavLink to={"/auth/login"}>
            <FaArrowLeftLong size={24} className="text-white" />
          </NavLink> */}

          <h2 className="text-[24px] font-[500] mx-auto leading-[36px] text-[#181818]">
            Forgot Password
          </h2>
        </div>
       

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="email"
              className="text-[#181818] font-medium text-sm "
            >
              Email 
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-[49px] border-[0.8px] bg-[#F6F6F6] outline-none rounded-[8px] placeholder:text-[#959393] text-[#262626] px-3 text-[16px] font-normal leading-[20.4px] ${
                errors?.email && touched?.email
                  ? "border-red-500"
                  : "border-[#F4F4F4]"
              }`}
              placeholder="Email Address"
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 text-sm font-medium">{errors.email}</p>
            ) : null}
          </div>
          <div className=" w-full h-auto flex justify-end items-end gap-1">
            <button
            type="submit"
            className="w-[98px] h-[49px] rounded-[24px] bg-[#181818] text-white flex gap-2 items-center justify-center text-[16px] font-[400]"
          >
            {loading ? <FiLoader size={20} className="animate-spin" /> : <span>Continue</span>}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
