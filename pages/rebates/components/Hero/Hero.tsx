import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './hero.module.scss'

import rebatesHero from '../../assets/rebatesHero.jpeg'

export function Hero() {
  return (
    <section data-aos="fade" className={styles.sectionContainer}>
      <div className={styles.innerContainer}>
        <article className={styles.heroContent}>
          <div className={styles.content}>
            <h1>
              Save up to $1,300 on your tankless water heater installation.
            </h1>
            <p>
              Want a tankless water heater for a price similar to a tank
              replacement? We sell models that qualify for rebates to save you
              money.
            </p>
            <Link href="/selection">Get Prices</Link>
          </div>
          <div className={styles.heroImage}>
            <Image src={rebatesHero} alt="hero image" priority={true} />
          </div>
        </article>
      </div>
    </section>
  )
}
