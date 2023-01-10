import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Button from "../../Commons/Button";
import { useTheme } from "next-themes";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemsNav = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  const socialMedia = [
    {
      name: "Github",
      url: "https://github.com/wahyubudii",
      icon: AiFillGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/wahyubudiutomo/",
      icon: AiFillLinkedin,
    },
  ];

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return currentTheme === "dark" ? (
      <Button className="text-yellow-300" onClick={() => setTheme("light")}>
        <BsSunFill />
      </Button>
    ) : (
      <Button onClick={() => setTheme("dark")}>
        <BsFillMoonStarsFill />
      </Button>
    );
  };

  return (
    <div className="border-b-2 border-black dark:border-yellow-200 border-dashed z-10">
      <div className="container mx-auto dark:text-white">
        <div className="h-20 mx-10 sm:mx-20 lg:mx-24 xl:mx-40 flex items-center justify-between">
          <Link href="/" className="font-bold uppercase">
            Wahyu Budi Utomo
          </Link>
          <button className="block text-lg sm:hidden" onClick={handleSidebar}>
            <AiOutlineMenu />
          </button>
          <div className="hidden sm:inline-flex min-w-max flex items-center justify-end sm:space-x-5 lg:space-x-10">
            {renderThemeChanger()}
            {itemsNav.map((val, index) => {
              return (
                <Link
                  className="font-medium text-sm hover:underline transition easy-in easy-out"
                  key={index}
                  href={val.path}
                >
                  {val.name}
                </Link>
              );
            })}
            <div className="space-x-4 flex items-center justify-center ">
              {socialMedia.map((val, index) => {
                return (
                  <Link key={index} href={val.url} target={"_blank"}>
                    <val.icon
                      key={index}
                      className="text-black dark:text-white h-6 w-6"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div
            className={`${
              sidebar
                ? "inline-flex z-10 fixed top-0 right-0 border-l border-slate-300 dark:border-slate-500 transition ease-in-out"
                : "hidden"
            } w-8/12 h-full bg-white dark:bg-black/95`}
          >
            <div className="w-full py-3 flex flex-col items-end">
              <button className="h-14 w-14" onClick={handleSidebar}>
                <AiOutlineClose size={16} />
              </button>
              <div className="mt-7 text-sm font-semibold flex flex-col items-end w-full mx-10 space-y-4">
                {renderThemeChanger()}
                {itemsNav.map((val, index) => {
                  return (
                    <Link
                      key={index}
                      href={val.path}
                      className="border-b border-slate-400 pb-1"
                    >
                      {val.name}
                    </Link>
                  );
                })}
                <div className="pt-7 space-y-4 flex flex-col items-end justify-end">
                  {socialMedia.map((val, index) => {
                    return (
                      <Link key={index} href={val.url} target={"_blank"}>
                        <div className="rounded px-3.5 py-2 w-max bg-white border border-slate-300 flex items-center justify-center font-semibold text-black space-x-3">
                          <val.icon key={index} size={20} />
                          <p>{val.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
