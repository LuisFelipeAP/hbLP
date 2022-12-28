import React from 'react'
import { PopupButton } from '@typeform/embed-react'

import styles from './gastank.module.scss'

export function GasTank() {
  return (
    <section data-aos="fade" id="gas-tanks" className={styles.sectionContainer}>
      <main className={styles.innerContainer}>
        <div className={styles.headline}>
          <h2>Gas Tank Water Heaters</h2>
          <p>
            Gas water heaters are the most common in Southern California. We
            install leading brands in all major sizes.
          </p>
        </div>
        <div className={styles.pricingPlans}>
          <div className={styles.pricingPlan}>
            <div className={styles.pricingContainer}>
              <h3>30 Gallon Gas</h3>
              <p>starting at</p>
              <span>$1,899</span>
              <PopupButton
                id="wHZ1Vj6M"
                style={{ fontSize: 20 }}
                className="my-button"
              >
                View Details
              </PopupButton>
            </div>
          </div>
          <div className={styles.pricingPlan}>
            <div className={styles.pricingContainer}>
              <h3>40 Gallon Gas</h3>
              <p>starting at</p>
              <span>$1,899</span>
              <PopupButton
                id="wHZ1Vj6M"
                style={{ fontSize: 20 }}
                className="my-button"
              >
                View Details
              </PopupButton>
            </div>
          </div>
          <div className={styles.pricingPlan}>
            <div className={styles.pricingContainer}>
              <h3>50 Gallon Gas</h3>
              <p>starting at</p>
              <span>$1,999</span>
              <PopupButton
                id="wHZ1Vj6M"
                style={{ fontSize: 20 }}
                className="my-button"
              >
                View Details
              </PopupButton>
            </div>
          </div>
          <div className={styles.pricingPlan}>
            <div className={styles.pricingContainer}>
              <h3>75 Gallon Gas</h3>
              <p>starting at</p>
              <span>$3,199</span>
              <PopupButton
                id="wHZ1Vj6M"
                style={{ fontSize: 20 }}
                className="my-button"
              >
                View Details
              </PopupButton>
            </div>
          </div>
        </div>
        <div className={styles.pricesInclude}>
          <span>Included:</span>
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
