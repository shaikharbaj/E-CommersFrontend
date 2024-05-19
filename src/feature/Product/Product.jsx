import React from 'react'
import styles from './product.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const Product = ({data}) => {

    return (
        <>
            {
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
            }
        </>
    )
}

export default Product