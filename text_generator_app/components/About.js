import React from "react";

export default function About() {
  return (
    <>
      <section className="about w-full h-screen bg-green flex flex-col items-center justify-between pt-60 pb-20 text-white ">
        <div className="text-center w-full text-white">
          <p className="text-white text-md">
            The DRAIKE Job Rapplication is an AI-powered job application
            generator trained on Drake lyrics and public resumes.
          </p>
          <p className="text-white text-md">
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
      </section>

      <style jsx>{``}</style>
    </>
  );
}
