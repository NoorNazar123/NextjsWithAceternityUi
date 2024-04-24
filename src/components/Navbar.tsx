"use client"; // this use to make client side file
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} className="text-xl mx-4">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <div className="text-xl">
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex  flex-col space-y-4 text-sm py-2 px-4">
            <HoveredLink href="/courses">My courses</HoveredLink>
            <HoveredLink href="/courses">Javascript</HoveredLink>
            <HoveredLink href="/courses">React.js</HoveredLink>
            <HoveredLink href="/courses">Next.js</HoveredLink>
            <HoveredLink href="/courses">Tailwind</HoveredLink>
          </div>
        </MenuItem>
        </div>
        <Link href={"/contact"}>
          <div className="text-xl mx-4">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </div>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
