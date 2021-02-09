import React, { useState } from "react";

const { HostedModel } = require("@runwayml/hosted-models");

export default function HostModel() {
  const [generatedText, setGeneratedText] = useState("");
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextComanyName, setInputTextCompanyName] = useState("");
  const [inputTextJobTitle, setInputTextJobTitle] = useState("");
  const [inputTextSkillOne, setInputTextSkillOne] = useState("");
  const [inputTextSkillTwo, setInputTextSkillTwo] = useState("");
  const [inputTextSkillThree, setInputTextSkillThree] = useState("");

  const model = new HostedModel({
    url: "https://job-rapplication.hosted-models.runwayml.cloud/v1/",
    token: "dMvkpYOpVcS9/jgCJc6i7w==",
  });

  const handleClick = () => {
    console.log("handleSubmit");
    //värde att fråga model efter

    const queryText = `Yo ${inputTextComanyName}, 
    Ima applyin' for the position as a ${inputTextJobTitle}. 
    Ima skilled in ${inputTextSkillOne}, ${inputTextSkillTwo} and ${inputTextSkillThree}. `;

    const additionalDrakeIntros = [
      "Started from the bottom homie ",
      "Call me on my cell phone baby ",
      "I've been down so long ya gotta ",
      "I got my eyes on you ",
      "It's hard to do these things alone shawty ",
      "Ever since I left the city love ",
      "Money over everything! Money on my mind! ",
      "They know, they know, they know momma ",
      "I'm on my worst behavior ",
      "They wishin' on me ",
      "Soon as you see the text, reply me ",
      "I think I'd lie for you, I think I'd die for you ",
      "I don't know how to talk to you ",
      "Last night, I came to a realization ",
    ];

    let randomDrakeIntro =
      additionalDrakeIntros[
        Math.floor(Math.random() * additionalDrakeIntros.length)
      ];

    console.log("inskriven text: ", queryText);
    console.log(randomDrakeIntro);

    let queryTextToModel = queryText + randomDrakeIntro;

    model
      .query({ prompt: queryTextToModel, max_characters: 1100 })
      .then((result) => {
        setGeneratedText(result.generated_text);
      });
  };

  const yoursSincerely = `${inputTextName}`;

  return (
    <div className="container mx-auto mb-32 max-w-xl form-container">
      <p className="text-md text-red mb-4">Fill the form!</p>

      <form className="flex flex-col">
        <p className="text-md text-beige mb-2">My name is</p>
        <input
          className="bg-gray-200 py-4 pl-4 "
          id="text"
          type="text"
          value={inputTextName}
          placeholder="my name"
          onChange={(e) => setInputTextName(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">I'm applying for a job at</p>
        <input
          className="bg-gray-200 py-4 pl-4 "
          id="text"
          type="text"
          value={inputTextComanyName}
          placeholder="company name"
          onChange={(e) => setInputTextCompanyName(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">... for a position as</p>
        <input
          className="bg-gray-200 py-4 pl-4 flex-1"
          id="text"
          type="text"
          value={inputTextJobTitle}
          placeholder="job title"
          onChange={(e) => setInputTextJobTitle(e.target.value)}
        />

        <div className="w-full h-20" />

        <p className="text-md text-beige mb-2">My top three skills are</p>
        <input
          className="bg-gray-200 py-4 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillOne}
          placeholder="skill 1"
          onChange={(e) => setInputTextSkillOne(e.target.value)}
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-4 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillTwo}
          placeholder="skill 2"
          onChange={(e) => setInputTextSkillTwo(e.target.value)}
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-4 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillThree}
          placeholder="skill 3"
          onChange={(e) => setInputTextSkillThree(e.target.value)}
        />

        <div className="w-full h-20" />

        <button
          className="bg-red hover:bg-beige hover:text-red hover:shadow-sm duration-300 shadow text-beige p-10 "
          type="button"
          onClick={handleClick}
        >
          Generate rapplication
        </button>
      </form>

      <div className="w-full h-40" />

      <div className="container mx-auto mb-32 max-w-xl bg-beige">
        <p className="generated-text-box text-md px-5 md:px-10 pb-10 leading-loose">
          {generatedText}
        </p>
        <p className="px-5 md:px-10 leading-loose text-md">Yours sincerely,</p>
        <p className="px-5 md:px-10 pb-20 leading-loose text-md">
          {yoursSincerely}
        </p>
      </div>

      <button
        className="button-secondary w-full bg-transparent border-2 hover:border-8 border-beige hover:shadow-sm duration-300 shadow text-beige p-10 mb-2"
        type="button"
      >
        Copy text
      </button>

      <style jsx>{`
        button {
          font-family: "Press Start 2P", cursive;
        }
        .form-container {
          height: auto;
        }
        .generated-text-box {
          min-height: 80rem;
        }
      `}</style>
    </div>
  );
}
