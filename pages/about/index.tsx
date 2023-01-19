import React from "react";
import Maintenance from "../../components/Sections/Maintenance";
import { MetaProps } from "../../types";
import Layout from "../../components/Layout/BaseLayout";

export default function About() {
  const meta: MetaProps = {
    title: "About Page",
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/favicons/surprise.png",
    type: "website",
  };

  return (
    <Layout center customMeta={meta}>
      <Maintenance />
    </Layout>
  );
}
