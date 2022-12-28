import React from 'react'
import Link from 'next/link'

import styles from './getprices.module.scss'

export function GetPrices() {
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
