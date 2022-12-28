import Head from 'next/head'

import styles from './index.module.css'

import { Header } from '../../src/components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Advantages } from './components/Advantages/Advantages'
import { CustomerLoves } from './components/CustomerLoves/CustomerLoves'
import { Prices } from './components/Prices/Prices'
import { Schedule } from './components/Schedule/Schedule'
import { GetPrices } from './components/GetPrices/GetPrices'
import { Footer } from '../../src/components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <title>HomeBreeze - Same Day Water Heater Replacement</title>

        <meta
          content="Book online. No waiting for call-backs - just upfront, fixed prices that save you $500+."
          property="og:description"
        />
        <meta
          content="HomeBreeze - Same Day Water Heater Replacement"
          property="og:title"
        />
        <meta
          content="Book online. No waiting for call-backs - just upfront, fixed prices that save you $500+."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg"
          property="og:image"
        />
        <meta
          content="Book online. No waiting for call-backs - just upfront, fixed prices that save you $500+."
          property="twitter:description"
        />
        <meta
          content="HomeBreeze - Same Day Water Heater Replacement"
          property="twitter:title"
        />
        <meta
          content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg"
          property="twitter:image"
        />
      </Head>

      <Header />

      <Hero />
      <Advantages />
      <CustomerLoves />
      <Prices />
      <Schedule />
      <GetPrices />

      <Footer />
    </div>
  )
}
