import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ParallaxProvider } from 'react-scroll-parallax';

import '@/styles/globals.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <ThemeProvider>
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_MEASUREMENT_ID}
        />
        <Seo />
        <Component {...pageProps} />
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
