import '../styles/globals.css'
import {AppProvider} from '@shopify/polaris';
import type { AppProps } from 'next/app'
import translations from '@shopify/polaris/locales/en.json';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={translations}>
      <Component {...pageProps} />
    </AppProvider>
  )
}
