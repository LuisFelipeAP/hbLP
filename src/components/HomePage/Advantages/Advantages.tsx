import Image from 'next/image'
import React from 'react'
import styles from './advantages.module.scss'
import priceIcon from '../../../assets/priceIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import plumberIcon from '../../../assets/plumberIcon.svg';

export function Advantages() {
  return (
    <section className={styles.sectionContainer}>
        <main className={styles.innerContainer}>
            <h2 className={styles.pricing}>How HomeBreeze<br/>Saves You <span>$500</span></h2>
            <div className={styles.advantageList}>
                <div className={styles.advantage}>
                    <Image 
                        className={styles.advantageIcon} 
                        src={priceIcon}
                        alt="price icon"
                    />
                    <p className={styles.advantageText}>We remove the salespeople and offer honest, upfront prices online</p>
                </div>
                <div className={styles.advantage}>
                    <Image 
                        className={styles.advantageIcon}
                        src={calendarIcon}
                        alt="calendar icon"
                    />
                    <p className={styles.advantageText}>We offer online scheduling so you can book quickly and on your schedule</p>
                </div>
                <div className={styles.advantage}>
                    <Image 
                        className={styles.advantageIcon}
                        src={plumberIcon}
                        alt="plumber icon"
                    />
                    <p className={styles.advantageText}>We partner with only 5-star rated, licensed, and insured installers</p>
                </div>
            </div>
        </main>
    </section>
  )
}
