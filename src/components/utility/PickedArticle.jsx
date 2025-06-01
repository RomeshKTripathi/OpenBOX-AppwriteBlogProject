import React from "react";
import PostDetails from "./PostDetails";
import PostTitle from "./PostTitle";
import featured from "../../assets/featured.png";

function PickedArticle({ style }) {
  return (
    <div
      className={`flex cursor-pointer rounded-lg max-md:min-w-full max-md:border max-md:border-white max-md:bg-white/60 max-md:p-4 ${style}`}
    >
      <div className="shrink-0 md:h-52 md:w-60 lg:h-72 lg:w-[350px]">
        <img
          className="h-full w-full rounded-r-lg object-cover max-md:hidden"
          src={featured}
          alt=""
        />
      </div>
      <div className="md:ml-10">
        <PostTitle />
        <PostDetails />
        <div className="line-clamp-2 max-md:text-sm md:line-clamp-3 lg:line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus
          unde alias aperiam asperiores sunt dolor enim inventore et, animi
          quasi corrupti soluta dicta, repellendus eveniet incidunt omnis
          delectus a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae exercitationem quae est dolorem itaque cupiditate velit
          vitae quibusdam, labore ea nesciunt ipsa cum voluptatem nobis
          doloremque quidem reprehenderit rem harum repellat culpa dolor.
          Deleniti vero numquam blanditiis vel commodi culpa quia consequatur
          eum cumque assumenda maiores, illo similique pariatur impedit!
        </div>
      </div>
    </div>
  );
}

export default PickedArticle;
