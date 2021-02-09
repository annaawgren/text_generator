import React, { useState, useEffect } from "react";

const { HostedModel } = require("@runwayml/hosted-models");

export default function HostModel() {
  const [generatedText, setGeneratedText] = useState("");
  const [inputText, setInputText] = useState("");

  const model = new HostedModel({
    url: "https://job-rapplication.hosted-models.runwayml.cloud/v1/",
    token: "dMvkpYOpVcS9/jgCJc6i7w==",
  });

  const handleClick = () => {
    console.log("handleSubmit");
    //värde att fråga model efter
    console.log("inskriven text: ", inputText);
    model.query({ prompt: inputText, max_characters: 1100 }).then((result) => {
      console.log(result);
      setGeneratedText(result.generated_text);
    });
  };

  return (
    <div className="container mx-auto mb-32 max-w-xl form-container">
      <p className="text-md text-red mb-4">Fill the form!</p>

      <form className="flex flex-col">
        <p className="text-md text-beige mb-2">My name is</p>
        <input
          className="bg-gray-200 py-8 pl-4 "
          id="text"
          type="text"
          value={inputText}
          placeholder="my name"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">I'm applying for a job at</p>
        <input
          className="bg-gray-200 py-8 pl-4 "
          id="text"
          type="text"
          value={inputText}
          placeholder="your first and family name"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">I'm applying for a job at</p>
        <input
          className="bg-gray-200 py-8 pl-4 flex-1"
          id="text"
          type="text"
          value={inputText}
          placeholder="company name"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">... for a position as</p>
        <input
          className="bg-gray-200 py-8 pl-4 flex-1"
          id="text"
          type="text"
          value={inputText}
          placeholder="job title"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">My top three skills are</p>
        <input
          className="bg-gray-200 py-8 pl-4 "
          id="text"
          type="text"
          value={inputText}
          placeholder="skill 1"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-8 pl-4 "
          id="text"
          type="text"
          value={inputText}
          placeholder="skill 2"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-8 pl-4 "
          id="text"
          type="text"
          value={inputText}
          placeholder="skill 3"
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="w-full h-20" />

        <button
          className="bg-red hover:bg-green hover:shadow-sm duration-300 shadow text-beige p-10 "
          type="button"
          onClick={handleClick}
        >
          Generate rapplication
        </button>
      </form>

      <div className="w-full h-40" />

      <div className="container mx-auto mb-32 max-w-xl bg-beige">
        <p className="generated-tex-box">{generatedText}</p>
      </div>

      <button
        className="button-secondary w-full bg-transparent border-2 border-beige hover:bg-beige hover:text-green hover:shadow-sm duration-300 shadow text-beige p-10 "
        type="button"
      >
        Copy text
      </button>

      <style jsx>{`
        button {
          font-family: "Press Start 2P", cursive;
        }
        .form-container {
          height: 200rem;
        }
        .generated-tex-box {
          height: 80rem;
        }
      `}</style>
    </div>
  );
}
