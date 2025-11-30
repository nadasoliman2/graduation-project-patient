import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./_componets/navbar";
import Chatbot from "./_componets/chatbot";
import logo from "../public/logo.png"
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
    style: ["italic"], // Regular
});
export const metadata = {
  title: "Clinify",
  description: "My website",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="antialiased min-h-screen">
        <Navbar/>
        {children}
        <Chatbot/>
         {/* سكريبت ElevenLabs */}
   

      </body>
    </html>
  );
}
