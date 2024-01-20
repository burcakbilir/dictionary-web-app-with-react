import React, { useRef } from "react";

function Heading({ audioUrl, word, phonetic }) {
  const ref = useRef();

  const playAudio = () => {
    ref.current.play();
  };
  return (
    <div className="flex justify-between my-7 font-serif">
      <h3 className="font-bold text-4xl dark-mode-text">
        {word}
        <span className="block font-normal text-sm text-pink-400 ">
          {phonetic}
        </span>
      </h3>
      <button
        className="bg-pink-400 shadow-lg shadow-pink-500/50 h-10 w-10 text-white rounded-full"
        onClick={playAudio}
      >
        <i className="fa-solid fa-play"></i>
      </button>
      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
}

export default Heading;
