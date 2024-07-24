"use client";
import React, { useState } from "react";
import { updatePassword } from "@/app/api/reset-password-token/route";
import { useParams } from "next/navigation";


export default function resetPasswordTokenPage(  ) {

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const params = useParams<{ token : string }>();
  const token = params.token
  
  const handleresetpasswordSubmit = async (e : React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      console.log("Credentials not match");
    } else {
       updatePassword(newPassword, token)
       
      console.log(newPassword, token);
    }
  };

  return (
    <div className="my-28">
      <div>
        <h1 className="text-3xl font-bold text-sky-700 text-center mb-10">
          Reset Your Password
        </h1>
      </div>
      <form onSubmit={handleresetpasswordSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="new-password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            New Password
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirm-new-password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />

          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Confirm-new-password
          </label>
        </div>

        <button
          type="submit"
          className="px-2 py-3 rounded-md bg-orange-500 text-white font-bold"
        >
          Reset-password
        </button>
      </form>
    </div>
  );
}
