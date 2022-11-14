import type { AppProps } from 'next/app';

import { GlobalProvider } from 'context/GlobalContext';

import 'styles/globals.css';
import 'focus-visible';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
