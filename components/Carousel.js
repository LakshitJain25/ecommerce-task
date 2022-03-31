import React from 'react'
import styles from '../styles/Carousel.module.css'

const Carousel = ({ bgImage }) => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}
                style={{ backgroundImage: `url(${bgImage})` }}
                >
            </div>
        </div>
    )
}

export default Carousel