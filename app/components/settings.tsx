import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Settings = () => {
  return (
    <div className="flex">
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2.5 focus-within:outline-none focus:outline-none focus-visible:outline-none"><Cog6ToothIcon className="h-5 w-5" /></DropdownMenuTrigger>
    </DropdownMenu>
    </div>
  );
};

export default Settings;
