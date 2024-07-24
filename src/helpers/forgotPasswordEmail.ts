// "use server";
// import { resend } from "@/lib/resend";

// import ForgotPasswordEmail from "../../emails/resetEmail";
// import { ApiResponse } from "@/types/ApiResponse";

// export async function sendForgotPasswordEmail(
//   email: string,
//   resetLink : string,
// ) : Promise<ApiResponse> {
  
//   try {
    
//       // sending email
      
//       await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: email,
//         subject: "Derive Solars || RESET YOUR PASSWORD",
//         react: ForgotPasswordEmail({ resetLink, email }),
//       });

//       return { success: true, message: "Reset-password link send successfully.." };
    
//   } catch (emailError) {
//     console.log("Error sending reset-password email", emailError);
//     return { success: true, message: "Error in sending password reset-link.." };
//   }
// }
