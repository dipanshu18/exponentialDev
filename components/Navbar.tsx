"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the scroll threshold based on your design
      setIsSticky(offset > 100);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="home"
      className={`absolute top-0 navbar ${
        isSticky ? "sticky z-10 bg-base-300" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-300 shadow rounded-box w-52"
          >
            <li className="font-semibold">
              <a href="#what-we-do">What we do?</a>
            </li>
            <li className="font-semibold">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-semibold">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="font-semibold">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-md md:text-xl">
          Exponential Dev
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link href="#what-we-do">What we do?</Link>
          </li>
          <li className="font-semibold">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="font-semibold">
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li className="font-semibold">
            <Link href="#contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="#contact-us">
          <Button text="Let&#39;s get started" />
        </Link>
      </div>
    </div>
  );
}
