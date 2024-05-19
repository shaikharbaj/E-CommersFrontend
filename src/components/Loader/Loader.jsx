import React from 'react'
import styles from './loader.module.css'
import Lottie from 'react-lottie'
import animationData from '../../assets/ecommerce_animation.json'
const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className={`${styles.loader}`}>
            <Lottie options={defaultOptions} width={300} height={300} />
        </div>
    )
}

export default Loader