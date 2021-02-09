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
    <div className="container mx-auto mb-32 max-w-xl">
      <p className="text-sm text-red">Fill in the form:</p>
      <form className="flex flex-col bg-red-100">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="text"
          type="text"
          value={inputText}
          placeholder="enter text here"
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          className="bg-red hover:bg-green duration-300 text-beige shadow p-10 "
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
