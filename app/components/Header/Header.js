"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-gray-950 uppercase text-white shadow-md fixed w-[100%] z-10">
        <div className="w-[90%] mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/" className=" flex items-center">
<Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735280970/th_txvnrs.jpg' alt="logo" width={43} height={43} className="rounded-full" />
              <span className="text-2xl font-bold  ml-2">
              praise<b className="text-[#FFD2A4]">portal</b>
              </span>
            </Link>
          </div>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className={` transition duration-300 hover:text-[#FFD2A4]`}
            >
            Home
            </Link> 
            <Link
              href="/about"
              className={` transition duration-300 hover:text-[#FFD2A4]`}
            >
              About us
            </Link>
            <Link
              href="/sermon"
              className={` transition duration-300 hover:text-[#FFD2A4]`}
            >
              sermon
            </Link>
            <Link
              href="/blog"
              className={` transition duration-300 hover:text-[#FFD2A4]`}
            >
              blog
            </Link>
           
          </nav>

          <nav className="hidden  lg:flex items-center justify-center space-x-8">
          <Link
              href="/contact"
              className={` transition duration-300 uppercase`}
            >
              <button className="btn">  Contact us</button>
            </Link>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl lg:hidden focus:outline-none hover:text-gray-300"
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] text-gray-300 bg-gray-950 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl focus:outline-none hover:text-gray-300"
        >
          &times;
        </button>

        {/* Mobile Links */}
        <nav className="mt-16 space-y-4 px-6 uppercase">
        <div className=" font-bold mb-5">
            <Link href="/" className=" flex items-center">
<Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735280970/th_txvnrs.jpg' alt="logo" width={43} height={43} className="rounded-full" />
              <span className="text-lg font-bold  ml-2">
              praise<b className="text-[#FFD2A4]">portal</b>
              </span>
            </Link>
          </div>
         
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-[#FFD2A4]"
          >
            home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block  hover:text-[#FFD2A4]"
          >
            about us
          </Link>
          <Link
            href="/sermon"
            onClick={() => setIsOpen(false)}
            className="block  hover:text-[#FFD2A4]"
          >
            sermon
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#FFD2A4]"
          >
            blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block "
          >
          <button className="btn">  Contact Us</button>
          </Link>
          
        </nav>
      </div>
    </div>
  );
}
