import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

  const { email, subject, message } = await req.json();

  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}


// TEST ONLY
// export async function GET() {
//   const resend = new Resend(process.env.RESEND_API_KEY)
    
//   try {
//     const {data, error} = await resend.emails.send({
//       from: 'biantao0519@gmail.com',
//       to: 'biantao0519@gmail.com',
//       subject: 'Hello from Next.js',
//       html: '<h1>Hello from Next.js</h1>'
//     })

//     if (error) {
//       return Response.json({error})
//     }

//     return NextResponse.json({data})
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }