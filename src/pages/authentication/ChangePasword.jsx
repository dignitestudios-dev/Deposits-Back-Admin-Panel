import React, { useContext, useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";

import { NavLink, useLocation, useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { logo } from "../../assets/export";
import { ChangedValues } from "../../init/authentication/authentication";
import { ChangedSchema } from "../../schema/authentication/authenticationSchema";
import UpdatePasswordSuccessfully from "../../components/authentication/UpdatePasswordSuccessFully";
import { AppContext } from "../../context/AppContext";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";


const ChangePasword = () => {
  const location = useLocation();
 
  const { resetToken, email } = location.state || {};
 const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const { updatePasswordSuccessfully, setUpdatePasswordSuccessfully } = useContext(AppContext);
  // const { loading, postData } = useLogin();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ChangedValues,
      validationSchema: ChangedSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          setLoading(true)
          const data = {
            email: email,
            resetToken: resetToken,
            password: values.password,
            confirmPassword: values.confirmpassword,
            role:"admin"
          };
      
          const response = await axios.post("/auth/updatePassOTP", data);
      
          if (response?.status === 200) {
            setUpdatePasswordSuccessfully(true); 
      
            
            setTimeout(() => {
              setUpdatePasswordSuccessfully(false);
              navigate("/auth/login");
            }, 3000);
          } else {
            ErrorToast(response?.data?.message || "Failed to update password");
          }
        } catch (error) {
          ErrorToast(error?.response?.data?.message || "Failed to update password");
        } finally {
          setLoading(false)
        } 
      },
    });

  return (
    <div className="w-full h-auto flex flex-col items-center p-6 justify-center md:w-[499px] md:h-[548px]  rounded-[19px] bg-white">
      <img src={logo} alt="orange_logo" className="w-[148.4px]" />
      <div className="w-auto flex flex-col mt-4 justify-center items-center">
        <h2 className="text-[32px] font-bold leading-[48px]">Admin Log In</h2>
       
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
         
        }}
        className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
      >
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <label htmlFor="password" className="text-[14px] font-[500] leading-[20.4px] text-[#181818]">
            Password
          </label>
          <div
            className={`h-[49px] flex justify-start bg-[#F8F8F899] items-start w-full relative border-[0.8px]  border-[#D9D9D9] rounded-[8px] ${
              errors?.password && touched?.password
                ? "border-red-500"
                : "border-[#D9D9D9]"
            }`}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[90%] h-full  bg-transparent rounded-l-[8px] placeholder:text-[#959393] outline-none text-[#262626] px-3 text-[16px] font-normal leading-[20.4px]"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          {errors.password && touched.password ? (
            <p className="text-red-700 text-sm font-medium">
              {errors.password}
            </p>
          ) : null}
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <label htmlFor="password" className="text-[14px] font-[500] leading-[20.4px] text-[#181818]">
            confirmPassword
          </label>
          <div
            className={`h-[49px] flex justify-start bg-[#F8F8F899] items-start w-full relative border-[0.8px]  border-[#D9D9D9] rounded-[8px] ${
              errors?.password && touched?.password
                ? "border-red-500"
                : "border-[#D9D9D9]"
            }`}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[90%] h-full  bg-transparent rounded-l-[8px] placeholder:text-[#959393] outline-none text-[#262626] px-3 text-[16px] font-normal leading-[20.4px]"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          {errors.confirmpassword && touched.confirmpassword ? (
            <p className="text-red-700 text-sm font-medium">
              {errors.confirmpassword}
            </p>
          ) : null}
        </div>
{/* 
        <div className="w-full -mt-1  flex items-center justify-start">
          <NavLink
            to={"/forgot-password"}
            className="text-[#003897] hover:no-underline hover:text-black text-[14px] font-[500] leading-[20.4px]"
          >
            Forgot Password?
          </NavLink>
        </div> */}
<div className="w-full h-auto flex  justify-end items-end ">

        <button
          type="submit"
          className=" px-6 h-[49px] rounded-[24px] bg-[#181818] text-white flex gap-2 items-center justify-center text-[16px] font-[400] " 
          >
          <span>Change Password</span>
          {loading && <FiLoader className="animate-spin text-lg " />}
        </button>
          </div>

       
      </form>
       <UpdatePasswordSuccessfully />
    </div>
  );
};

export default ChangePasword;
