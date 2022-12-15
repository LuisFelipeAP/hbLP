import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { Header } from '../src/components/Header/Header'
import { HomeHero } from '../src/components/HomePage/Hero/Hero'
import { Advantages } from '../src/components/HomePage/Advantages/Advantages'
import { CustomerLoves } from '../src/components/HomePage/CustomerLoves/CustomerLoves'
import { Prices } from '../src/components/HomePage/Prices/Prices'
import { Schedule } from '../src/components/HomePage/Schedule/Schedule'
import { GetPrices } from '../src/components/HomePage/GetPrices/GetPrices'
import { Footer } from '../src/components/Footer/Footer'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />

				<title>HomeBreeze - Same Day Water Heater Replacement</title>

				<link href="https://uploads-ssl.webflow.com/622a6a939ed44d43f1c4f5c3/62acbe05d658cb6e04e65baf_favicon_32.png" rel="shortcut icon" type="image/x-icon" />

				<meta content="HomeBreeze - Same Day Water Heater Replacement" property="og:title" />
				<meta content="Book online. No waiting for call-backs - just upfront, fixed prices that save you $500+." property="og:description" />
				<meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="og:image" />
				<meta content="HomeBreeze - Same Day Water Heater Replacement" property="twitter:title" />
				<meta content="Book online. No waiting for call-backs - just upfront, fixed prices that save you $500+." property="twitter:description" />
				<meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="twitter:image" />
			</Head>

			<Header />

			<HomeHero />
			<Advantages />
			<CustomerLoves />
			<Prices />
			<Schedule />
			<GetPrices />

			<Footer />

		</div>
	)
}
