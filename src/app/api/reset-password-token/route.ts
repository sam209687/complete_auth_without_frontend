"use server";
import dbConnect from "@/lib/dbConnect";
import React from "react";
import bcrypt from 'bcryptjs';
import UserModel from "@/models/User";
import { redirect } from "next/navigation";

export async function updatePassword(
  newPassword : string,
  token : string
){

  console.log(newPassword, token)
  await dbConnect();
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await UserModel.findOneAndUpdate({resetToken : token}, {password : hashedPassword});

  redirect("/sign-in");

}
