import React from "react";

function Content({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="my-3">
      <div className="flex flex-row items-center text-lg font-bold ">
        <p className="noun  dark-mode-text ">{partOfSpeech}</p>
        <hr className="w-full ml-7" />
      </div>
      <p className="my-3 text-gray-400 ">Meaning</p>
      <ul className="list-disc px-10 text-gray-800 text-base space-y-2 dark-mode-text ">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
      <p className="my-7 text-gray-400 ">
        Synonyms{" "}
        {synonyms.map((synonym, index) => (
          <span
            className="text-pink-400 font-bold mx-2 inline-block h-200 w-100"
            key={index}
          >
            {synonym}
          </span>
        ))}
      </p>
    </div>
  );
}
export default Content;
