import React, { useEffect, useState } from 'react'
import styles from './suggestedproduct.module.css'
import ProductCard from '../../../components/ProductCard/ProductCard.jsx'
import { useSelector } from 'react-redux'
const SuggestedProduct = ({ data }) => {
    const {allProducts} = useSelector((state)=>state.product);
    const [suggestedProduct, setSuggestedProductData] = useState();
    useEffect(()=>{
        const d = allProducts && allProducts.filter((d)=>d.category === data.category);
         setSuggestedProductData(d);
    },[])
    return (
        <>
            {(data && suggestedProduct?.length>0) ? (
                <div className={`p-4 ${styles.section}`}>
                    <h2
                        className={`${styles.heading}`}
                    >
                        Related Product
                    </h2>
                    <div className={styles.suggested_product}>
                        {
                            suggestedProduct && suggestedProduct.map((i, index) => (
                                <ProductCard data={i} key={index} />
                            ))
                        }
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default SuggestedProduct