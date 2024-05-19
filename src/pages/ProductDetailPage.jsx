import React, { useEffect, useState } from 'react'
import ProductDetails from '../feature/Product/ProductDetails/ProductDetails';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { productData } from '../static/data';
import { useParams } from 'react-router-dom';
import SuggestedProduct from '../feature/Product/SuggestedProduct/SuggestedProduct';
import { useSelector } from 'react-redux';
const productDetailPage = () => {
    const {id} = useParams();
    const {allProducts} = useSelector((state)=>state.product);
   const [data,setData] = useState(null);
   useEffect(()=>{
         const data = allProducts && allProducts.find((d)=>d._id == id);
         setData(data);
   },[allProducts]);
  return (
    <>
      <Header />
      <div className="add_padding">
        <ProductDetails data={data}/>
        {
             data && <SuggestedProduct data={data}/>
        }
        <Footer />
      </div>
    </>
  )
}

export default productDetailPage;