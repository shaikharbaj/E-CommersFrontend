import React, { useEffect, useState } from 'react'
import Product from '../feature/Product/Product'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header/Header';

const ProductPage = () => {
  const { isLoading, allProducts,key } = useSelector((state) => state.product);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get('category');
  useEffect(() => {
    //check category present or not
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const allProduct = allProducts && [...allProducts];
      const d = allProduct && allProduct.filter((product) => product.category === categoryData);
      setData(d);
    }
  }, [allProducts,key])
  return (
    <>
      {
        isLoading ? <><Loader /></> : <>
          <div>
            <Header avtiveNavLink={3} />
          </div>
          <br /><br />
          <Product data={data}/>
        </>
      }
    </>
  )
}

export default ProductPage