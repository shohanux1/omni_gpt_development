"use client";

import TextHeadline from "../TextHeadline";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section className="mb-10">
      <div className="mb-8">
        <TextHeadline title={'See what People </br> Are Saying "About Us"'} />
      </div>

      <div className="flex flex-row flex-wrap items-center gap-8 md:flex-nowrap lg:flex-nowrap">
        <ReviewCard />
        <ReviewCard />
      </div>

      <div className="flex items-center gap-2 mt-10 justify-center transition ">
        <div className="h-4 w-4 bg-[#414651] rounded-full transition hover:bg-white cursor-pointer"></div>
        <div className="h-4 w-4 bg-[#414651] rounded-full transition hover:bg-white cursor-pointer"></div>
        <div className="h-4 w-4 bg-[#414651] rounded-full transition hover:bg-white cursor-pointer"></div>
        <div className="h-4 w-4 bg-[#414651] rounded-full transition hover:bg-white cursor-pointer"></div>
      </div>
    </section>
  );
};

export default Review;
