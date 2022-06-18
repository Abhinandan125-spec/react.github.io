import React from 'react'
import styles from '../styles/Intro.module.css'
import Circle from './Circle'

function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
      <Circle backgroundColor="#01c686"  right="-40vh"/>
      <div className={styles.card}>
        <h1 className={styles.title}>FOODO</h1>
        <p className={styles.desc}>
           Get Your Food In At Your Doorstep</p>
        <button className={styles.button}>Download App</button>
      </div>
      <div className={styles.card}>
        <img src="mobile.png"
          min-width="90vw"
          height="100%"
          layout="fill"
          objectfit="cover" />
      </div>

    </div>
  )
}

export default Intro