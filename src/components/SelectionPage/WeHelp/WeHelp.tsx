import React, { useEffect } from 'react'
import Link from 'next/link';
import Aos from 'aos';

import styles from './wehelp.module.scss';
import 'aos/dist/aos.css';

export function WeHelp() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

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
