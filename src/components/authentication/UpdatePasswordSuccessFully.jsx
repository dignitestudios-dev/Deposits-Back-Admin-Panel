import React, { useEffect } from "react";
import useApp, { AppContext } from "../../context/AppContext";
import { PasswordChangeImage } from "../../assets/export";




const UpdatePasswordSuccessfully = () => {
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } =
    useApp(AppContext);

  useEffect(() => {
    if (updatePasswordSuccessfully) {
      const timer = setTimeout(() => {
        setUpdatePasswordSuccessfully(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [updatePasswordSuccessfully, setUpdatePasswordSuccessfully]);

  return (
    updatePasswordSuccessfully && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(255,254,254,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-white backdrop-blur-[150px] p-10 rounded-[15px]  shadow-xl">
          <div className="flex items-center flex-col justify-center gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 items-center">
            <h3 className="text-[24px] font-[500] text-[#181818]">Password Changed </h3>
            <p className="text-center text-wrap text-[#565656] text-[14px] font-[400]">
              Your Password have successfully Changed
            </p>
              <img src={PasswordChangeImage} alt="PasswordChangeImage" />
             
            </div>
            
          </div>
        </div>
      </div>
    )
  );
};

export default UpdatePasswordSuccessfully;
