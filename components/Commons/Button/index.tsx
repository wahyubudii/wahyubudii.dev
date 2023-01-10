import React from "react";

type ButtonProps = {
  children: any;
  text?: string;
  className?: string;
  onClick?: any;
};

export default function Button({
  children,
  text,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`p-2 rounded-md border border-slate-300 dark:border-slate-700 ${className}`}
      onClick={onClick}
    >
      {text ? text : children}
    </button>
  );
}
