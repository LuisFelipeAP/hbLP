import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './hero.module.scss'

import heroImage from '../../assets/heroImage.jpeg'
import googleLogo from '../../assets/googleLogo.svg'
import googleReviewStar from '../../assets/googleReviewStar.svg'

export function Hero() {
  return (
    <section data-aos="fade" className={styles.sectionContainer}>
      <main className={styles.innerContainer}>
        <article className={styles.heroContent}>
          <h1>Replace your water heater quickly.</h1>
          <p>
            Get transparent prices and instant scheduling, from SoCal’s top
            water heater experts.
          </p>
          <div className={styles.heroCTA}>
            <Link href="/selection" className={styles.primary}>
              Get Prices
            </Link>
            <Link href="/schedule" className={styles.secondary}>
              Schedule Now
            </Link>
          </div>
          <Link href="#customers-love-us" className={styles.googleReviews}>
            <div className={styles.googleStars}>
              <Image
                className={styles.googleStar}
                src={googleReviewStar}
                alt="review star"
              />
              <Image
                className={styles.googleStar}
                src={googleReviewStar}
                alt="review star"
              />
              <Image
                className={styles.googleStar}
                src={googleReviewStar}
                alt="review star"
              />
              <Image
                className={styles.googleStar}
                src={googleReviewStar}
                alt="review star"
              />
              <Image
                className={styles.googleStar}
                src={googleReviewStar}
                alt="review star"
              />
            </div>
            <span className={styles.googleReview}>
              5.0 out of 5 based (46 reviews)
            </span>
            <Image
              className={styles.googleLogo}
              src={googleLogo}
              alt="google logo"
            />
          </Link>
        </article>
        <aside className={styles.heroImage}>
          <Image src={heroImage} alt="hero image" priority={true} />
        </aside>
      </main>
    </section>
  )
}
