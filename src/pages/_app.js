import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7LV2F1R9TJ`}
      />
      <Script id="ga" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7LV2F1R9TJ', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
