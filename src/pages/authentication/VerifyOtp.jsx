import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { logo } from "../../assets/export";
import { FaArrowLeftLong } from "react-icons/fa6";
import CountDown from "../../components/authentication/CountDown";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { SuccessToast } from "../../components/global/Toaster";
import Cookies from "js-cookie";
import { FiLoader } from "react-icons/fi";
export default function VerifyOtp() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputs = useRef([]);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const email=sessionStorage.getItem("email");

  // const handleRestart = () => {
  //   setSeconds(30);
  //   setIsActive(true);
  // };


  const verifyOtp = async () => {
    if (loading) return;

    const otpString = otp.join('');
    if (otpString.length !== 4) {
      ErrorToast('Please enter a 4-digit OTP');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/auth/verify-reset-otp',{
        email: email,
        otp: otpString,
      });

      if (response.data.success) {
        console.log(response?.data.data.token);
        Cookies.set("token", response?.data?.data?.token);
        SuccessToast('OTP verified successfully');
        navigate('/auth/changePassword');
      } else {
        ErrorToast('Invalid OTP. Please try again');
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
    setOtp(Array(4).fill(''));
  };




  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === otp.length) {
      setOtp(pastedData.split(""));
    }
    e.preventDefault();
  };
  const handleRestart = async () => {
    try {
      // Send email for password reset
      const response = await axios.post(
        "/auth/verify-reset-otp",
       
        {
          email:email,
        }
      );
     
      if (response?.status === 200) {
        
        
        SuccessToast(response?.data?.message);
        setSeconds(30);
        setIsActive(true);
       setOtp(Array(4).fill(''));
      }
      // Navigate to OTP verificatio
    } catch (error) {
      ErrorToast(
        error.response?.data?.message || "Failed to send reset email"
      );
    }
   
  };
  return (
    <div className="mt-10">
      <img
        src={logo}
        alt="orange_logo"
        className="w-[128px] mx-auto  relative z-10"
      />
      <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col  p-6 justify-center  rounded-[19px]">
        <div className="w-auto flex  items-center">
          

          <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-[#181818]">
          Enter The code
          </h2>
        </div>
        <p className="font-normal text-[13px] leading-[19px] text-[#959393] mt-3 text-center">
        Enter the 4 digit code send to your email <br />
        </p>

        <form onSubmit={(e)=>{
          e.preventDefault();
          verifyOtp();
         
        }} className="w-full md:w-[393px] mt-5 flex flex-col justify-center items-center gap-4">
          <div className="w-full h-auto flex justify-center items-center gap-2">
            {otp.map((_, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-[80px] h-[50px] rounded-[14px] bg-[#F6F6F6] outline-none text-center border-[1px] border-[#F4F4F4] text-[#262626] text-2xl focus-within:border-[#262626] flex items-center justify-center"
                />
              );
            })}
          </div>
          <div className="w-full  flex justify-end items-end">
          <button
            type="submit"
            className="w-[98px] h-[49px] rounded-[14px] bg-[#181818] text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {loading ? <FiLoader size={20} className="animate-spin" /> : <span>Submit</span>}
          </button>
          </div>
          <div className="w-full h-auto flex justify-center items-center gap-5 pt-4">
          <p className="w-[194px] h-[38px] flex items-center justify-center font-[500] text-[14px] leading-[19px] text-[#959393]  border-[1px] border-[#E3DBDB] rounded-[8px] ">
           
            {isActive ? (
              <CountDown
                isActive={isActive}
                setIsActive={setIsActive}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            ) : (
              <button
                type="button"
                onClick={handleRestart}
                className="outline-none text-[13px] border-none text-[#199BD1] font-[400]"
              >
                Resend Code
              </button>
            )}
          </p>
          <button type="button" className="outline-none w-[194px] h-[38px] text-[14px]  text-[#181818] border-[1px] border-[#E3DBDB] rounded-[8px] font-[400]">Change Email</button>
          </div>          
        </form>
      </div>
    </div>
  );
}
