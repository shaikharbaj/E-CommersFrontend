import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { categoriesData, navItems } from "../../static/data";
import Cart from "../../feature/Cart/Cart";
import Wishlist from "../../feature/Wishlist/Wishlist";
import { updateCategory } from "../../feature/Product/ProductSlice";
const Header = ({ avtiveNavLink }) => {
  const [mobileNavManu, setMobileNavManu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { isSeller } = useSelector((state) => state.shop);
  const { allProducts } = useSelector((state) => state.product);
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const {cart} = useSelector((state)=>state.cart);
  const {wishlist} = useSelector((state)=>state.wishlist);
  
  const dropDownChangeHandler = (e) => {
    setCategory(e.target.value);
    dispatch(updateCategory(e.target.value));
    navigate(`/products?category=${e.target.value}`,{replace:true})
  };
  const handlesearchchange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setSearchData([]);
      return;
    }
    const filterData =
      allProducts &&
      allProducts.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });
    setSearchData(filterData);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container-fluid">
            <div className="row pt-3 pb-3 ps-4 pe-4 d-flex align-items-center desktop_header">
              <div className="col-md-3 logo">
                <h3>E_Commerce</h3>
              </div>
              <div className="col-md-6 desktop_searchbar">
                <div className="d-flex form-inputs justify-content-center">
                  <input
                    className="form-control"
                    id="search_input"
                    type="text"
                    value={searchTerm}
                    onChange={handlesearchchange}
                    placeholder="Search any product..."
                  />
                  <i className="bx bx-search"></i>
                  {searchData && searchData.length !== 0 ? (
                    <>
                      <div className="search_data_container">
                        {searchData &&
                          searchData.map((i) => {
                            return (
                              <Link to={`/product/${i._id}`}>
                                <div className="search_item">
                                  <img
                                    src={`${i.images[0]?.url}`}
                                    alt=""
                                    className="search_item_img"
                                  />
                                  <h1>{i.name}</h1>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="col-md-3 desktop_becomeseller_btn">
                <div className="d-flex align-items-center ml-auto">
                  <button className="best_seller_button ms-auto">
                    <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                      Become Seller
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- MOBILE SCREEN --> */}
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center mobile_header">
              <div className="col-3">
                <div
                  className="d-flex category_icon"
                  onClick={() => setMobileNavManu(true)}
                >
                  <i className="bx bx-menu"></i>
                </div>
              </div>
              <div className="col-6 logo d-flex justify-content-center">
                <h3>Hippikart</h3>
              </div>

              <div className="col-3">
                <div
                  className="d-flex align-items-center justify-content-end cart_icon position-relative"
                  onClick={() => setCartOpen(true)}
                >
                  <i className="bx bx-cart-alt"></i>
                  <span className="cart_wishlist_count">{cart.length}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {mobileNavManu && (
          <>
            <div className="header_sidebar_container">
              <div className="header_sidebar">
                <div className="head">
                  <div
                    className="heade_sidebar_wishlist_icon mt-2 ms-3 position-relative"
                    onClick={() => {
                      setOpenWishlist(true);
                      setMobileNavManu(false);
                    }}
                  >
                    <i className="bx bx-heart"></i>
                    <span className="sidebar_wishlist_count">{wishlist.length}</span>
                  </div>
                  <div
                    className="header_sidebar_cancel_icon mt-2 me-3"
                    onClick={() => setMobileNavManu(false)}
                  >
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className=" py-3 px-2 header_sidebar_search">
                  <div className="d-flex form-inputs justify-content-center">
                    <input
                      className="form-control"
                      id="search_input"
                      type="text"
                      value={searchTerm}
                      onChange={handlesearchchange}
                      placeholder="Search any product..."
                    />
                    <i className="bx bx-search"></i>

                    {searchData && searchData.length !== 0 ? (
                      <>
                        <div className="search_data_container">
                          {searchData &&
                            searchData.map((i) => {
                              return (
                                <Link to={`/product/${i._id}`}>
                                  <div className="search_item">
                                    <img
                                      src={`${i.images[0]?.url}`}
                                      alt=""
                                      className="search_item_img"
                                    />
                                    <h1>{i.name}</h1>
                                  </div>
                                </Link>
                              );
                            })}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div
                  className="header_sidebar_navitems mt-4"
                  onClick={() => setMobileNavManu(false)}
                >
                  <ul>
                    {navItems.map((i, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className={
                              avtiveNavLink == index + 1 ? "active_link" : ""
                            }
                            to={i.url}
                          >
                            {i.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div
                  className="desktop_becomeseller_btn"
                  onClick={() => setMobileNavManu(false)}
                >
                  <div className="d-flex align-items-center">
                    <button className="best_seller_button">
                      Become Bestseller
                    </button>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="sidebar_login_or_avatar"
                  onClick={() => setMobileNavManu(false)}
                >
                  {isAuthenticated ? (
                    <div className="sidebar_avatar">
                      <Link to="/profile">
                        <img src={`${userInfo?.avatar?.url}`} alt="prfile" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="sidebar_login_signup">
                        <Link to={"/login"} className="me-1">
                          Login
                        </Link>{" "}
                        /{" "}
                        <Link to={"/register"} className="ms-1">
                          Sign up
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className={
            active ? "desktop_navigation stick_to_top" : "desktop_navigation"
          }
        >
          <div className="categories_list">
            <select
              className="form-control"
              onChange={dropDownChangeHandler}
              value={category}
            >
              <option value="" hidden>
                select category
              </option>
              {categoriesData &&
                categoriesData.map((i, index) => {
                  return (
                    <option value={`${i.title}`} className="normal_flex">
                      <img
                        src={i.image_Url}
                        style={{
                          width: "25px",
                          height: "25px",
                          objectFit: "contain",
                          marginLeft: "10px",
                          userSelect: "none",
                        }}
                        alt=""
                      />
                      <h3 className="category_title">{i.title}</h3>
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="navlinks">
            <ul>
              {navItems.map((i, index) => {
                return (
                  <li key={index}>
                    <Link
                      className={
                        avtiveNavLink == index + 1 ? "active_link" : ""
                      }
                      to={i.url}
                    >
                      {i.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="wishlist_cartIcon">
            <div
              className="wishlist_icon position-relative"
              onClick={() => setOpenWishlist(true)}
            >
              <i className="bx bx-heart"></i>
              <span className="desktop_wishlist_cart_icon">{wishlist.length}</span>
            </div>
            <div
              className="cart_icon position-relative"
              onClick={() => setCartOpen(true)}
            >
              <i className="bx bx-cart-alt"></i>
              <span className="desktop_wishlist_cart_icon">{cart.length}</span>
            </div>
            <div className="user_icon">
              {isAuthenticated ? (
                <>
                  <Link to={"/profile"}>
                    <img src={`${userInfo?.avatar?.url}`} alt="profile" />
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <i className="bx bx-user-circle"></i>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {cartOpen ? <Cart setCartOpen={setCartOpen} /> : null}
        {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
      </header>
    </>
  );
};

export default Header;
