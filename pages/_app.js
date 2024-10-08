// pages/_app.js
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react'; // Ensure this line is correct

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
              url: './favicon.ico',
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
      <Analytics /> 
    </>
  );
};

export default MyApp;
