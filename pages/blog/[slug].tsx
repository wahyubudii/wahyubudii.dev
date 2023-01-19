import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout/BaseLayout";
import { MetaProps } from "../../types";
import Button from "../../components/Commons/Button";
import Link from "next/link";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "next-share";

const components = {
  Image,
  Button,
};

type PostPageProps = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    tags: string | any;
  };
  mdxSource: MDXRemoteSerializeResult;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts/blog"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "posts/blog", `${slug}.mdx`)
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: frontMatter,
  });

  return {
    props: {
      slug,
      frontMatter,
      mdxSource,
    },
  };
};

export default function PostDetail({
  slug,
  frontMatter,
  mdxSource,
}: PostPageProps): JSX.Element {
  const meta: MetaProps = {
    title: `${frontMatter.title}`,
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/favicons/surprise.png",
    type: "article",
  };

  const shareLink = [
    { shareButton: WhatsappShareButton, icon: WhatsappIcon },
    { shareButton: FacebookShareButton, icon: FacebookIcon },
    { shareButton: TwitterShareButton, icon: TwitterIcon },
    { shareButton: LinkedinShareButton, icon: LinkedinIcon },
  ];

  return (
    <Layout customMeta={meta}>
      <div className="lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="pt-6 flex items-center font-medium text-xs 2xl:text-sm text-slate-500 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <span className="mx-3 after:content-['/']"></span>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
          <span className="mx-3 after:content-['/']"></span>
          <Link href="#" className="text-blue-500 dark:text-blue-400">
            {frontMatter.title}
          </Link>
        </div>
        <div className="pt-8 sm:pt-12 pb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
            {frontMatter.title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            {frontMatter.date}
          </p>
          <div className="my-5 flex items-center gap-4">
            {shareLink.map((val, index) => {
              return (
                <val.shareButton
                  key={index}
                  url={`https://wahyubudii-dev.vercel.app/blog/${slug}`}
                  title={frontMatter.title}
                  blankTarget={true}
                  separator=": "
                >
                  <val.icon size={32} round />
                </val.shareButton>
              );
            })}
            {/* {shareLink.map((val, index) => {
              return (
                <Link
                  key={index}
                  className="rounded-full border p-2 bg-white"
                  href={val.link}
                >
                  <val.icon size={20} color={val.color} />
                </Link>
              );
            })} */}
          </div>
          <div className="prose dark:prose-dark font-sans max-w-full text-justify text-sm xl:text-lg mt-5">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
