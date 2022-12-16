import React from 'react'
import Link from 'next/link';

import styles from './wehelp.module.scss';

export function WeHelp() {
  return (
    <section data-aos="fade" className={styles.sectionContainer}>
        <main className={styles.innerContainer}>
            <h2>Not sure which unit you need? We can help.</h2>
            <Link href="tel:+13237666344">
                <button>(323) 766-6344</button>
            </Link>
        </main>
    </section>
  )
}
