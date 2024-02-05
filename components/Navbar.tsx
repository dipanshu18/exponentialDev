"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

import { navbarLinks } from "@/utils/data";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div id="home" className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            onClick={() => setShow(!show)}
            role="button"
            aria-label="menu"
            className="btn btn-ghost lg:hidden"
          >
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
            className={
              show
                ? "hidden"
                : "" +
                  "menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-900 shadow-2xl rounded-box w-52"
            }
          >
            {navbarLinks &&
              navbarLinks.map((navbarLink) => {
                return (
                  <li key={navbarLink.id} className="font-semibold">
                    <Link onClick={() => setShow(!show)} href={navbarLink.link}>
                      {navbarLink.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-md md:text-xl">
          Exponential Dev
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link href="/what-we-do">What we do?</Link>
          </li>
          <li className="font-semibold">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="font-semibold">
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li className="font-semibold">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/contact">
          <Button text="Let&#39;s get started" />
        </Link>
      </div>
    </div>
  );
}
