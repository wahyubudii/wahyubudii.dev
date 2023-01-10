import React from "react";
import { MetaProps } from "../../types";
import Layout from "../../components/Layout/BaseLayout";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";

type PostType = {
  frontMatter: {
    date: string;
    description: string;
    tags: string[] | any;
    thumbnailUrl: string;
    title: string;
  };
  slug: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts/snippets"));

  const posts = files.map((filename: any) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "posts/snippets", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }: any): JSX.Element {
  const meta: MetaProps = {
    title: "Blog | Wahyu Budi Utomo",
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/logo.png",
    type: "website",
  };

  console.log(posts);

  return (
    <Layout customMeta={meta}>
      <div className="pt-6 flex items-center font-medium text-xs 2xl:text-sm text-slate-500 dark:text-slate-300">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <span className="mx-3 after:content-['/']"></span>
        <Link href="#" className="text-blue-500 dark:text-blue-400">
          Blog
        </Link>
      </div>
      <div className="pt-8 md:pt-10 2xl:pt-14 pb-8">
        <h1 className="text-4xl font-bold">Code Tips</h1>
        <p className="pb-10 pt-4 text-sm lg:text-base">
          Here is a collection of notes that I often use in making programs that
          might be useful for you
        </p>
        <div className="grid lg:grid-cols-2 gap-5">
          {posts.map((val: any, index: number) => {
            return (
              <Link
                href={`/blog/${val.slug}`}
                key={index}
                className="relative flex items-center rounded-lg border-2 border-dashed border-slate-400 dark:border-white p-5 hover:scale-105 transition hover:bg-green-50 dark:hover:bg-slate-700 dark:text-white"
              >
                <div className="flex gap-6 md:gap-7">
                  <div className="flex-none bg-slate-100 rounded-full h-20 w-20 md:h-24 md:w-24 p-1 flex overflow-hidden">
                    <Image
                      className="self-center"
                      src={val.frontMatter.thumbnailUrl}
                      alt="photo"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="space-y-1 w-fit">
                    <p className="text-lg md:text-xl font-bold">
                      {val.frontMatter.title}
                    </p>
                    <p className="pt-1 text-xs text-slate-500 dark:text-slate-200 md:text-sm pb-2">
                      {val.frontMatter.description}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      {val.frontMatter.tags.map(
                        (tag: string, index: number) => {
                          return (
                            <p
                              key={index}
                              className="text-[8px] md:text-[9px] xl:text-[10px] capitalize rounded-full bg-blue-100 font-semibold text-blue-600 w-fit px-2 py-0.5 md:px-3 md:py-1"
                            >
                              {tag}
                            </p>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                <p className="absolute -top-2 left-0 px-2.5 text-[10px] text-green-700 bg-green-100 dark:text-green-700 dark:bg-green-100 rounded">
                  {val.frontMatter.date}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
