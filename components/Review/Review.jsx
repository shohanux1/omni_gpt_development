"use client";

import TextHeadline from "../TextHeadline";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section className="mb-10">
      <TextHeadline title={'See what People Are Saying "About Us"'} />

      <ReviewCard />
    </section>
  );
};

export default Review;
