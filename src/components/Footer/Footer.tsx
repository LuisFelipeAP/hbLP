import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './footer.module.scss'

import hbLogoWhite from '../../assets/hbLogoWhite.svg'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <Image src={hbLogoWhite} alt="homebreeze logo" />
            <p>1080 Park Newport, Newport Beach, CA</p>
            <p>2261 Market St #4820, San Francisco, CA</p>
            <p>License #1092644</p>
          </div>
          <div className={styles.footerTopRight}>
            <Link href="tel:+13237666344">(323) 766-6344</Link>
            <p>
              Proudly serving all of Los Angeles County, Orange County,
              Riverside County, and San Bernardino County
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright © 2022 HomeBreeze</p>
        </div>
      </div>
    </footer>
  )
}
