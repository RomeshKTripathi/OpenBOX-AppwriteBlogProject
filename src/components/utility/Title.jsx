import React from "react";

function Title({ text }) {
  return (
    <div className="my-4 flex w-full justify-center md:my-10">
      <div className=" w-fit text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl bottom-line">
        {text ?? "Editor's Pick"}
      </div>
    </div>
  );
}

export default Title;
