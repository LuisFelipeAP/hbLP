import React from 'react'
import { PopupButton } from '@typeform/embed-react'

import styles from './rebatestanklessgas.module.scss';

export function RebatesTanklessGas() {
    return (
        <section data-aos="fade" id='tankless' className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.headline}>
                    <h2>Tankless Gas Water Heaters</h2>
                    <p>Have a tankless water heater you need to replace? We work with top of the line gas tankless water heaters.</p>
                </div>
                <div className={styles.pricingPlans}>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>1 Bath Home Tankless</h3>
                            <p>starting at</p>
                            <div className={styles.priceWrapper}>
                                <span>$2,099</span>
                                <span className={styles.asterisk}>*</span>
                            </div>
                            <PopupButton id="abItW3Lc" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>2 Bath Home Tankless</h3>
                            <p>starting at</p>
                            <div className={styles.priceWrapper}>
                                <span>$2,099</span>
                                <span className={styles.asterisk}>*</span>
                            </div>
                            <PopupButton id="abItW3Lc" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>3 Bath Home Tankless</h3>
                            <p>starting at</p>
                            <div className={styles.priceWrapper}>
                                <span>$2,649</span>
                                <span className={styles.asterisk}>*</span>
                            </div>
                            <PopupButton id="abItW3Lc" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>4+ Bath Home Tankless</h3>
                            <p>starting at</p>
                            <div className={styles.priceWrapper}>
                                <span>$2,849</span>
                                <span className={styles.asterisk}>*</span>
                            </div>
                            <PopupButton id="abItW3Lc" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                </div>
                <div className={styles.pricesInclude}>
                    <span>All prices include:</span>
                    <ul>
                        <li>Water Heater</li>
                        <li>Delivery</li>
                        <li>Installation</li>
                        <li>Parts</li>
                        <li>Disposal</li>
                    </ul>
                </div>
                <div className={styles.footerNote}>
                    <p>
                        *Prices reflect savings from $800 - $1,000 cash rebates and $300 federal tax credits.&nbsp;
                    </p>
                </div>
            </main>
        </section>
    )
}
