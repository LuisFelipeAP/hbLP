import React, { useEffect } from 'react'
import Link from 'next/link';
import Aos from 'aos';

import styles from './getprices.module.scss';
import 'aos/dist/aos.css';

export function GetPrices() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

  return (
    <section data-aos="fade" className={styles.sectionContainer}>
        <main className={styles.innerContainer}>
            <h2>Ready to get your new water heater?</h2>
            <Link href="/selection">
                <button>Get Prices</button>
            </Link>
        </main>
    </section>
  )
}
