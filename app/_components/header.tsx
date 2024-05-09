import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="FS Food" height={30} width={130} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};
