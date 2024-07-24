"use server";
import dbConnect from "@/lib/dbConnect";
import { resend } from "@/lib/resend";
import UserModel from "@/models/User";
import { nanoid } from "nanoid";
import ForgotPasswordEmail from "../../../../emails/resetEmail";
import { string } from "zod";



export async function sendForgotPasswordEmail(email: string) {
  await dbConnect();

  try {
    const existingUser = await UserModel.findOne({ email });
    console.log(email);

    if (!existingUser) {
      console.log("User not found");
    } else {
      sendForgotPasswordEmail;

      const nanoToken = nanoid(48);
      const resetTokenExpiry = new Date();
      resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1);

      const resetLink = `http://localhost:3000/reset-password-token/${nanoToken}`;


      // save reset password data in db 

      

      // sending email

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Derive Solars || RESET YOUR PASSWORD",
        react: ForgotPasswordEmail({ resetLink, email }),
      });

       // save reset token to db 

       await UserModel.findOneAndUpdate({ email : email}, { resetToken : nanoToken, resetTokenExpiry : resetTokenExpiry})

    }
   
  } catch (emailError) {
    console.log("Error sending reset-password email", emailError);
  }
}



// export async function POST(request: Request) {
//   await dbConnect();

//   try {
//     const { email } = await request.json();

//     const existingUser = await UserModel.findOne({ email: email });

//     if (!existingUser) {
//       console.log("No user found, Please check credentials");
//     } else {
//       const nanoToken = nanoid(48);
//       console.log("Token", nanoToken)
//       const resetLink = `http://localhost:3000/reset-password/${nanoToken}`;

//       // send reset-password email

//       const emailResponse = await sendForgotPasswordEmail(resetLink, email);

//       if (!emailResponse.success) {
//         return Response.json(
//           {
//             success: false,
//             message: emailResponse.message,
//           },
//           { status: 500 }
//         );
//       }

//       return Response.json(
//         {
//           success: true,
//           message: "Reset-email sent successfully",
//         },
//         { status: 201 }
//       );
//     }
//   } catch (emailError) {
//     console.error("Error sending reset-password email...");
//     return Response.json(
//       {
//         success: false,
//         message: "Error sending reset-password email",
//       },
//       { status: 500 }
//     );
//   }
// }