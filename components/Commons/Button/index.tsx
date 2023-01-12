import React from "react";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";

type ButtonProps = {
  children: any;
  className?: string;
  onClick?: any;
  prevPage?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  prevPage,
}: ButtonProps) {
  return (
    <button
      className={
        prevPage
          ? ``
          : `p-2 w-fit h-fit rounded-md border border-slate-300 dark:border-slate-700 ${className}`
      }
      onClick={prevPage ? () => Router.back() : onClick}
    >
      {prevPage ? (
        <div className="border border-slate-200 dark:border-slate-500 py-2 px-3 xl:px-4 rounded-md flex justify-between items-center font-semibold xl:text-lg dark:hover:text-white group">
          <IoIosArrowBack className="text-base mr-2 group-hover:text-black dark:group-hover:text-white" />
          {/* <span className="mr-3 after:content-['<']"></span> */}
          <p className="m-0 mr-1">{children}</p>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
