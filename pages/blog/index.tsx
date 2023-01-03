import React from 'react'
import Maintenance from '../../components/Layout/Maintenance'
import { MetaProps } from '../../types'
import { NextSeo } from 'next-seo'

export default function Blog() {
  const meta: MetaProps = {
    title: "Blog Page",
    description: "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/logo.png",
    type: "website"
  }

  return (
    <div>
      <NextSeo title={meta.title} description={meta.description} canonical={meta.favicon}/>
      <Maintenance />
    </div>
  )
}
