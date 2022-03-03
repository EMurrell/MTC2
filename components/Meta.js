/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";

export default function Meta() {
  return (
    <Head>
      <title>Mason&apos;s Touch Construction</title>
      <meta name="description" content="Masonry and Foundation Repair" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/mtc-preview.jpg" />
      <meta property="og:title" content="Mason's Touch Construction" />
      <meta property="og:description" content="Masonry & Foundation Repair" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
