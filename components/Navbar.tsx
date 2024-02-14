"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

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
                  "menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-900 shadow-2xl rounded-box w-52 font-semibold"
            }
          >
            <li>
              <Link
                onClick={() => setShow(!show)}
                href="/what-we-do"
                className="btn btn-ghost"
              >
                What we do
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(!show)}
                href="/projects"
                className="btn btn-ghost"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(!show)}
                href="/testimonials"
                className="btn btn-ghost"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(!show)}
                href="/contact"
                className="btn btn-ghost"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-md md:text-xl">
          Exponential Dev
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link
              onClick={() => setShow(!show)}
              href="/what-we-do"
              className="btn btn-ghost"
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(!show)}
              href="/projects"
              className="btn btn-ghost"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(!show)}
              href="/testimonials"
              className="btn btn-ghost"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(!show)}
              href="/contact"
              className="btn btn-ghost"
            >
              Contact us
            </Link>
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
