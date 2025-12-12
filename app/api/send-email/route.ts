import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message ,phone } = await request.json();

  // ✅ 1️⃣ إعدادات transporter لإيميل clinifyspatient@gmail.com (للعيادة)
  const clinicTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "clinifyspatient@gmail.com",       // إيميل مرسل للعيادة
      pass: "snkctwfzddcrpwjf",           // App Password من Gmail
    },
  });

  // ✅ 2️⃣ إعدادات transporter لإيميل العيادة (للمستخدم)
  const userTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drmagdyfahmi9@gmail.com",       // إيميل العيادة
      pass: "sydlrcwerfngxkpa",          // App Password من Gmail 
    },
  });

  // إرسال البيانات للعيادة
  const mailToClinic = {
    from: '"Clinify Patient" <clinifyspatient@gmail.com>', // الاسم الظاهر + إيميل فعلي
    to: "drmagdyfahmi9@gmail.com",                        // وصول الرسالة للعيادة
    replyTo: email,                                       // لو حابة تردي للمستخدم مباشرة
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nNumber:${phone}`,
  };

  // إرسال رسالة تأكيد للمستخدم
  const mailToUser = {
    from: '"SupportClinify" <drmagdyfahmi9@gmail.com>',
    to: email,
    subject: "Form Submission Received",
    text: `Hi ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.`,
  };

  try {
    await clinicTransporter.sendMail(mailToClinic);
    await userTransporter.sendMail(mailToUser);
    return new Response(JSON.stringify({ message: "Emails sent!" }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}