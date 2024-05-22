import React from "react";
import Deal from "./deal";
import CircularProgressBar from "./progressbar";

const LeftPanel = () => {

  return (
    <div className="border-r">
      <div className="flex gap-4 p-4 shadow-sm">
        <CircularProgressBar text="MO" value={2} size={50} strokeWidth={6} />
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-medium">Your follow-ups for today</h4>
          <p className="text-xs">$404,500 of pipeline value</p>
        </div>
      </div>
      <div className="h-[calc(100vh_-_134px)] overflow-y-auto px-4">
        {deals.map((deal, index) => (
          <Deal key={index} {...deal} />
        ))}
      </div>
    </div>
  );
};

const deals = [
  {
    avatarSrc: "/DropBoxAvatar.png",
    avatarFallback: "DB",
    companyName: "Dropbox",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/DiscordAvatar.png",
    avatarFallback: "DD",
    companyName: "Discord",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/MixpanelsAvatar.png",
    avatarFallback: "MP",
    companyName: "Mixpanel",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/PWCAvatar.png",
    avatarFallback: "PW",
    companyName: "PWC",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/TEDAvatar.png",
    avatarFallback: "TD",
    companyName: "TED",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/TimesAvatar.png",
    avatarFallback: "NT",
    companyName: "New york times",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  },
  {
    avatarSrc: "/UpworkAvatar.png",
    avatarFallback: "UP",
    companyName: "Upwork",
    contractStatus: "Contract sent",
    contractValue: "$38.5K",
    timeSince: "1w"
  }
];

export default LeftPanel;