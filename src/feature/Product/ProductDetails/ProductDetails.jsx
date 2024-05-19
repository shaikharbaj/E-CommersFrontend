import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../../components/Rating/Rating'
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './productdetails.module.css'
import { AddToCartAsync } from '../../../redux/Slices/cartSlice'
import { errorToast, successToast } from '../../../utils/toastMessage'
import { useDispatch, useSelector } from 'react-redux'
const ProductDetails = ({ data }) => {

  const [select, setSelect] = useState(0);
  const {cart} = useSelector((state)=>state.cart);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [products, setsProduct] = useState([])
  const dispatch = useDispatch();
  console.log(data);
  const decrementCount = () => {
           if(count>1)
           {
               setCount((prev)=>prev-1);
           }
  }
  const incrementCount = () => {
    setCount((prev)=>count+1);
}
const addToCartHandler=(id)=>{
  const isItemExists = cart && cart.find((i) => i._id === id);
  if (isItemExists) {
    errorToast("Item already in cart!");
  } else {
    if (data.stock < 1) {
      errorToast("Product stock limited!");
    } else {
      const cartData = { ...data, qty: count };
      dispatch(AddToCartAsync(cartData));
      successToast("Item added to cart successfully!");
    }
  }
}
  const removeFromWishlistHandler = () => {

  }
  const addToWishlistHandler = () => {

  }

  return (
    <>
      <div className={styles.container}>
        {data ? (
          <div className={styles.section}>
            <div className={styles.wrapper}>
              <div className={styles.inner_container}>
                <div className={styles.img_container}>
                  <img
                    src={`${data && data.images[select].url}`}
                    alt=""
                    className={styles.selected_img}
                  />
                  <div className={styles.multi_img}>
                    {data &&
                      data.images.map((i, index) => (
                        <div
                          className={`${select === index ? 'borderr' : ''} cursor-pointer`}
                        >
                          <img
                            src={i.url}
                            alt=""
                            className={styles.extra_img}
                            onClick={() => setSelect(index)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className={styles.content_container}>
                  <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                  <p>{data.description}</p>
                  <div className={styles.price_disPrice}>
                    <h4 className={`${styles.productDiscountPrice}`}>
                      {`₹ ${data.discountPrice}`}
                    </h4>
                    <h3 className={`${styles.price}`}>
                      {data.originalPrice && `₹ ${data.originalPrice}`}
                    </h3>
                  </div>

                  <div className={styles.increment_decrement_container}>
                    <div>
                      <button
                        className={styles.decrement_btn}
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <span className={styles.count}>
                        {count}
                      </span>
                      <button
                        className={styles.increment_btn}
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer"
                          onClick={() => removeFromWishlistHandler(data)}
                          color={click ? "red" : "#333"}
                          title="Remove from wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer"
                          onClick={() => addToWishlistHandler(data)}
                          color={click ? "red" : "#333"}
                          title="Add to wishlist"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={styles.add_to_cart_btn_container}
                  onClick={() => addToCartHandler(data._id)}
                  >
                    <span className={styles.add_to_cart_btn}>
                      Add to cart <AiOutlineShoppingCart className="ms-1" />
                    </span>
                  </div>
                  <div className={styles.shopInfo}>
                    <Link to={``}>
                      <img
                        src={`http://localhost:8000/${data.shop.avatar}`}
                        alt=""
                        className={styles.shop_img}
                      />
                    </Link>
                    <div className="pr-8">
                      <Link to={`/shop/preview/${data?.shop._id}`}>
                        <h3 className={`${styles.shop_name} `}>

                          Arbaj Shop
                        </h3>
                      </Link>
                      <h5 className={styles.rating}>
                        {data?.ratings || 0}/5 Ratings
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDetailsInfo
              data={data}
              // products={}
              totalReviewsLength={2}
              averageRating={2}
            />
            <br />
            <br />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ProductDetails;

const ProductDetailsInfo = ({ data, products, totalReviewsLength, averageRating }) => {
  const [active, setActive] = useState(1);



  return (
    <>
      <div className={`${styles.product_details_container} mt-3`}>
        <div className={styles.product_detail_wrapper}>
          <div className="position-relative">
            <h5
              className={styles.productdetail_heading}
              onClick={() => setActive(1)}
            >
              Product Details
            </h5>
            {active === 1 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
          <div className="position-relative">
            <h5
              className={
                styles.productdetail_heading
              }
              onClick={() => setActive(2)}
            >
              Product Reviews
            </h5>
            {active === 2 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
          <div className="position-relative">
            <h5
              className={
                styles.productdetail_heading
              }
              onClick={() => setActive(3)}
            >
              Seller Information
            </h5>
            {active === 3 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
        </div>
        {active === 1 ? (
          <>
            <p className={styles.pro_details}>
              {data.description}
            </p>
          </>
        ) : null}

        {active === 2 ? (
          <div className={styles.reviews_container}>
            {
              data.reviews.length>0 ?
                data.reviews.map((item, index) => (
                  <div className={styles.single_review}>
                    <img
                      src={`${item.user.avatar?.url}`}
                      alt=""
                      className={styles.review_user_avatar}
                    />
                    <div className={styles.comment_content_wrapper}>
                      <div className={styles.name_rating_wrapper}>
                        <h1 className={styles.comment_username}>{item.user.name}</h1>
                        <Rating rating={3.2} />
                      </div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                )) : <>
                  <div className={styles.no_review}>
                    {data && data.reviews.length === 0 && (
                      <h5 style={{ fontSize: "16px" }}>No Reviews have for this product!</h5>
                    )}
                  </div>
                </>
            }


          </div>
        ) : null}

        {active === 3 && (
          <div className={styles.seller_container}>
            <div className={styles.seller_sec_shopinfo}>
              <Link to={`/shop/preview/${data.shop._id}`}>
                <div className={styles.seller_sec_avatar_desc}>
                  <img
                    src={`http://localhost:8000/${data?.shop?.avatar}`}
                    className={styles.seller_sec_avatar}
                    alt=""
                  />
                  <div className="pl_3">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 style={{paddingBottom:".5rem",fontSize:"15px"}}>
                      ({averageRating}/5) Ratings
                    </h5>
                  </div>
                </div>
              </Link>
              <p style={{paddingTop:".5rem"}}>{data.shop.description}</p>
            </div>
            <div className={styles.seller_container_extra}>
              <div style={{textAlign:'left'}}>
                <h5 className="font_600">
                  Joined on:{" "}
                  <span className="font_500">
                    {data.shop?.createdAt?.slice(0, 10)}
                  </span>
                </h5>
                <h5 className="font_600 pt-3">
                  Total Products:{" "}
                  <span className="font_500">
                    {products && products.length}
                  </span>
                </h5>
                <h5 className="font_600 pt-3">
                  Total Reviews:{" "}
                  <span className="font_500">{totalReviewsLength}</span>
                </h5>
                <Link to="/">
                  <div
                    className={styles.visit_shop_btn}
                  >
                    <h4>Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )

}