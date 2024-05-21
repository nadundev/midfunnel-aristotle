import Image from "next/image";
import React from "react";
import Searchbar from "./searchbar";
import TotalDeals from "./totaldeals";
import AvatarBlock from "./avatar";
import Settings from "./settings";

const Header = () => {
  return (
    <div className="bg-white h-[56px] border-b-[1px] flex items-center px-6 justify-between">
      <div className="min-w-[368px]">
        <Image
          className="h-[20px] w-auto"
          src="/logo.png"
          alt="logo"
          height="20"
          width="110"
        />
      </div>
      <Searchbar />
      <div className="flex gap-4">
        <TotalDeals />
        <AvatarBlock />
        <Settings />
      </div>
    </div>
  );
};

export default Header;
