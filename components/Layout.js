import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
const Layout = ({ children }) => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href={`/`} passHref>
                    <h2 className={styles.logo}>HQCommerce</h2>
                </Link>
                <nav
                    className={`${styles.navbar}`}
                    style={{ transform: showNav ? "translateY(15%) translateX(-56%)" : "" }}>
                    <ul className={styles.navbarList}>
                        <Link href={`/`} passHref>
                            <li className={styles.navbarItem} onClick={() => { setShowNav(false) }}>Home</li>
                        </Link>
                        <Link href={`/#productCards`} passHref>
                            <li className={styles.navbarItem} onClick={() => { setShowNav(false) }}>Products</li>
                        </Link>
                        <Link href={`/#footer`} passHref>
                            <li className={styles.navbarItem} onClick={() => { setShowNav(false) }}>Contact Us</li>
                        </Link>
                    </ul>
                </nav>
                <div className={styles.hamburgerButton}> {(showNav) ?
                    <h3 className={styles.closeBtn} onClick={() => { setShowNav(false) }}>x</h3> :
                    <i className={`fas fa-bars ${styles.burger}`} onClick={() => { setShowNav(true) }}></i>}</div>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer} id="footer">
                <div className={styles.icons}>
                    <div className={styles.icon}><i className="fab fa-facebook-f"></i></div>
                    <div className={styles.icon}><i className="fab fa-instagram"></i></div>
                    <div className={styles.icon}><i className="fab fa-twitter"></i></div>
                </div>
                <div className={styles.footerText}>Terms of Use · Privacy Policy</div>
                <div className={styles.trademark}>© 2022 HQCommerce</div>
            </footer>
        </div>
    )
}

export default Layout