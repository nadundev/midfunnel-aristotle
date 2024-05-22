import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface DealProps {
  avatarSrc: string;
  avatarFallback: string;
  companyName: string;
  contractStatus: string;
  contractValue: string;
  timeSince: string;
}

const Deal: React.FC<DealProps> = ({
  avatarSrc,
  avatarFallback,
  companyName,
  contractStatus,
  contractValue,
  timeSince,
}) => {
  return (
    <div className="pb-3 border-b">
      <div className="flex justify-between px-3 py-2 rounded-xl">
        <div className="flex gap-2">
          <div className="flex items-center">
            <Avatar className="bg-white border">
              <AvatarImage src={avatarSrc} />
              <AvatarFallback className="bg-white text-brand-700">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-700">{companyName}</p>
            <div className="flex items-center gap-1">
              <p className="flex items-center text-xs font-medium text-gray-700">
                {contractStatus}
              </p>
              <div className="h-1 w-1 bg-gray-700 rounded-sm"></div>
              <p className="flex items-center text-xs font-medium text-gray-700">
                {contractValue}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-500">{timeSince}</p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
