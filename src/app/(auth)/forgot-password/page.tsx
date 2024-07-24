"use client";
import { sendForgotPasswordEmail } from '@/app/api/forgot-password/route';
import React, { useState } from 'react'


export default function ResetPasswordUrlPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e : any) =>{
    e.preventDefault();

    await sendForgotPasswordEmail(email );



    
    
  }
  return (
    <div>

      <div className='max-w-md bg-gray-500 rounded-lg p-10 my-52 ml-24'>
        <h1>Reset your password</h1>

        <form onSubmit={handleSubmit} className='mt-10 mb-5'>
        <label className='mt-5'>Provide your email</label>
        <input onChange={(e) => setEmail(e.target.value)} className='block mt-10' placeholder='Email' />
        <button className='px-2 mt-10 py-3 bg-orange-500'>Submit</button>
      </form>

      </div>
     

    </div>
  )
}
