import { IconMenu2, IconCrossFilled } from "@tabler/icons-react";
import { Link } from "react-scroll";
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
    <nav className="flex items-center justify-end px-10 py-4 bg-white/50 backdrop-blur-sm sticky top-0 left-0 right-0 z-20 text-lg lg:text-2xl">
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
          "bg-black/50 h-screen invisible",
          "fixed top-0 right-0 left-0 bottom-0",
          "flex justify-end",
          {
            visible: isOpen,
          }
        )}
      >
        <ul
          className={cn(
            "items-center relative left-20",
            "flex flex-col",
            "bg-white w-fit p-3",
            "transition-all duration-[600ms] ease-in-out",
            {
              "left-0": isOpen,
            }
          )}
        >
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
    </nav>
  );
}

export default Navbar;
