"use client";
import { useState } from "react";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav
        className={`fixed w-full h-20 flex  justify-end p-4  z-[100] border-b-2 border-neutral-300`}
      >
        {/* Desktop nav */}
        <div className="h-full fixed top-6 left-10">
          <Link className="hover:border-b" href="/" >
            Celeste Ingrams
          </Link>
        </div>
        <div className="relative flex items-center h-full">
          <div>
            <ul className="hidden lg:flex">
              <Link href="/about">
                <li className=" ml-10 hover:border-b" >
                  About
                </li>
              </Link>
              <Link href="/practice">
                <li className=" ml-10 hover:border-b" >
                  Practice
                </li>
              </Link>
              <Link href="/critical-exchange">
                <li className=" ml-10 hover:border-b" >
                  Critical Exchange
                </li>
              </Link>
              <Link href="/workshops">
                <li className=" ml-10 hover:border-b" >
                  Workshops
                </li>
              </Link>
              <Link href="/contact">
                <li className=" mx-10 hover:border-b" >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Mobile nav */}
        <div>
          <HiOutlineMenuAlt1
            size={25}
                       onClick={handleNav}
            className="lg:hidden "
          />
        </div>
        <div
          className={
            nav
              ? "fixed right-0 top-0 left-0 w-full  tracking-widest h-screen ease-in duration-800 bg-neutral-200 text-neutral-700 z-50"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-800"
          }
        >
          <div className="w-full">
            <div className="relative flex w-full items-center justify-between z-200">
              <Link href="/" onClick={handleNav}>
                Celeste Ingrams
              </Link>
              <div
                onClick={handleNav}
                className="absolute top-2 right-2 rounded-full p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="cyan-700" />
              </div>
            </div>
          </div>
          <div className="p-5 flex-col mt-4 text-center">
            <ul>
              <Link href="/about">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href="/practice">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Practice
                </li>
              </Link>
              <Link href="/critical-exchange">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Critical Exchange
                </li>
              </Link>
              <Link href="/workshops">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Workshops
                </li>
              </Link>
              <Link href="/contact">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
