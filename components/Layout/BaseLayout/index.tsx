import React from 'react'
import Header from '../../Sections/Header'
import Footer from '../../Sections/Footer'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode,
  customMeta?: any
}

export default function Layout({ children, customMeta }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{customMeta.title}</title>
        <meta name="description" content={customMeta.description} />
        <link rel="shortcut icon" href={customMeta.favicon} />
      </Head>
      <div className='bg-gray-50 dark:bg-black'>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-grow'>
            <div className='container mx-auto dark:text-white'>
              <div className='mx-10 sm:mx-20 lg:mx-24 xl:mx-40'>
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}