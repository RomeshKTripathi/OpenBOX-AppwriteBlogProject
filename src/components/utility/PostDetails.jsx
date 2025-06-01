import React from "react";

function PostDetails({ author, published }) {
  return (
    <div className="flex items-center gap-3 py-0.5 text-neutral-500 md:py-1">
      <div>{author ?? "Author"}</div>
      <div className="size-1 rounded-full bg-neutral-400"></div>
      <div>{published ?? "May 7, 2024"}</div>
    </div>
  );
}

export default PostDetails;
