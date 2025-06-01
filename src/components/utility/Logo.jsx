import React from "react";

function Logo({ style }) {
  return (
    <div
      className={`cursor-pointer select-none text-lg font-semibold text-black md:text-xl lg:text-3xl ${
        style ?? "text-xl"
      }`}
    >
      Op
      <span className="underline underline-offset-4">
        en<span className="font-bold">BOX</span>
      </span>
    </div>
  );
}

export default Logo;
