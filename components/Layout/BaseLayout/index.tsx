import React from "react";
import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import Head from "next/head";
import { LayoutProps } from "../../../types";

export default function Layout({
  children,
  customMeta,
  center,
}: LayoutProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{customMeta.title}</title>
        <meta name="description" content={customMeta.description} />
        <link rel="shortcut icon" href={customMeta.favicon} />
      </Head>
      {/* paste this ig want scrollhide but have problem with rough notation `h-screen overflow-y-scroll scrollbar-hide` */}
      <div className="transition duration-500 ease-in-out bg-gray-50 dark:bg-black z-10">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main
            className={`flex-grow flex ${
              center && "items-center"
            } justify-center`}
          >
            <div className="container mx-auto dark:text-white">
              <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
        {/* <div className="absolute top-0 h-72 w-full bg-gradient-to-r from-sky-200 via-gray-400 to-sky-400 blur-2xl opacity-30 dark:opacity-20 z-0"></div> */}
      </div>
    </div>
  );
}
