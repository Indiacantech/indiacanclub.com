import '../styles/global.css';

import { StoreProvider } from 'easy-peasy';
import type { AppProps } from 'next/app';

import store from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProvider store={store}>
    <Component {...pageProps} />
  </StoreProvider>
);

export default MyApp;
