"use client";

import Button from "../components/Button";
import Image from "next/image";
import Circle from "../public/Illustration.svg";
import HeaderIllustration from "../public/Header Illustration.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center justify-between">
      <div>
        <div className="relative my-8 lg:mt-10">
          <h1 className="text-4xl font-medium z-10 md:text-[80px] md:leading-none">
            Bring the power <br /> of AI to your <br /> conversations
          </h1>
          <Image
            className="absolute left-0 -bottom-3 -z-10 md:w-[555px] md:-bottom-7"
            src={Circle}
            alt="Illustration"
          />
        </div>

        <h2 className="text-2xl font-medium">
          Work Faster, Smarter, and Better Together
        </h2>

        <p className="font-light my-3 mb-6">
          Experience the power of AI language models with OmniGPT. <br /> Our
          chat platform provides seamless communication <br /> across multiple
          channels.
        </p>
        {/* <h2 className="text-xl font-medium mb-5">
          Try the OmniGPT for free. 15-day trial, no credit card required.
        </h2> */}

        <div className="mb-10">
          <Button title="Start your free trial" type={"primary"} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Image
          className="hidden ml-10 w-[650px] h-full lg:block"
          src={HeaderIllustration}
          alt="Header Illustration"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
