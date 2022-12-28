import React from 'react'

import styles from './available.module.scss'

export function Available() {
  return (
    <section data-aos="fade" className={styles.sectionContainer}>
      <div className={styles.innerContainer}>
        <h2>What Rebates Are Available?</h2>
        <p>
          Southern California consumers often qualify for two rebate programs
          that can total <strong>up to $1,300 off</strong> the installation of a
          new tankless water heater. HomeBreeze makes it easy for you to claim
          these rebates. After your installation, we send you everything you
          need to claim them easily.
        </p>
        <div className={styles.rebates}>
          <div className={styles.rebate}>
            <h3>Socal Gas Rebate</h3>
            <p>
              Socal gas offers rebates <strong>up to $1,000</strong> for
              customers upgrading their homes from tank to energy efficient
              tankless water heaters
            </p>
            <ul>
              <li>Cannot be combined with other utility rebates</li>
              <li>Limit 1 rebate per customer</li>
              <li>Must be a residential customer of a participating utility</li>
              <li>Must be installed in service territory</li>
              <li>Must replace a tank-type water heater</li>
              <li>Proof of purchase required</li>
            </ul>
          </div>
          <div className={styles.rebate}>
            <h3>Federal Tax Credit</h3>
            <p>
              The federal government offers <strong>$300 in tax credits</strong>{' '}
              for customers who upgrade their tank to energy efficient tankless
              water heaters
            </p>
            <ul>
              <li>
                New water heater must have an energy factor &gt; 0.82 (all
                HomeBreeze tankless qualify!)
              </li>
              <li>Limit 1 rebate per household</li>
              <li>
                Must be an existing home (no new construction) and your
                principle residence
              </li>
              <li>Must replace a tank type water heater</li>
              <li>Proof of purchase required</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
