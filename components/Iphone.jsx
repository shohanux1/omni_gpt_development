"use client";

import Image from "next/image";
import Frame from "../public/iphone_frame.png";
import Wallpaper from "../public/Wallpaper.png";
import Messenger from "../public/Messenger.png";
import Whatsapp from "../public/WhatsApp.png";

const Iphone = () => {
  return (
    <div className="relative w-fit mt-12 md:mt-28 lg:mt-0">
      <Image
        className="z-10 h-96 w-full object-cover lg:h-full"
        src={Frame}
        alt="Mobile"
      />
      <Image
        className="absolute top-[10px] left-[8px] -z-10 h-[365px] w-[175px] lg:h-full lg:w-full object-cover lg:object-none lg:left-0 lg:top-0"
        src={Wallpaper}
      />
      <div className="flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full absolute -left-9 top-[35px]">
        <Image src={Messenger} alt="Messenger Logo" />
      </div>
      <div className="flex items-center justify-center h-[88px] w-[88px] bg-white rounded-full absolute -right-11  bottom-[35px]">
        <Image src={Whatsapp} alt="Whatsapp Logo" />
      </div>

      <div className="absolute top-[88px] -right-12 w-16 h-16 bg-[#FEEA00] rounded-t-full rounded-br-full -z-[20]"></div>
      <div className="absolute bottom-[88px] -left-10 w-16 h-16 bg-primary rounded-t-full rounded-br-full -z-[20]"></div>
    </div>
  );
};

export default Iphone;
