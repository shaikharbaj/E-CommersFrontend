import React from 'react'
import './rating.css'
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i className='bx bxs-star me-2'></i>)
        } else if(i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i className='bx bxs-star-half me-2' ></i>)
        } else {
            stars.push(<i className='bx bx-star me-2' ></i>)
        }
    }
    return (
        <>
            <div className="d-flex rating_sub">
                   {
                       stars.map((s)=>{
                            return <>
                               {s}
                            </>
                       })
                   }
            </div>

        </>
    )
}

export default Rating