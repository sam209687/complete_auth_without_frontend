import {  z } from "zod";

export const forgotPasswordSchema = z.object ({
    email : z.string(),
    resetToken : z.string(),
    resetTokenExpiry : z.string()
    
})