import React from "react";
import plan from "../../assets/plan.jpg";
import PostDetails from "./PostDetails";
import PostTitle from "./PostTitle";

function SuggestedArticle() {
  return (
    <div className="flex cursor-pointer overflow-hidden rounded-xl border-r-[5px] border-transparent bg-white duration-200 hover:border-neutral-200 max-md:flex-col md:h-52">
      <div className="h-full w-64 shrink-0 max-md:w-full">
        <img className="size-full" src={plan} alt="" />
      </div>
      <div className="p-4 md:ml-10">
        <PostTitle />
        <PostDetails />
        <div className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          blanditiis nesciunt eius, reiciendis atque voluptatem quas dolorum
          sint nulla asperiores error provident nisi aliquam rem. Obcaecati
          pariatur eos cumque perferendis eius modi perspiciatis quaerat, nobis
          reiciendis, dolore quo rerum distinctio.
        </div>
      </div>
    </div>
  );
}

export default SuggestedArticle;
