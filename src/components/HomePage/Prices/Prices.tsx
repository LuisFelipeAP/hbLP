import React from 'react'
import Link from 'next/link';

import styles from './prices.module.scss';

export function Prices() {
    return (
        <section data-aos="fade" className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.headline}>
                    <h2>All-Inclusive Prices</h2>
                    <p>
                        We offer upfront prices when you answer a few questions online.<br />
                        We honor our online prices, even if it means taking a loss.
                    </p>
                </div>
                <div className={styles.plans}>
                    <div className={styles.plan}>
                        <Link href="/selection#electric-tanks">
                            <h3>Electric Water Heaters</h3>
                            <p>starting at</p>
                            <span>$1,599</span>
                            <button>View Details</button>
                        </Link>
                    </div>
                    <div className={styles.plan}>
                        <Link href="/selection#gas-tanks">
                            <h3>Gas Tank Water Heaters</h3>
                            <p>starting at</p>
                            <span>$1,899</span>
                            <button>View Details</button>
                        </Link>
                    </div>
                    <div className={styles.plan}>
                        <Link href="/selection#tankless">
                            <h3>Tankless Water Heaters</h3>
                            <p>starting at</p>
                            <div className={styles.priceWrapper}>
                                <span>$2,099</span>
                                <span className={styles.asterisk}>*</span>
                            </div>
                            <button>View Details</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.includes}>
                    <span>Included:</span>
                    <ul>
                        <li>Water Heater</li>
                        <li>Delivery</li>
                        <li>Installation</li>
                        <li>Parts</li>
                        <li>Disposal</li>
                    </ul>
                </div>
                <p className={styles.note}>*after $800-1,000 in rebates & $300 in federal tax credits</p>
            </main>
        </section>
    )
}
