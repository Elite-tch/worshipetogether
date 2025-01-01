import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Worship Together",
  description:"Worship Together is a platform connecting believers for worship, prayer, and community growth.",
  icons: {
    icon: "th.jpg", 
    apple: "th.jpg", 
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <NavBar/>
        {children}
      </body>
    </html>
  );
}
