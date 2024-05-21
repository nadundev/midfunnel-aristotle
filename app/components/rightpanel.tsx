import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Rightpanel = () => {
  return (
    <div className="h-full w-full px-4 py-2.5 border-l">
      <h2 className="text-xl text-gray-700 font-semibold">Details</h2>
      <div className="flex flex-col gap-5 pt-4">
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Point of contact
          </h4>
          <div className="flex gap-1">
            <div className="flex items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-brand-100 text-brand-700 text-xs">
                  ML
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Miri Ladomery</p>
              <p className="text-xs font-medium text-gray-500">
                Marketing Director - Growth & Acquisition
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Deal stage
          </h4>
          <p className="text-sm font-medium text-gray-700">Contract sent</p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Deal Value
          </h4>
          <p className="text-sm font-medium text-gray-700">$38,500</p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Deal Value
          </h4>
          <p className="text-sm font-medium text-gray-700">
            12th April, 2024 (3 weeks ago)
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Deal Value
          </h4>
          <p className="text-sm font-medium text-gray-700">1 week ago</p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            Deal Value
          </h4>
          <div className="flex gap-1">
            <Image src="/DealHPos.png" alt="thumbs-up" height="24" width="24" />
            <p className="text-sm font-medium text-gray-700 flex items-center">
              1 week ago
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="uppercase text-xs font-semibold text-gray-500">
            THE STORY SO FAR
          </h4>
          <p className="text-sm font-medium text-gray-700">
            The deal is now in the &ldquo;Contract Sent&rdquo; stage, and we&quot;re waiting for
            Miri to respond to the draft contract you sent a week ago. Over the
            past 3 weeks, you&quot;ve been actively engaging with Miri from Dropbox
            to explore a potential partnership. You&quot;ve had a productive meeting
            and a video call to dive into Dropbox&quot;s needs and discuss how
            Webflow can support them. You&quot;ve also sent a detailed email
            summarizing Webflow&quot;s offerings along with a draft contract that
            outlines proposed terms, pricing, and SLAs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightpanel;
