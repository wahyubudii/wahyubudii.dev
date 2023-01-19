import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

type WhatsappProps = {
  text?: string;
  show?: boolean;
};

export default function ContactWhatsapp({ text, show }: WhatsappProps) {
  return (
    <Link
      href={`https://wa.me/+6285856196359?text=${text}`}
      target={"_blank"}
      className="fixed bottom-8 right-8 rounded-full group z-50"
    >
      <div className="flex items-center justify-center p-2 bg-green-500 rounded-full">
        <IoLogoWhatsapp
          className="animate-wave h-6 w-6 xl:h-8 xl:w-8"
          color="white"
          fontWeight={8}
        />
        {show && (
          <p className="mx-2 text-white text-sm font-semibold hidden group-hover:block">
            Chat on whatsapp!
          </p>
        )}
      </div>
    </Link>
  );
}
