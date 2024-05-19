import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
const Hero = () => {
  return (
    <>
      <div
        className={`hero_section`}
      >
        <div className='card-overlay'>
        <div className={`subsection`}>
          <h1
          >
            Best Collection for <br /> home Decoration
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products">
            <div className='button'>
              <span>
                Shop Now
              </span>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero