import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      test: true,
    },
  };
};

export default MyApp;
