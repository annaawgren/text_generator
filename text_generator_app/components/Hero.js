import React from "react";
import ArrowSvg from "./ArrowSvg";

export default function Hero() {
  return (
    <>
      <section className="hero w-full h-screen flex flex-col items-center justify-between pb-20">
        <div className="w-full  h-1/8" />

        <div className="w-full h-96 flex items-center">
          <img
            className="mx-auto h-32 object-contain drake"
            src="/images/draikewglasses.png"
          />
        </div>

        <a href="#model-section">
          <ArrowSvg />
        </a>
      </section>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg) scale(2);
          }
        }

        .drake:hover {
          animation: spin 0.7s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
