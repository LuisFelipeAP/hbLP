import React from 'react'
import { PopupButton } from '@typeform/embed-react'

import styles from './electrictank.module.scss';

export function ElectricTank() {
    return (
        <section id='electric-tanks' className={styles.sectionContainer}>
            <main className={styles.innerContainer}>
                <div className={styles.headline}>
                    <h2>Electric Tank Water Heaters</h2>
                    <p>We also offer electric water heaters for homes without a gas connection.</p>
                </div>
                <div className={styles.pricingPlans}>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>30 Gallon Electric</h3>
                            <p>starting at</p>
                            <span>$1,599</span>
                            <PopupButton id="wHZ1Vj6M" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>40 Gallon Electric</h3>
                            <p>starting at</p>
                            <span>$1,699</span>
                            <PopupButton id="wHZ1Vj6M" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>50 Gallon Electric</h3>
                            <p>starting at</p>
                            <span>$1,799</span>
                            <PopupButton id="wHZ1Vj6M" style={{ fontSize: 20 }} className="my-button">
                                View Details
                            </PopupButton>
                        </div>
                    </div>
                    <div className={styles.pricingPlan}>
                        <div className={styles.pricingContainer}>
                            <h3>75 Gallon Electric</h3>
                            <p>starting at</p>
                            <span>$2,799</span>
                            <PopupButton id="wHZ1Vj6M" style={{ fontSize: 20 }} className="my-button">
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
            </main>
        </section>
    )
}
