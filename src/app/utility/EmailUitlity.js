import nodemailer from "nodemailer";

export async function SendMail(EmailTo, EmailText, EmailSubject) {
  let Transport = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: "News App <info@teamrabbil.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };
  return await Transport.sendMail(mailOption);
}
