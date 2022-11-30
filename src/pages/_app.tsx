import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
