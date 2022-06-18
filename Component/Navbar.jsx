import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
           <a href='/'>FOODO</a>
           <ul className={styles.list}>
                <li className={styles.listItem}>
                   <a href='/products/desighn'>SIGN UP</a>
                </li>
                
                <li className={styles.listItem}>
                   <a href='/products/contact'>CONTACT</a>
                </li>
           </ul>
        </div>
    );
};

export default Navbar