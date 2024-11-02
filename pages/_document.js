import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the manifest file */}
        <link rel="manifest" href="/manifest.json" />

        
        {/* PWA icons */}
        <link rel="apple-touch-icon" href="/coffee.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/coffee.png" />
        
        {/* Meta tags for theme color */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
