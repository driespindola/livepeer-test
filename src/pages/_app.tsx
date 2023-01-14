import '../styles/globals.css'

import type { AppProps } from 'next/app';
import { lazy, Suspense } from 'react';

const Providers = lazy(() => import('../components/Providers'));

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Suspense>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Suspense>
  );
};

export default App;