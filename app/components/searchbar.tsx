import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";

const Searchbar = () => {
  return (
    <div className="relative">
      <Input className="relative pl-8 focus:ring-0 focus-visible:ring-0 rounded-[50px] min-w-[260px] h-[32px] bg-gray-100 text-gray-500" inputMode="search" placeholder="Search deals or leads" />
      <MagnifyingGlassIcon className="h-5 w-5 mr-3 text-gray-500 absolute -translate-y-2/4 left-2 top-2/4" />
    </div>
  );
};

export default Searchbar;
