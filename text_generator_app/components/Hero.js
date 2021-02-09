import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero w-full h-screen flex flex-col items-center justify-between pt-60 pb-20">
        <div className="text-center w-full">
          <h1 className="text-green text-md">
            DR<span className="text-red">ai</span>KE JOB RAPPLICATION
          </h1>
        </div>

        <div className="w-full h-96 flex items-center">
          <img
            className="mx-auto h-32 object-contain drake"
            src="/images/draikewglasses.png"
          />
        </div>

        <div className="flex flex-row justify-center w-full ">
          <svg
            width="18"
            height="53"
            viewBox="0 0 18 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.499999L3 0.499999L3 3L5.5 3L5.5 5.5L8 5.5L8 8L10.5 8L10.5 5.5L13 5.5L13 3L15.5 3L15.5 0.5L18 0.5L18 5.5L15.5 5.5L15.5 8L13 8L13 10.5L10.5 10.5L10.5 13L8 13L8 10.5L5.5 10.5L5.5 8L3 8L3 5.5L0.5 5.5L0.5 0.499999Z"
              fill="#2E5052"
            />
            <path
              d="M0.499999 20.1L3 20.1L3 22.6L5.5 22.6L5.5 25.1L8 25.1L8 27.6L10.5 27.6L10.5 25.1L13 25.1L13 22.6L15.5 22.6L15.5 20.1L18 20.1L18 25.1L15.5 25.1L15.5 27.6L13 27.6L13 30.1L10.5 30.1L10.5 32.6L8 32.6L8 30.1L5.5 30.1L5.5 27.6L3 27.6L3 25.1L0.499999 25.1L0.499999 20.1Z"
              fill="#2E5052"
            />
            <path
              d="M0.499998 39.7L3 39.7L3 42.2L5.5 42.2L5.5 44.7L8 44.7L8 47.2L10.5 47.2L10.5 44.7L13 44.7L13 42.2L15.5 42.2L15.5 39.7L18 39.7L18 44.7L15.5 44.7L15.5 47.2L13 47.2L13 49.7L10.5 49.7L10.5 52.2L8 52.2L8 49.7L5.5 49.7L5.5 47.2L3 47.2L3 44.7L0.499998 44.7L0.499998 39.7Z"
              fill="#2E5052"
            />
          </svg>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .drake:hover {
          animation: spin 0.7s ease-in-out;
        }
      `}</style>
    </>
  );
}