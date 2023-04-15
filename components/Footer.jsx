import React from "react";
import Container from "./Container";
import TextHeadline from "./TextHeadline";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="bg-black py-10 text-center mt-60">
      <div className="-mt-36">
        <Container>
          <div className="bg-[#05E283] px-5 py-9  rounded-md `">
            <TextHeadline
              title='"Join the OmniGPT" and transform the way you collaborate!'
              textColor="black"
              size="sm"
            />

            <Button type="secondary" title="Get Started Now" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
