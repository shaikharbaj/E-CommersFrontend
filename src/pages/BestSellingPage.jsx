import React from 'react'
import BestSelling from '../feature/BestSelling/BestSelling'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';

const BestSellingPage = () => {
  const {isLoading} = useSelector((state)=>state.product);
  return (
    <>
        {isLoading?<Loader/>:<BestSelling/>}
    </>
  )
}

export default BestSellingPage