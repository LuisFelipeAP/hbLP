import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

import { SvgLogo } from '../../assets/SvgLogo.jsx'

export function Header() {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <Link href="/" aria-label="Home Page Logo as Button">
          <SvgLogo />
        </Link>
        <nav className={styles.infoContainer}>
          <Link href="/selection#gas-tanks">Tank</Link>
          <Link href="/selection#tankless">Tankless</Link>
        </nav>
        <Link href="tel:+13237666344" className={styles.phoneCTA}>
          (323) 766-6344
        </Link>
      </div>
    </header>
  )
}
