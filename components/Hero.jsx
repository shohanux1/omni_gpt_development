import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Circle from "../public/Illustration.svg";
import People from "../public/mask.png";
import { HiArrowUpLeft } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse">
      <div>
        <div className="relative my-8">
          <h1 className="text-4xl font-medium z-10">
            Bring the power <br /> of AI to your <br /> conversations
          </h1>
          <Image
            className="absolute left-0 -bottom-3 -z-10"
            src={Circle}
            alt="Illustration"
          />
        </div>

        <h2 className="text-2xl font-medium">
          Work Faster, Smarter, and Better Together
        </h2>

        <p className="text-base my-3 mb-4">
          Experience the power of AI language models with OmniGPT. Our chat
          platform provides seamless communication across multiple channels.
        </p>
        <h2 className="text-xl font-medium mb-5">
          Try the OmniGPT for free. 15-day trial, no credit card required.
        </h2>

        <div className="mb-10">
          <Button title="Start your free trial" />
        </div>
      </div>
      {/* <div className="flex items-end justify-evenly">
        <Image className="flex-grow" width={"100%"} src={People} alt="People" />
        <span className="flex items-center justify-center h-14 w-14 bg-[#7F3DD2] rounded-full">
          <HiArrowUpLeft size={35} />
        </span>
      </div> */}
    </section>
  );
};

export default Hero;
