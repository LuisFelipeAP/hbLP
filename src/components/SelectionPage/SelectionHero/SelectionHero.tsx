import React from 'react'
import Image from 'next/image';

import styles from './selectionhero.module.scss';

import selectionHero from '../../../assets/selectionHero.jpeg';

export function SelectionHero() {
    return (
        <section data-aos="fade" className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.heroContent}>
                    <h1>All-Inclusive Prices</h1>
                    <p>HomeBreeze prices include everything needed to install your new water heater up to code. What you see is what you pay, with no added charges and no surprises!</p>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src={selectionHero}
                        alt="hero image"
                    />
                </div>
            </main>
        </section>
    )
}
