import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MiddlePanel = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 flex justify-between p-3 border-b">
        <div className="flex gap-2.5">
          <div className="my-auto mx-0">
            <Image
              src="/DropBoxAvatar.png"
              alt="company"
              height="32"
              width="32"
            />
          </div>
          <p className="text-md font-medium text-gray-700 flex items-center">
            Dropbox
          </p>
        </div>
        <div>
          <Button variant="outline">Snooze</Button>
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
