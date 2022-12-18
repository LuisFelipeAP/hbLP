import React from 'react'

import styles from './customerloves.module.scss';

import { EmbedSocial } from '../../../utils/embedsocial';

export function CustomerLoves() {
    return (
        <section data-aos="fade" id='customers-love-us' className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.titleContainer}>
                    <h2>Customers Love Us</h2>
                    <p>5.0 out of 5.0 stars</p>
                </div>
                <div className={styles.googleTestimonials}>
                    <EmbedSocial refId="woJJbt6NdSWYySY2xKHTVkNBVzU5EQHPwPYHnlawRgj45LFw05"/>
                </div>
            </main>
        </section>
    )
}
