import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import Layout from '../../components/Layout';
import axios from 'axios';
const Product = ({ productData }) => {
    const { category,
        description,
        id,
        image,
        price,
        rating,
        title } = productData

    return (
        <div className={styles.container}>
            <Layout>
                <div className={styles.productContainer}>
                    <div className={styles.productImage}>
                        <Image src={image} layout="fill" alt={title} />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productHeading}>{title}</h1>
                        <p className={styles.productDesc}>{description}</p>
                        <h3 className={styles.productPrice}>${price}</h3>
                        <div className={styles.buttons}>
                            <button className={styles.buyBtn}>Buy Now</button>
                            <button className={styles.cartBtn}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </Layout >
        </div>
    )
}

export async function getStaticProps({ params }) {
    const { id } = params
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    const { data } = res
    return {
        props: { productData: data }
    }
}

export async function getStaticPaths() {
    const res = await axios.get(`https://fakestoreapi.com/products`)
    const { data } = res
    console.log("DATA", data)
    const paths = data.map(product => (
        { params: { id: String(product.id) } }
    ))
    return {
        paths: paths,
        fallback: false
    }
}
export default Product