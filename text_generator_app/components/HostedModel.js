import React, { useState, useEffect } from "react";

const { HostedModel } = require("@runwayml/hosted-models");

export default function HostModel() {
  const [generatedText, setGeneratedText] = useState("");
  const [inputText, setInputText] = useState("");

  const model = new HostedModel({
    url: "https://draike-text-generator.hosted-models.runwayml.cloud/v1/",
    token: "7prYnATYJIxYLIxHRlvbnw==",
  });

  const handleClick = () => {
    console.log("handleSubmit");
    //värde att fråga model efter
    console.log("inskriven text: ", inputText);
    model.query({ prompt: inputText, max_characters: 1000 }).then((result) => {
      console.log(result);
      setGeneratedText(result.generated_text);
    });
  };

  return (
    <div className="w-full bg-blue-100 ">
      <form className="flex flex-col bg-red-100">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="text"
          type="text"
          value={inputText}
          placeholder="Enter a message"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
          type="button"
          onClick={handleClick}
        >
          Generate my application!
        </button>
      </form>
      <p className="h-96">{generatedText}</p>

      <style jsx>{``}</style>
    </div>
  );
}
