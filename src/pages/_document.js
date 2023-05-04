import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicon/safari-pinned-tab.svg"
          color="#0000ff"
        />
        <meta name="apple-mobile-web-app-title" content="MailTime AI" />
        <meta name="application-name" content="MailTime AI" />
        <meta name="msapplication-TileColor" content="#0000ff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+HK:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700;900&family=Source+Sans+Pro:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
