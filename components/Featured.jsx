"use client";

import React from "react";
import Card from "../components/Card";
import TextHeadline from "../components/TextHeadline";
import Iphone from "../components/Iphone";

const Featured = () => {
  return (
    <section>
      <TextHeadline title='The "All-in-One" Solution for Conversational AI' />

      <div
        className="
      space-y-5
      "
      >
        <Card
          sm={false}
          title="Seamless Collaboration"
          desc="You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use."
        />
        <Card sm title="Multi-Channel Support" />
        <Card sm title="AI-Powered Assistance" />
        <Card sm title="Easy to Use" />
      </div>

      <div className="flex items-center justify-center mt-14 w-full">
        <Iphone />
      </div>
    </section>
  );
};

export default Featured;
