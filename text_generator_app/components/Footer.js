import React from "react";
import About from "./About";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-center flex flex-col justify-between py-40 text-green">
        {/* <About /> */}
        <button
          className="hover:text-red duration-300 shadow text-green p-10 "
          type="button"
        >
          About
        </button>
        <p className="pt-20 pb-8 text-sm">© Newbie Tech Exploration Lab 2021</p>
      </footer>
    </>
  );
}
