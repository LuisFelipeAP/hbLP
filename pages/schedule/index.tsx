import Head from 'next/head'
import Link from 'next/link';

import styles from './index.module.scss';

import { Header } from '../../src/components/Header/Header'
import { Footer } from '../../src/components/Footer/Footer'
import { InlineWidget } from 'react-calendly';

export default function Home() {
    const calendlyUrl = "https://calendly.com/homebreezestagingcalendar/booking-flow-tank-water-heater-installation-dev"
    return (
        <div className="container">
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                <title>Schedule Your Water Heater Replacement</title>

                <meta content="Schedule your water heater installation online to book seamless service with our team of licensed installation experts." name="description"></meta>
                <meta content="Schedule Your Water Heater Replacement" property="og:title"></meta>
                <meta content="Schedule your water heater installation online to book seamless service with our team of licensed installation experts." property="og:description"></meta>
                <meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="og:image"></meta>
                <meta content="Schedule Your Water Heater Replacement" property="twitter:title"></meta>
                <meta content="Schedule your water heater installation online to book seamless service with our team of licensed installation experts." property="twitter:description"></meta>
                <meta content="https://uploads-ssl.webflow.com/61e0d485666ba00bd203bcb5/61ea850e20f364bf002dc839_hero-image.jpg" property="twitter:image"></meta>
                <meta property="og:type" content="website"></meta>
                <meta content="summary_large_image" name="twitter:card"></meta>
            </Head>

            <Header />

            <section className={styles.sectionContainer}>
                <main className={styles.innerContainer}>
                    <h1>Schedule now</h1>
                    <div className={styles.pageContent}>
                        <p className={styles.schedulingExplainer}>
                            After you book, we&apos;ll call you to confirm installation details and answer any questions you might have. Most installations last 2-4 hours for tanks & 6-10 hours for tankless.<br /><br />
                            Have questions now? Call us at <Link href="tel:+13237666344">(323) 766-6344</Link><br /><br />
                            By scheduling, you agree to read and accept our <Link href="/" target="_blank">terms of service</Link>.
                        </p>
                    </div>
                </main>
            </section>

            <InlineWidget
                url={calendlyUrl}
                styles={{ position: "relative", height: "650px" }}
                pageSettings={{ hideGdprBanner: true }}
            />

            <Footer />


        </div>
    )
}
