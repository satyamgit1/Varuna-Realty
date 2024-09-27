// pages/_app.js
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Varuna Realty - Your Trusted Real Estate Partner"
        description="Explore residential and commercial properties in Naigaon, Vasai, and Palghar. Get expert investment consulting and secure the best property deals."
        openGraph={{
          url: 'https://www.varunarealty.com/',
          title: 'Varuna Realty',
          description: 'Explore residential and commercial properties in Naigaon, Vasai, and Palghar.',
          images: [
            {
              url: 'https://www.varunarealty.com/_next/image?url=%2Fnav_logo.webp&w=256&q=75',
              width: 800,
              height: 600,
              alt: 'Varuna Realty',
            },
          ],
          site_name: 'Varuna Realty',
        }}
        twitter={{
          handle: '@yourtwitterhandle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
      <Analytics /> {/* Add Vercel Analytics component here */}
    </>
  );
};

export default MyApp;
