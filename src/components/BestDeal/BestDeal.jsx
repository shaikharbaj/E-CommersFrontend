import React, { useEffect, useState } from 'react'
import './BestDeal.css'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { useSelector } from 'react-redux'
const BestDeal = () => {
  const [data, setData] = useState([]);
  const {allProducts} = useSelector((state)=>state.product);
  useEffect(() => {
    const Allproduct = allProducts ? [...allProducts] : [];
    const sortedProduct = Allproduct.sort((a, b) => b.sold_out
    - a.sold_out
    );
    const firstFive = sortedProduct.slice(0, 5);
    setData(firstFive);
  }, [allProducts])
  return (
    <>
      <div className="best_deal_section">
        <div className="best_deal_heading">
          <h1>Best Deals</h1>
        </div>
        <div className="best_deal_product">
             {
                 data.length>0&& data.map((product,index)=>{
                     return <ProductCard key={index} data={product}/>
                 })
             }
        </div>
      </div >
    </>
  )
}

export default BestDeal