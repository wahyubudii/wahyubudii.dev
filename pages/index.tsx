import React from "react";
import ContactWhatsapp from "../components/Commons/ContactWhatsapp";
import Experiences from "../components/Sections/Experiences";
import Hero from "../components/Sections/Hero";
import Project from "../components/Sections/Projects";
import { MetaProps } from "../types";
import Layout from "../components/Layout/BaseLayout";

export default function index() {
  const meta: MetaProps = {
    title: "Wahyu Budi Utomo | Front-end Developer",
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/favicons/surprise.png",
    type: "website",
  };

  return (
    <Layout customMeta={meta}>
      <div>
        <div className="py-16 sm:py-20 sm:pb-14 lg:py-16 xl:py-20 lg:flex items-center justify-center">
          <Hero />
        </div>
        <Experiences />
        <Project />
        <ContactWhatsapp />
      </div>
    </Layout>
  );
}
