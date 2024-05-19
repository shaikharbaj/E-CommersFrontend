import React from 'react'
import Header from '../components/Header/Header'
import Profile from '../feature/Profile/Profile'
import Footer from '../components/Footer/Footer'
const Profilepage = () => {
  return (
    <>
      <Header />
      <div className="add_padding">
        <Profile />
        <Footer/>
      </div>
    </>
  )
}

export default Profilepage