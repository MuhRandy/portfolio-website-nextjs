import { IconMenu2, IconCrossFilled } from "@tabler/icons-react";
import { Link } from "react-scroll";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

function Navbar() {
  const navs = [
    {
      link: "home",
      name: "Home",
      offset: -70,
    },
    {
      link: "about",
      name: "About",
      offset: -130,
    },
    {
      link: "skill-and-experience",
      name: "Skill and Experience",
      offset: -70,
    },
    {
      link: "my-work",
      name: "My Work",
      offset: -70,
    },
    {
      link: "my-blog",
      name: "My Blog",
      offset: -70,
    },
    {
      link: "contact",
      name: "Contact",
      offset: -250,
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuHandler = () => {
    setIsOpen(true);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-end px-10 py-4 bg-white/50 backdrop-blur-sm sticky top-0 left-0 right-0 z-10 text-lg lg:text-2xl">
      <ul className="md:flex items-center gap-4 hidden">
        {navs.map((nav: { link: string; name: string; offset: number }) => {
          return (
            <li key={nav.link}>
              <Link
                activeClass="font-bold"
                className="cursor-pointer"
                to={nav.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={nav.offset}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <IconMenu2 className="md:hidden" onClick={menuHandler} />
      {/* Menu on Tablet or Smartphone */}
      <div
        onClick={closeMenuHandler}
        className={cn(
          "bg-black/50 z-10 fixed top-0 right-0 left-0 h-screen flex justify-end",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul className="bg-white w-fit flex flex-col items-center p-3 relative">
          <IconX
            className="absolute top-1 right-1 cursor-pointer"
            onClick={closeMenuHandler}
          />
          <li className="text-3xl mb-3">Menu</li>
          {navs.map((nav: { link: string; name: string; offset: number }) => {
            return (
              <>
                <li>
                  <hr className="border-black w-[200px] my-2" />
                </li>
                <li key={nav.link}>
                  <Link
                    onClick={closeMenuHandler}
                    activeClass="font-bold"
                    className="cursor-pointer"
                    to={nav.link}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={nav.offset}
                  >
                    {nav.name}
                  </Link>
                </li>
              </>
            );
          })}
          <li>
            <hr className="border-black w-[200px] my-2" />
          </li>
        </ul>
      </div>
      {/* <Drawer>
        <DrawerTrigger>
          <IconMenu2 className="md:hidden" />
        </DrawerTrigger>
        <DrawerContent className="top-0 right-0 mt-0 ml-[35vw]">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <ul>
            {navs.map((nav: { link: string; name: string; offset: number }) => {
              return (
                <li key={nav.link}>
                  <Link
                    activeClass="font-bold"
                    className="cursor-pointer"
                    to={nav.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={nav.offset}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </DrawerContent>
      </Drawer> */}
    </nav>
  );
}

export default Navbar;
