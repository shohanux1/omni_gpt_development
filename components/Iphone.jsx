"use client";

import Image from "next/image";
import Frame from "../public/iphone_frame.png";
import Wallpaper from "../public/Wallpaper.png";
import Messenger from "../public/Messenger.png";
import Whatsapp from "../public/WhatsApp.png";

const Iphone = () => {
  return (
    <div className="relative w-fit mb-16">
      <Image
        className="z-10"
        height={"100%"}
        width={"100%"}
        src={Frame}
        alt="Mobile"
      />
      <Image
        className="absolute top-[10px] left-[8px] -z-10"
        width={"100%"}
        src={Wallpaper}
      />
      <div className="flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full absolute -left-9 top-[35px]">
        <Image src={Messenger} />
      </div>
      <div className="flex items-center justify-center h-[88px] w-[88px] bg-white rounded-full absolute -right-11  bottom-[35px]">
        <Image src={Whatsapp} />
      </div>

      <div className="absolute top-[88px] -right-12 w-16 h-16 bg-[#FEEA00] rounded-t-full rounded-br-full -z-[20]"></div>
      <div className="absolute bottom-[88px] -left-10 w-16 h-16 bg-primary rounded-t-full rounded-br-full -z-[20]"></div>
    </div>
  );
};

export default Iphone;
