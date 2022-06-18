import React from 'react'
import styles from '../styles/testimonials.module.css'
function SignUp() {
  return (
    <div className={styles.container}>
        <div className={styles.forms}>
            <form action="backend.php">
             
              <div className={styles.name}>
                Name:<input type="text"></input>
              </div>
              <div className={styles.mobile}>
                Mobile No:<input type="number"></input>

              </div>
              <div className={styles.email}>
                Email:<input type="text"></input>
              </div>
              <div classname={styles.address}>
                Address:<input type="text"></input>
              </div>
              <button> Submit Now</button>
               
            </form>
        </div>
    </div>
  )
}

export default SignUp