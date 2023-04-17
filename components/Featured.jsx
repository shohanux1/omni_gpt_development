"use client";

import React from "react";
import Card from "../components/Card";
import TextHeadline from "../components/TextHeadline";
import Iphone from "../components/Iphone";
import { GiShakingHands } from "react-icons/gi";

const Featured = () => {
  return (
    <section className="py-10 lg:py-36 lg:flex lg:items-center lg:gap-16 lg:flex-row-reverse ">
      <div
        className="
      space-y-5
      h-full
      "
      >
        <div className="mb-8">
          <TextHeadline title='The "All-in-One" Solution for Conversational AI' />
        </div>
        <Card
          icon={<GiShakingHands />}
          sm={false}
          title="Seamless Collaboration"
          desc="You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use."
        />
        <Card sm title="Multi-Channel Support" />
        <Card sm title="AI-Powered Assistance" />
        <Card sm title="Easy to Use" />
      </div>

      <div className="flex items-center justify-center w-full lg:mt-0">
        <Iphone />
      </div>
    </section>
  );
};

export default Featured;
