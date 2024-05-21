import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Deal = () => {
  return (
    <div className="pb-3 border-b">
    <div className="flex justify-between px-3 py-2 rounded-xl">
        <div className="flex gap-2">
      <div className="flex items-center">
        <Avatar className="bg-white">
          <AvatarImage src="/DropBoxAvatar.png" />
          <AvatarFallback className="bg-white text-brand-700">
            DB
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-700">Dropbox</p>
        <div className="flex items-center gap-1">
            <p className="flex items-center text-xs font-medium text-gray-700">Contract sent</p>
            <div className="h-1 w-1 bg-gray-700 rounded-sm"></div>
            <p className="flex items-center text-xs font-medium text-gray-700">$38.5K</p>
        </div>
      </div>
      </div>
      <div className="flex items-center">
        <p className="text-sm font-medium text-gray-500">1w</p>
      </div>
    </div>
    </div>
  );
};

export default Deal;
