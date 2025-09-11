import ChangePasword from "../../pages/authentication/ChangePasword";
import ForgotPassword from "../../pages/authentication/ForgotPassword";
import Login from "../../pages/authentication/Login";
import VerifyOtp from "../../pages/authentication/VerifyOtp";

export const authRoutes = [
    {
      url: "login",
      page: Login,
      name: "Login",
      
    },
    {
      url: "forgotpassword",
      page: ForgotPassword,
      name: "Forgot Password",
    
    },
    {
      url: "verifyOtp",
      page: VerifyOtp,
      name: "Verify OTP",
    },
    {
      url: "changePassword",
      page: ChangePasword,
      name: "Change Password",
        
    },
  ];