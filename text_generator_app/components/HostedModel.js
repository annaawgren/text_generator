import React, { useState, useEffect } from "react";
import NiceButton from "./Button";

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

    const queryText = `Hey ${inputTextComanyName}, 
    Ima applyin' for the position as a ${inputTextJobTitle}. 
    Ima skilled in ${inputTextSkillOne}, ${inputTextSkillTwo} and ${inputTextSkillThree}. `;

    const additionalDrakeIntros = [
      "You got issues that I won’t mention for now, ’cause we're fallin’ apart.",
      "Passionate from miles away. Passive with the things you say.",
      "Listen, harder buildin' trust from a distance.",
      "I think we should rule out commitment for now, 'cause we're fallin' apart.",
      "Don't pick up the pieces, just leave it for now. They keep fallin' apart.",
      "Passin' up on my old ways. I can't blame you, no.",
      "Say you'll never ever leave from beside me.",
      "'Cause I want ya, and I need ya, and I'm down for you always.",
      "Look, the new me is really still the real me.",
      "They gotta make some choices, they runnin' out of options, 'cause I've been goin' off and they don't know when it's stoppin'.",
      "When you get to shoppin', you spend it like you earned it.",
      "I buy you Champagne, but you love some Henny.",
      "I know you special, girl, 'cause I know too many.",
      "Do you love me? Are you riding?",
      "You my everything, you all I ever wanted. We could do it real big, bigger than you ever done it.",
      "I want this forever, I swear I can spend whatever on it.",
      "You the best I ever had, best I ever had.",
      "Know you got a roommate, call me when there's no one there.",
      "I be hittin' all the spots that you ain't even know was there.",
      "You don't even have to ask twice, you could have my heart or we could share it like the last slice.",
      "Always felt like you was so accustomed to the fast life.",
      "Never pay attention to the rumors and what they assume.",
      "I say, you the fuckin' best.",
      "Buzz so big I could probably sell a blank disc.",
      "I got my eyes on you, you're everything that I see.",
      "I want your hot love and emotion endlessly. I can't get over you.",
      "You left your mark on me. I want your hot love and emotion endlessly.",
      "It's hard to do these things alone.",
      "Started from the bottom, now my whole team fuckin' here.",
      "Livin' at my momma's house, we'd argue every month.",
      "I'ma worry 'bout me, give a fuck about you.",
      "Fuck a fake friend, where your real friends at?",
      "We don't like to do too much explainin’. Story stayed the same, I never changed it.",
      "Story stayed the same through the money and the fame.",
      "You used to call me on my cell phone late-night when you need my love.",
      "I know when that hotline bling that can only mean one thing.",
      "Ever since I left the city, you got a reputation for yourself now.",
      "You got me down, you got me stressed out.",
      "'Cause ever since I left the city, you started wearing less and goin' out more.",
      "Glasses of champagne out on the dance floor.",
      "You and me, we just don't get along. You make me feel like I did you wrong.",
      "Ever since I left the city, you got exactly what you asked for.",
      "You should just be yourself. Right now, you're someone else.",
      "I might be too strung out on compliments. Overdosed on confidence.",
      "Started not to give a fuck and stopped fearin' the consequence.",
      "Drinkin' every night because we drink to my accomplishments.",
      "I just take my time with all this shit, I still believe in that.",
      "I know I exaggerated things, now I got it like that.",
      "You know good and well that you don't want a problem like that.",
      "They know, they know, they know that the real is on the rise.",
      "Fuck them other guys!",
      "I be yellin' out, Money over everything! Money on my mind!.",
      "That new shit that you got is overdue. You better do what you supposed to do.",
      "Listening to you expressin' all them feelings.",
      "I guess it really is just me, myself and all my millions.",
      "You know that they ain't even got it like that.",
      "‘Cause I live for this, it isn't just a hobby like that.",
      "When they get my shit and play it I ain't even gotta say it.",
      "Do it look like we stressin'?",
      "Look at you, look at you and look at you.",
      "On my worst behavior, no? They used to never want to hear us.",
      "Remember? Mothafucka never loved us.",
      "I'm on my worst behavior! Don't you ever get it fucked up!",
      "Hold up, hold my phone.",
      "Always hated the boy, but now the boy is the man. Mothafucka, I done growed up.",
      "You know me? I'm liable to do anything when it comes to that you owe me.",
      "You better have my money when I come for that shit like O.D.B.",
      "Who's hot, who not? Tell me who rock, who sell out in stores?",
      "You tell me who flop, who copped the new drop, whose jewels got rocks.",
      "Who else making rap albums, doing numbers like it's pop?",
      "Open the mail, starin' at the check. Enough to make you throw up, man, it's gross what I net.",
      "I swear I could beat Serena when she playin' with her left.",
      "For all the stuntin', I'll forever be immortalized.",
      "Back and forth across the borderline. Hate to leave the city, but I've got to do the overtime.",
      "Gone all the time, even the important times.",
      "I should let you know ahead I'm comin' back on my worst behavior.",
      "I been movin' calm, don't start no trouble with me.",
      "Tryna keep it peaceful is a struggle for me.",
      "You know how I like it when you lovin' on me.",
      "God's plan, god's plan.",
      "I hold back, sometimes I won’t.",
      "I feel good, sometimes I don’t.",
      "Might go down a G.O.D.",
      "It's a lot of bad things that they wishin' and wishin' and wishin' and wishin' they wishin' on me.",
      "I only love my bed and my mama, I'm sorry.",
      "Grips on your waist, front way, back way.",
      "You know that I don't play.",
      "Streets not safe but I never run away even when I'm away.",
      "There's never much love when we go OT.",
      "I pray to make it back in one piece.",
      "I need a one dance, got a Hennessy in my hand.",
      "One more time 'fore I go higher powers taking a hold on me.",
      "Strength and guidance all that I'm wishing for my friends.",
      "You know you gotta stick by me.",
      "Soon as you see the text, reply me.",
      "I don't wanna spend time fighting.",
      "We've got no time and that's why I need a one dance.",
      "I think I'd lie for you. I think I'd die for you. Jodeci Cry for You.",
      "Them girls, they just wanna take my money.",
      "You can't listen to me talk and go tell my story, nah.",
      "My last girl would tear me apart, but she'd never wanna split a ting with me.",
      "Look, I don't know how to talk to you.",
      "My friends always feel the need to tell me things.",
      "These days I don't know how to talk to you.",
      "I don't know how to be there when you need me.",
      "It feels like the only time you see me is when you turn your head to the side and look at me differently.",
      "Last night I think I lost my patience.",
      "Last night, I got high as your expectations.",
      "Last night, I came to a realization.",
      "I'm too good to you. I'm way too good to you.",
      "You take my love for granted. I just don't understand it.",
      "Years go by too fast, I can't keep track.",
      "You got somebody other than me.",
      "Free time is costing me more than it seems.",
      "I wanna tell you my intentions. I wanna do the things that I mention.",
      "I wanna get the late night message from you.",
      "Gotta get a handle on the fact that I'm too good to you.",
      "I've been down so long, it look like up to me. They look up to me.",
      "I got fake people showin' fake love to me.",
      "I've been down so long, it look like up to me.",
      "Somethin' ain't right when we talkin’. Look like you hidin' your problems.",
      "Really you never was solid.",
      "You won't never get to run me.",
      "That's when they smile in my face.",
      "Whole time they wanna take my place.",
      "I can tell that love is fake. I don't trust a word you say.",
      "Look you in the face, and it's just not the same.",
      "Straight up to my face, tryna play it safe.",
      "Vibe switch like night and day. I can see it, like, right away.",
      "I came up, you changed up. I caught that whole play.",
      "I know shorty and she doesn't want no slow song.",
      "You've been inside, know you like to lay low.",
      "With your phone out, gotta hit them angles.",
      "You showin' off, but it's alright. It's a short life, yeah.",
      "That's a real one in your reflection, without a follow, without a mention.",
      "You ain't stressin' off no lover in the past tense. You already had them.",
      "Work at 8 A.M., finish 'round five.",
      "Yeah, they don't really be the same offline.",
      "You know dark days, you know hard times. Doin' overtime for the last month.",
      "Gotta hit the club, gotta make that ass jump.",
      "Sometimes we laugh and sometimes we cry, but I guess you know now.",
      "We took a trip, now we on your block and it's like a ghost town.",
      "Been wakin' up in the crib and sometimes I don't even know where I'm at.",
      "Anytime that I ran into somebody, it must be a victory lap.",
      "Distance between us is not like a store, this isn't a closeable gap.",
      "When he tell the story, that's not how it went. Know they be lyin', a hundred percent.",
      "It go right foot up, left foot, slide. Left foot up, right foot, slide.",
      "Don't you wanna dance with me, no? I could dance like Michael Jackson.",
      "That's just how I think, it's either you or me.",
      "If it's not the right time, there'll always be another time.",
      "Can't describe the pressure I be puttin' on myself.",
      "Heard a lot about you but we don't know for real. Next time, guarantee the truth'll get revealed.",
    ];

    let randomDrakeIntro =
      additionalDrakeIntros[
        Math.floor(Math.random() * additionalDrakeIntros.length)
      ];

    console.log("inskriven text: ", queryText);
    console.log(randomDrakeIntro);

    setIsGenerateButtonLoading(true);

    let queryTextToModel = queryText + randomDrakeIntro;

    model
      .query({ prompt: queryTextToModel, max_characters: 900 })
      .then((result) => {
        setGeneratedText(result.generated_text);
        setIsGenerateButtonLoading(false);
      });
  };

  const yoursSincerely = inputTextName;

  const [isGenerateButtonLoading, setIsGenerateButtonLoading] = useState(false);
  // const [loadingSpeed, setLoadingSpeed] = useState(1);

  // useEffect(() => {
  //   if (isSecondButtonLoading) {
  //     setTimeout(() => {
  //       setIsSecondButtonLoading(false);
  //     }, 1000 / loadingSpeed);
  //   }
  // }, [isSecondButtonLoading, loadingSpeed]);

  // const handleButtonLoading = () => setIsSecondButtonLoading(true);

  // const handleClickAndLoading = () => {
  //   handleButtonLoading();
  //   handleClick();
  // };

  return (
    <div className="container mx-auto mb-32 max-w-xl form-container">
      <form className="flex flex-col">
        <p className="text-md text-beige mb-2">My name is</p>
        <input
          className="bg-gray-200 py-6 pl-4 "
          id="text"
          type="text"
          value={inputTextName}
          placeholder="Your first and last name"
          onChange={(e) => setInputTextName(e.target.value)}
          required
        />

        <div className="w-full h-14 md:h-20" />

        <p className="text-md text-beige mb-2">I'm applying for a job at</p>
        <input
          className="bg-gray-200 py-6 pl-4 "
          id="text"
          type="text"
          value={inputTextComanyName}
          placeholder="Company name"
          onChange={(e) => setInputTextCompanyName(e.target.value)}
          required
        />

        <div className="w-full h-14 md:h-20" />

        <p className="text-md text-beige mb-2">... for a position as</p>
        <input
          className="bg-gray-200 py-6 pl-4 flex-1"
          id="text"
          type="text"
          value={inputTextJobTitle}
          placeholder="Job title"
          onChange={(e) => setInputTextJobTitle(e.target.value)}
          required
        />

        <div className="w-full h-14 md:h-20" />

        <p className="text-md text-beige mb-2">My top three skills are</p>
        <input
          className="bg-gray-200 py-6 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillOne}
          placeholder="Skill 1"
          onChange={(e) => setInputTextSkillOne(e.target.value)}
          required
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-6 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillTwo}
          placeholder="Skill 2"
          onChange={(e) => setInputTextSkillTwo(e.target.value)}
          required
        />

        <div className="w-full h-10" />

        <input
          className="bg-gray-200 py-6 pl-4 "
          id="text"
          type="text"
          value={inputTextSkillThree}
          placeholder="Skill 3"
          onChange={(e) => setInputTextSkillThree(e.target.value)}
          required
        />

        <div className="w-full h-10" />

        <NiceButton isLoading={isGenerateButtonLoading} onClick={handleClick}>
          Generate rapplication
        </NiceButton>
      </form>

      <div className="w-full h-40" />

      <p className="text-md text-beige mb-2">Created with love and ai</p>
      <div className="container mx-auto mb-10 max-w-xl bg-beige">
        <p className="generated-text-box text-md py-10 px-5 md:px-10 leading-loose">
          {generatedText}
        </p>
        <p className="px-5 md:px-10 pb-20 leading-loose text-md">
          {yoursSincerely}
        </p>
      </div>

      <button
        className="button-secondary w-full bg-transparent border-2 hover:border-8 border-beige hover:shadow-sm duration-300 shadow text-beige hover:text-red text-sm p-8 "
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
          min-height: 50rem;
        }

        input[type="text"],
        textarea {
          color: #2e5052;
          background-color: #efdecd;
        }

        input:focus {
          outline: none !important;
          border-color: red;
          box-shadow: 0 0 0;
        }
        textarea:focus {
          outline: none !important;
          border-color: red;
          box-shadow: 0 0 0;
        }

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #2e5052;
          opacity: 0.7; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #2e5052;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #2e5052;
        }
      `}</style>
    </div>
  );
}
