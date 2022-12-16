import React, { useEffect } from 'react'
import Aos from 'aos';

import styles from './customerloves.module.scss';
import 'aos/dist/aos.css';

import { EmbedSocial } from '../../../utils/embedsocial';

export function CustomerLoves() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <section data-aos="fade" id='customers-love-us' className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.titleContainer}>
                    <h2>Customers Love Us</h2>
                    <p>5.0 out of 5.0 stars</p>
                </div>
                <div className={styles.googleTestimonials}>
                    <EmbedSocial refId="3043a5ff74968ab45d4e206b8cfab0765e7075a0"/>
                </div>
            </main>
        </section>
    )
}
