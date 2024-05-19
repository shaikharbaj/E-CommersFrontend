import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from '../Product/product.module.css'
import { productData } from '../../static/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
const BestSelling = () => {
    const [data, setData] = useState([]);
    const { loading } = useSelector((state) => state.auth);
    const {allProducts} = useSelector((state)=>state.product);
    useEffect(() => {
        const allProduct = [...allProducts];
        const d = allProduct && allProduct.sort((a,b) => b.total_sell - a.total_sell);
        setData(d);
    }, []);
    return (
        <>
            {
                loading ? <Loader /> : <>
                    <div>
                        <Header avtiveNavLink={2}/>
                    </div>
                    <br /><br />
                    <div className={`${styles.section}`}>
                        <div className={`${styles.product_container}`}>
                            {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
                        </div>
                        {data && data.length === 0 ? (
                            <h1 className={`${styles.product_not_found}`}>
                                No products Found!
                            </h1>
                        ) : null}
                    </div>
                    <Footer/>
                </>
            }
        </>
    )
}

export default BestSelling;