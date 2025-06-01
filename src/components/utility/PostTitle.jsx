import React from "react";

function PostTitle({ tag, title }) {
  return (
    <div>
      <div className="line-clamp-2 text-xs uppercase text-neutral-500 md:text-xl">
        {tag ?? "Featured Article"}
      </div>
      <div className="line-clamp-3 text-lg font-semibold md:text-3xl lg:text-4xl">
        {title ?? "World's Most Dangerous Technology Ever Made."}
      </div>
    </div>
  );
}

export default PostTitle;
