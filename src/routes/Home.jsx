import React from "react";
import travel from "../assets/travel.jpg";
import plan from "../assets/plan.jpg";
import FeaturedArticle from "../components/utility/FeaturedArticle";
import Title from "../components/utility/Title";
import PickedArticle from "../components/utility/PickedArticle";
import SuggestedArticle from "../components/utility/SuggestedArticle";
import Tag from "../components/utility/Tag";

const tags =
  "Technology Lifestyle Health Travel Food Education Finance Fashion Entertainment Business Parenting Fitness Personal-Development DIY Home-Decor Marketing Photography Art Music Sports Relationships Recipes News Environment".split(
    " ",
  );

function Home() {
  return (
    <>
      <FeaturedArticle featuredImage={travel} position={"leftTop"} />
      <Title text="Editor's Pick" />
      <div className="mx-auto flex snap-proximity overflow-x-auto scroll-smooth max-md:gap-4 md:w-11/12 md:flex-col md:gap-8 md:py-8 lg:w-3/5 lg:gap-16 lg:py-16">
        <PickedArticle />
        <PickedArticle />
        <PickedArticle />
        <PickedArticle />
      </div>
      <FeaturedArticle
        featuredImage={plan}
        position={"rightCenter"}
        style={"my-20"}
      />
      <Title text={"Suggested"} />
      <div className="mx-auto flex gap-4 max-lg:flex-col-reverse md:w-11/12 md:gap-24 lg:w-10/12">
        <div className="flex flex-col gap-8 lg:w-9/12">
          <SuggestedArticle />
          <SuggestedArticle />
          <SuggestedArticle />
          <SuggestedArticle />
          <SuggestedArticle />
        </div>
        <div className="overflow-auto scroll-smooth max-lg:flex max-lg:gap-4 max-md:gap-1">
          <span className="mb-2 block text-lg font-bold max-lg:hidden">
            Tags
          </span>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
