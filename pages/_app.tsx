import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import Script from 'next/script'

import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { FadeContextProvider } from '../src/context/Fade';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				id='google-analytics'
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
					!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="mJCv7H7jRKdEZc9ohrFHBgQsBA8ZZDlD";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("mJCv7H7jRKdEZc9ohrFHBgQsBA8ZZDlD");
  analytics.page();
  }}();`,
				}}
			/>
			<AppProvider i18n={translations}>
				<FadeContextProvider>
					<Component {...pageProps} />
				</FadeContextProvider>
				<Script
					id='landbot-livechat'
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: 
						`
						window.addEventListener('mouseover', initLandbot, { once: true });
						window.addEventListener('touchstart', initLandbot, { once: true });
						var myLandbot;
						function initLandbot() {
						  if (!myLandbot) {
							var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
							s.addEventListener('load', function() {
							  var myLandbot = new Landbot.Livechat({
								configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-1417971-45BTTSPT7VPSI4AV/index.json',
							  });
							});
							s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
							var x = document.getElementsByTagName('script')[0];
							x.parentNode.insertBefore(s, x);
						  }
						}
						`
					}}
				/>
			</AppProvider>
		</>
	)
}
