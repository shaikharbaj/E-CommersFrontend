import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import BestDeal from '../../components/BestDeal/BestDeal'
import Sponcered from '../../components/Sponcered/Sponcered'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <>
      <div className="add_padding">
        <Header avtiveNavLink={1} />
        <Hero />
        <Categories />
        <BestDeal />
        <Sponcered />
        <Footer />
      </div>
    </>
  )
}

export default Home