import React from "react";
import { MetaProps } from "../types";
import Layout from "../components/Layout/BaseLayout";
import Error from "../components/Sections/Error";

export default function Custom404() {
  const meta: MetaProps = {
    title: "Page Not Found!",
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/favicons/surprise.png",
    type: "website",
  };

  return (
    <Layout center customMeta={meta}>
      <Error />
    </Layout>
  );
}
