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
        className={`fixed w-full h-16 flex text-lg 2xl:text-xl justify-end p-4 bg-neutral-200 z-[100] border-b-2 border-neutral-300`}
      >
        {/* Desktop nav */}
        <div className="fixed top-4 left-6 md:left-10">
          <Link className="hover:border-b" href="/" >
            Celeste Burr Herrera
          </Link>
        </div>
        <div className="relative flex items-center h-full">
          <div>
            <ul className="hidden lg:flex">
              <Link href="/about">
                <li className=" ml-5 hover:border-b hover:text-blue-300" >
                  About
                </li>
              </Link>
              <Link href="/practice">
                <li className=" ml-5 hover:border-b hover:text-blue-300" >
                  Practice
                </li>
              </Link>
              <Link href="/critical-exchange">
                <li className=" ml-5 hover:border-b hover:text-blue-300" >
                  Critical Exchange
                </li>
              </Link>
              <Link href="/workshops">
                <li className=" ml-5 hover:border-b hover:text-blue-300" >
                  Workshops
                </li>
              </Link>
              <Link href="/contact">
                <li className=" mx-5 hover:border-b hover:text-blue-300" >
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
              <Link className="p-5 hover:border-b hover:text-blue-300" href="/" onClick={handleNav}>
                Celeste Burr Herrera
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
                <li className="py-5 hover:border-b hover:text-blue-300" onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href="/practice">
                <li className="py-5 hover:border-b hover:text-blue-300" onClick={handleNav}>
                  Practice
                </li>
              </Link>
              <Link href="/critical-exchange">
                <li className="py-5 hover:border-b hover:text-blue-300" onClick={handleNav}>
                  Critical Exchange
                </li>
              </Link>
              <Link href="/workshops">
                <li className="py-5 hover:border-b hover:text-blue-300" onClick={handleNav}>
                  Workshops
                </li>
              </Link>
              <Link href="/contact">
                <li className="py-5 hover:border-b hover:text-blue-300" onClick={handleNav}>
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
