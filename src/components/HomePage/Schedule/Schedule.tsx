import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from './schedule.module.scss';

import checkIcon from '../../../assets/checkIcon.svg';

import paymentIcon from '../../../assets/paymentIcon.svg';

export function Schedule() {
    return (
        <section data-aos="fade" className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.headline}>
                    <h2>Schedule an Installation Now</h2>
                    <p>Book online and we‘ll call you within minutes to confirm price and installation details.</p>
                </div>
                <div className={styles.infoCards}>
                    <div className={styles.infoCard}>
                        <Image
                            src={checkIcon}
                            alt="check icon"
                        />
                        <div className={styles.cardContent}>
                            <h3>What&apos;s included?</h3>
                            <p>
                                New water heater<br />
                                Delivery<br />
                                Licensed plumber installation<br />
                                All parts needed for installation<br />
                                Free draining, hauling, and disposal of your old unit<br />
                                Assistance filing for local permits, when needed
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <Image
                            src={paymentIcon}
                            alt="payment icon"
                        />
                        <div className={styles.cardContent}>
                            <h3>Pay after installation</h3>
                            <p>
                                No upfront payments — pay with <br />
                                credit, debit or check after the <br />
                                installation
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/selection" className={styles.cta}>
                    <button>View All Prices</button>
                </Link>
            </main>
        </section>
    )
}
