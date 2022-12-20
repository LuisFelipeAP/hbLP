import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';

import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { FadeContextProvider } from '../src/context/Fade';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppProvider i18n={translations}>
			<FadeContextProvider>
				<Component {...pageProps} />
			</FadeContextProvider>
		</AppProvider>
	)
}
