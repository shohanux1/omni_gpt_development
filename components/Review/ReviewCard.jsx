"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import Avatar from "../../public/Wallpaper.png";

const ReviewCard = () => {
  return (
    <div className="bg-[#414651] p-8 rounded-md">
      <div>
        <HiStar color="#FADB14" size={25} />
      </div>

      <h3 className="font-medium my-5">
        OmniGPT has completely transformed the way my team works together.
      </h3>

      <p className="font-light">
        “With the ability to seamlessly communicate across multiple channels, we
        are able to collaborate in real-time and make decisions faster than
        ever. Plus, the AI-powered chatbot saves us time and resources by
        handling routine tasks and inquiries. I would highly recommend OmniGPT
        to any organization looking to improve their productivity and
        efficiency”
      </p>

      <div className="flex items-center gap-4 mt-6">
        <div className="h-12 w-12 rounded-full object-cover overflow-hidden">
          <Image src={Avatar} alt="avatar" />
        </div>
        <h1 className="font-medium">Shohan Khan</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
