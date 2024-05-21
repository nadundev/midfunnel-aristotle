import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarBlock = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-gray-700 text-md font-medium">Josh Braun</p>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback className="bg-brand-100 text-brand-700">JB</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarBlock;
