import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import Carousel from './../components/Carousel';
import ProductCard from './../components/ProductCard';
import { Link } from 'react-scroll';
import axios from 'axios';
export default function Home({ products }) {
 
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.heroSection}>
          <div className={styles.carousel}>
            <Swiper
              style={{ height: '100%' }}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><Carousel bgImage={"./clothes-1.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./gadget-2.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./clothes-2.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./gadget-1.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./clothes-3.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./gadget-3.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./gadget-4.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./clothes-4.jpg"} /></SwiperSlide>
              <SwiperSlide><Carousel bgImage={"./gadget-5.jpg"} /></SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>HQCommerce</h1>
            <h3 className={styles.tagline}>Don’t worry, we have it.</h3>
            <Link
              to="productCards"
              smooth={true}
              duration={200}
              offset={-90}>
              <button className={styles.shopBtn}>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.productSection} id="productCards">
          <h2 className={styles.productSectionHeading}>ALL PRODUCTS</h2>
          <div className={styles.productCardsGrid}>
            <div className={styles.productCards}>
              {products.map((product, index) => {
                return (<ProductCard
                  key={index}
                  productId={product.id}
                  productName={product.title}
                  productPrice={product.price}
                  productImage={product.image} />
                );
              })}
            </div>
          </div>
        </div>

      </Layout >
    </div>
  )
}

export async function getStaticProps() {
  const products = await axios.get('https://fakestoreapi.com/products')
  const productsData = products.data
  return {
    props: { products: productsData },
    revalidate: 10
  }
}