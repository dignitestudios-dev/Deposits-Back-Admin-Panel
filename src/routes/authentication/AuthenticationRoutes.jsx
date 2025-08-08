import ChangePasword from "../../pages/authentication/ChangePasword";
import ForgotPassword from "../../pages/authentication/ForgotPassword";
import Login from "../../pages/authentication/Login";
import VerifyOtp from "../../pages/authentication/VerifyOtp";

export const authRoutes = [
    {
      url: "login",
      page: Login,
      name: "Login",
      isPublic: true,
    },
    {
      url: "forgotpassword",
      page: ForgotPassword,
      name: "Forgot Password",
      isPublic: true,
    },
    {
      url: "verifyOtp",
      page: VerifyOtp,
      name: "Verify OTP",
      isPublic: true,
    },
    {
      url: "changePassword",
      page: ChangePasword,
      name: "Change Password",
      isPublic: true,
    },
  ];