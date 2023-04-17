import Container from "./Container";
import TextHeadline from "./TextHeadline";
import Button from "./Button";
import Image from "next/image";

import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <section className="bg-black py-10 text-center lg:text-start mt-60">
      <div className="-mt-36">
        <Container>
          <div className="bg-[#05E283] px-5 py-9 items-center rounded-md lg:flex lg:py-20 lg:px-20 lg:justify-between md:space-y-10 lg:space-y-0">
            <span className="block sm:mb-10">
              <TextHeadline
                title='"Join the OmniGPT </br> community" and transform </br> the way you collaborate!'
                textColor="black"
                size="sm"
              />
            </span>
            <div className="h-full">
              <Button type={"secondary"} title="Get Started Now" />
            </div>
          </div>

          <div className="mt-20">
            <Image src={Logo} alt="Logo" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
