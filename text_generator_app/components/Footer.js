import React, { useState, useEffect } from "react";

export default function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <footer className="w-full flex flex-col justify-between items-center py-40">
        {isOpen && (
          <div>
            <div className="about fixed inset-0	w-full h-screen bg-green pt-60 pb-20 text-center">
              <button onClick={handleOpen} className="focus:outline-none ">
                <svg
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-20"
                >
                  <line
                    y1="-1.5"
                    x2="48.7063"
                    y2="-1.5"
                    transform="matrix(0.695431 0.718593 -0.796483 0.604661 2 2.00098)"
                    stroke="#EFDECD"
                    stroke-width="3"
                  />
                  <line
                    y1="-1.5"
                    x2="48.7061"
                    y2="-1.5"
                    transform="matrix(0.695414 -0.718609 0.796496 0.604644 3.12891 37.001)"
                    stroke="#EFDECD"
                    stroke-width="3"
                  />
                </svg>
              </button>

              <div className="flex flex-col justify-center items-center px-10 md:px-32 lg:px-80">
                <div className="container  max-w-md text-center w-full ">
                  <p className="about-txt text-md text-beige leading-loose pb-10">
                    The DR<span className="text-red">ai</span>KE Job
                    Rapplication is an AI-powered job application generator
                    trained on Drake lyrics and public resumes.
                  </p>

                  <p className="about-txt text-md text-beige leading-loose">
                    It creates unique and useless cover letters. It is a project
                    by{" "}
                    <a
                      href="https://newbietech.io"
                      target="_blank"
                      className="text-red"
                    >
                      Newbie Tech Exploration Lab
                    </a>
                    , made with OpenAI's GTP-2 and ML Runway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          className="outline-none focus:outline-none text-green hover:text-red duration-300 shadow"
          onClick={handleOpen}
        >
          About
        </button>
        <p className="pt-20 pb-8 text-sm">© Newbie Tech Exploration Lab 2021</p>

        <style jsx>
          {`
            .about-txt {
              text-indent: 0px;
            }
            button:focus {
              box-shadow: none;
            }
          `}
        </style>
      </footer>
    </>
  );
}
