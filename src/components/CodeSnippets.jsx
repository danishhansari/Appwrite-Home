import { Light } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiOutlineCopy } from "react-icons/ai";
import { useState } from "react";
import {ToggleBtns, sideBtns,  code}  from './Data'
const CodeSnippets = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleBtn = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="max-w-[1100px] mx-auto py-8 my-8">
        <p className="text-base font-bold text-2xl uppercase text-center">
          sdks
        </p>
        <h1 className="text-black text-3xl font-bold text-center mt-4">
          Quick to Get Started, Easy to Grow
        </h1>
        <p className="font-light text-center text-black my-4">
          All Appwrite SDKs are carefully designed to make developers lives
          easier
        </p>
        <div className="btns flex gap-1 text-lg font-light items-center justify-center mb-8">
          {ToggleBtns.map((button) => (
            <button
              key={button.id}
              className={`${
                toggleState === button.id
                  ? "bg-gray-200 active py-1 px-6 rounded-lg"
                  : "bg-white py-1 px-6"
              }`}
              onClick={() => toggleBtn(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="text-left w-full flex flex-col gap-8 self-center">
            {sideBtns.map((button) => (
              <button key={button.id} className={`${toggleState == button.id ? "border-l-4 border-base": "border-0"} text-left pl-4`} onClick={() => toggleBtn(button.id)} >
                <p>{button.heading}</p>
                <p>{button.text}</p>
              </button>
            ))}

          </div>

          <div className="code w-full flex flex-col">
            <select className="inline-block self-end p-2 rounded text-black bg-gray-200" onChange={(e) => toggleBtn(Number(e.target.value))}>
              <option value="1" >Web SDK</option>
              <option value="2">Flutter SDK</option>
              <option value="3" >Android SDK</option>
              <option value="4" >Swift SDK</option>
            </select>
            <div className="code-snippet font-semibold p-4 relative hover group h-full">
              <p className="transition-all hidden group-hover:block absolute bottom-6 left-[50%] translate-x-[-50%] bg-[rgba(255,255,255,.5)] font-light text-sm p-1 rounded-2xl">
                <AiOutlineCopy className="inline" /> Clip to Clipboard
              </p>
              <Light language="jsx" style={atomOneDark} className="rounded-lg">
                {code[toggleState]}
              </Light>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSnippets;
