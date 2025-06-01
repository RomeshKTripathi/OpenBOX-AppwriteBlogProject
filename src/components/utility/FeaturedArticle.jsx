import React from "react";
import PostDetails from "./PostDetails";
import PostTitle from "./PostTitle";

function FeaturedArticle({
  tag,
  title,
  author,
  published,
  article,
  featuredImage,
  position,
  style,
}) {
  const positionStyle = {
    leftTop: "md:top-0 md:left-10 bottom-10",
    rightTop: "md:right-10 md:top-0",
    leftCenter: "md:top-10 md:left-16",
    rightCenter: "md:top-10 md:right-16",
  };

  return (
    <div className={`relative w-full ${style}`}>
      <img
        className="max-h-[580px] w-full object-cover"
        src={featuredImage}
        alt=""
      />
      <div
        className={`cursor-pointer bg-white/80 backdrop-blur-md max-md:mx-auto max-md:p-4 sm:w-3/5 md:absolute md:h-auto md:p-8 lg:w-2/5 lg:p-12 ${positionStyle[position]}`}
      >
        <div className="lg:mt-10 p-2">
          <PostTitle tag={tag} title={title} />
          <PostDetails author={author} published={published} />
          <div className="line-clamp-3 lg:line-clamp-[8] ">
            {article ??
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nisi quod omnis voluptatum commodi est praesentium quibusdam voluptates corrupti molestiae aliquam, deleniti doloribus porro asperiores dolore quisquam illum facilis consectetur! Necessitatibus esse et accusamus totam ipsam nemo pariatur soluta, exercitationem eius veritatis eum est odit suscipit, repellat, eveniet dolore animi impedit aut doloribus qui beatae? exercitationem eius veritatis eum est odit suscipit, repellat, eveniet dolore animi impedit aut doloribus qui beatae?"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
