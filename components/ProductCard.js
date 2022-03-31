import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = ({ productName, productPrice, productImage, productId }) => {
    return (
        <div className={styles.container}>
            <div className={styles.productImage}>
                <Image src={productImage} layout="fill" alt={""} />
            </div>
            {/* <Image src={productImage} height={300} width={300} alt={""} /> */}
            <h2 className={styles.productTitle}>{productName}</h2>
            <p className={styles.productPrice}>${productPrice}</p>
            <Link href={`/product/${productId}`} passHref>
                <button className={styles.productBtn}>View</button>
            </Link>
        </div>
    )
}

export default ProductCard