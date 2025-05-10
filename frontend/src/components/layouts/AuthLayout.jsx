import React from "react";
import UIimage from "../../assets/images/taskManager.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Label Board Manager</h2>
        {children}
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-[url('/src/assets/images/blue.jpg')]   bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        <img src={UIimage} alt="" className="w-64 lg:w-[90%]" />
      </div>
    </div>
  );
};

export default AuthLayout;
