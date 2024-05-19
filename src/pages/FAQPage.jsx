import React from 'react'
import FAQ from '../feature/FAQ/FAQ'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const FAQPage = () => {
  return (
    <>
    <div>
        <Header avtiveNavLink={5}/>
        <FAQ/>
        <Footer/>
    </div>
    </>
  )
}

export default FAQPage