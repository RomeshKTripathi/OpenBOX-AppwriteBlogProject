import React from "react";
import { Link } from "react-router-dom";

function Tag({ tag }) {
  return (
    <Link to={`/tags/${tag.toLowerCase()}`}>
      <span
        key={tag}
        className="my-4 block cursor-pointer truncate text-nowrap duration-100 hover:font-semibold max-lg:rounded-full max-lg:border max-lg:border-white/70 max-lg:bg-white/30 max-lg:px-4 max-lg:py-2"
      >
        {tag}
      </span>
    </Link>
  );
}

export default Tag;
