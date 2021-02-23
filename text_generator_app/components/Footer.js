import React, { useState, useEffect } from "react";

export default function Footer(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen({ aboutVisible: !open.aboutVisible });
  };

  return (
    <>
      <footer className="w-full flex flex-col justify-between items-center py-40 text-green">
        <div
          className={`contact-info ${
            open.mobileMenuVisible ? "visible" : "hidden"
          }`}
        >
          <div className="about w-full h-screen bg-red flex flex-col items-center justify-between pt-60 pb-20 ">
            <div onClick={handleOpen} className="w-2 h-2 bg-beige">
              closetag
            </div>
            <div className="text-center w-full ">
              <p className="text-md">
                The DRAIKE Job Rapplication is an AI-powered job application
                generator trained on Drake lyrics and public resumes.
                <br />
                It creates unique and useless cover letters. It is a project by
                <a
                  href="https://newbietech.io"
                  target="_blank"
                  className="text-red"
                >
                  Newbie Tech Exploration Lab"
                </a>
                , made with OpenAI's GTP-2 and ML Runway.
              </p>
            </div>
          </div>
        </div>
        <button
          className="outline-none focus:outline-none text-green hover:text-red duration-300 shadow"
          onClick={handleOpen}
        >
          About
        </button>
        <p className="pt-20 pb-8 text-sm">© Newbie Tech Exploration Lab 2021</p>

        <style jsx>
          {`
            button:focus {
              box-shadow: none;
            }
          `}
        </style>
      </footer>
    </>
  );
}
