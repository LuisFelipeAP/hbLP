import Head from 'next/head'

import { Header } from '../../src/components/Header/Header'
import { Footer } from '../../src/components/Footer/Footer'
import { Hero } from '../../src/components/RebatesPage/Hero/Hero'
import { RebatesAvailable } from '../../src/components/RebatesPage/RebatesAvailable/RebatesAvailable'
import { RebatesTanklessGas } from '../../src/components/RebatesPage/RebatesTankslessGas/RebatesTanklessGas'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                <title>HomeBreeze Water Heaters</title>

                <meta content="See all-inclusive prices for gas water heaters, electric water heaters, and tankless water heaters. These prices include your new unit, delivery, installation, all necessary parts, and disposal of your old unit." name="description" />
                <meta content="HomeBreeze Water Heaters" property="og:title" />
                <meta content="See all-inclusive prices for gas water heaters, electric water heaters, and tankless water heaters. These prices include your new unit, delivery, installation, all necessary parts, and disposal of your old unit." property="og:description" />
                <meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="og:image" />
                <meta content="HomeBreeze Water Heaters" property="twitter:title" />
                <meta content="See all-inclusive prices for gas water heaters, electric water heaters, and tankless water heaters. These prices include your new unit, delivery, installation, all necessary parts, and disposal of your old unit." property="twitter:description" />
                <meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
            </Head>

            <Header />

            <Hero />
            <RebatesAvailable />
            <RebatesTanklessGas />

            <Footer />
        </div>
    )
}
