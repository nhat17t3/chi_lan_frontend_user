import React, { Component, useEffect, useState, Fragment } from "react";
import { getListProduct } from "../../../actions/productActions";
import Carousel from "./Carousel";
import Phoneitem from "./phone-info";
import { Link, NavLink, useParams } from "react-router-dom";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cartAction";

import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.product);
  //   const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProductByCategory(id));
    dispatch(getListProduct());
    window.scrollTo(0, 0);
  }, [dispatch]);
  const handleAddToCart = (id) => {
    // event.preventDefault();
    // console.log(event.target.value)
    const product = products.products.find(
      // (product) => product._id === event.target.value
      (product) => product._id === id
    );

    dispatch(addToCart(product));
  };

  return (
    <>
      {/*  Slider Start */}
      <div className="slider-area over-hidden slider1">
        <div className="slick-slider slider-active slick-initialized" dir="ltr">
          <div className="slick-list">
            <div
              className="slick-track"
              // style={{ opacity: 1, width: "6100px" }}
            >
              <div
                data-index={0}
                className="slick-slide slick-active slick-current"
                tabIndex={-1}
                aria-hidden="false"
                style={{
                  outline: "none",
                  width: "100%",
                  position: "relative",
                  left: "0px",
                  opacity: 1,
                  transition:
                    "opacity 500ms linear 0s, visibility 500ms linear 0s",
                }}
              >
                <div>
                  <div
                    // className="single-slider slider-height d-flex align-items-center"
                    className="single-slider slider-height d-flex align-items-center"
                    data-background="/images/slider/home1-slider1.jpg"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      // minHeight: "550px",
                      display: "inline-block",
                      backgroundImage:
                        'url("/images/ca-nhan/slide1500x500.jpg")',
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-10 col-12 d-flex align-items-center">
                          {/* <div className="slider-content z-index1 position-absolute mt--12">
                            <h2
                              data-delay="1s"
                              className="light-black-color2 wow fadeInLeft mb-1 text-capitalize pb-25 font500 font-pt"
                              style={{ visibility: "visible" }}
                            >
                              Sản phẩm mới nhất <br />
                            </h2>
                            <p
                              className="light-black-color2 wow fadeInLeft font300 pb-25"
                              data-delay="1.5s"
                              style={{ visibility: "visible" }}
                            >
                            
                              <br />
                              <span className="font500" />
                            </p>
                            <Link
                              data-delay="1.7s"
                              className="web-btn wow fadeInUp  d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                              to="/products"
                              style={{ visibility: "visible" }}
                            >
                              Mua ngay
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*               
              <div
                data-index={1}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{
                  outline: "none",
                  width: "1220px",
                  position: "relative",
                  left: "-1220px",
                  opacity: 0,
                  transition:
                    "opacity 500ms linear 0s, visibility 500ms linear 0s",
                }}
              >
                <div>
                  <div
                    className="single-slider slider-height d-flex align-items-center"
                    data-background="/images/slider/home1-slider2.jpg"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      display: "inline-block",
                      backgroundImage:
                        'url("/images/slider/home1-slider2.jpg")',
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-10 col-12 d-flex align-items-center">
                          <div className="slider-content z-index1 position-absolute mt--12">
                            <h2
                              data-delay="1s"
                              className="light-black-color2 wow fadeInLeft mb-1 text-capitalize pb-25 font500 font-pt"
                              style={{ visibility: "visible" }}
                            >
                              Electronical <br /> Brushes 50% Off <br />
                            </h2>
                            <p
                              className="light-black-color2 wow fadeInLeft font300 pb-25"
                              data-delay="1.5s"
                              style={{ visibility: "visible" }}
                            >
                              Tìm kiếm những gì hợp với bạn nhất
                              <br />
                              <span className="font500" />
                            </p>
                            <a
                              data-delay="1.7s"
                              className="web-btn wow fadeInUp  d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                              href="/shop"
                              style={{ visibility: "visible" }}
                            >
                              Mua ngay
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/*  slider end */}
      <br />

      {/* most-purchased-item Start */}
      <div
        className="handpick-items-area wow fadeInUp animated"
        data-wow-duration="1s"
      >
        <div className="container mt-3">
          <div className="row free-shopping-area light-theme-bg  mlr-1">
            <div className="col-xl-12 col-lg-12  col-md-  col-sm- col-">
              <div className="free-shopping pt-15 pb-15 text-center">
                <h4 className="theme-color mb-0 font600 title-buy-most ">
                  Sản phẩm 
                </h4>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            {products &&
              products.products.map((product) => (
                <div className="col-xxl-3 col-xl-3  col-lg-3 col-md-6  col-sm-6 col-6 pl-0">
                  <div className="single-product mb-3">
                    <div className="single-product-img position-relative over-hidden">
                      {product.off && (
                        <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                          <span className="white text-uppercase d-block font500">
                            -{product.off}%
                          </span>
                        </div>
                      )}
                      {product.new && (
                        <div className="single-product-label text-label position-absolute theme-bg text-center  transition-3 z-index1">
                          <span className="white d-block font500">New</span>
                        </div>
                      )}
                      <div className="position-relative">
                        <Link to={`/product-details/${product._id}`}>
                          <Link to={`/product-details/${product._id}`} className="d-block">
                            <img
                              src={
                                product.productPictures
                                  ? generatePublicUrl(
                                      product.productPictures[0].img
                                    )
                                  : "/images/phone.png"
                              }
                              alt="product"
                              className="d-block m-auto fs-card-img"
                            />
                          </Link>
                        </Link>
                        {1 && (
                          <div className="product-action">
                            <div className="pro-action-inner d-block">
                              <Link
                                // to={`/product-details/${product._id}`}
                                className="gray-bg"
                                value={product._id}
                                onClick={(e) => handleAddToCart(product._id)}
                                // onClick={(e) => {
                                //   e.preventDefault();
                                //   // setQuickView(true);
                                // }}
                              >
                                <i className="icon-shopping-bag" />
                              </Link>
                              {/* <a
                  href="#"
                  onClick={(e) => onClickWishlist(e)}
                  className={`gray-bg ${wishlist && wishlist.find((pro) => pro.id === product.id)
                    ? "active"
                    : ""
                    } `}
                >
                  <i className="fal fa-heart" />
                </a> */}
                              {/* <a
                  href="#"
                  className={`gray-bg ${compares.find((compare) => compare.id === product.id)
                    ? "active"
                    : ""
                    }`}
                  onClick={(e) => onClickCompare(e)}
                >
                  <i className="fal fa-random" />
                </a> */}
                              <Link
                                to={`/product-details/${product._id}`}
                                className="gray-bg"
                                // onClick={(e) => {
                                //   e.preventDefault();
                                //   // setQuickView(true);
                                // }}
                              >
                                <i className="fas fa-eye" />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* {product.upcoming && (
          <div className="countdown-time d-flex  justify-content-center product3-count">
            <div className="timer">
              <div className="d-flex">
                <span className="cdown days">
                  <span className="time-count">
                    {time(product.upcoming).days}
                  </span>
                  <p>Ngày</p>
                </span>
                <span className="cdown hour">
                  <span className="time-count">
                    {time(product.upcoming).hours}
                  </span>
                  <p>giờ</p>
                </span>
                <span className="cdown minutes">
                  <span className="time-count">
                    {time(product.upcoming).minutes}
                  </span>
                  <p>Phút</p>
                </span>
                <span className="cdown second mr-0">
                  <span>
                    <span className="time-count">
                      {time(product.upcoming).seconds}
                    </span>
                    <p>giây</p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        )} */}

                      <div className="single-product-info text-center transition-3 mt-2">
                        {/* <div className="rating rating-shop d-flex justify-content-center">
            {product.reating && <Reating rating={product.reating} />}
            <span className="gray-color2 ms-1 rate-product-home">
              ({product && product.reviews ? product.reviews : 0}{""})
            </span>
          </div> */}
                        {/* /rating */}
                        <h6 className="light-black-color2 fs-card-title">
                          <Link to={`/product-details/${product._id}`}>
                            <a>{product.name}</a>
                          </Link>
                        </h6>
                        <ul className="single-product-price d-flex mt-2 transition-3 justify-content-center">
                          <li>
                            {product.price && (
                              <span className="pr-2 d-inline-block">
                                <del>{Number(product.price)} VND</del>
                              </span>
                            )}
                            <span className="theme-color d-inline-block ms-1 font600">
                              {Number(
                                product.price -
                                  (product.price * product.discount) / 100
                              )}{" "}
                              VND
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {!1 && (
                      <ul className="product-action d-flex justify-content-center mt-2 mb-3">
                        <li>
                          <Link
                            href="#"
                            className="d-inline-block gray-bg bor-radius5 light-black-color9 plr-32 font14 font600 mr-6"
                            value={product._id}
                            onClick={(e) => handleAddToCart(e)}
                          >
                            Add to Cart
                          </Link>
                        </li>
                        {/* <li>
            <a
              href="#"
              onClick={(e) => onClickWishlist(e)}
              className={`d-inline-block gray-bg bor-radius5 light-black-color9 mr-6 font14 pr-15 pl-15 ${wishlist && wishlist.find((pro) => pro.id === product.id)
                ? "active"
                : ""
                } `}
            >
              <span>
                <i className="fas fa-heart"></i>
              </span>
            </a>
          </li> */}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {/*           
          <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-5  col-sm-12 col-12 pl-0">
            {purchasedProduct && (
              <SliderWithAutoPlayTwoRows extraClass="row best-deal-product-active  pt-40 mlr-1 ml--20" slidesToShow={5} rows={3}>
                {purchasedProduct &&
                  purchasedProduct.map((product) => (
                    <Product5
                      key={product.id}
                      product={product}
                      productActionOff
                    />
                  ))}
                {purchasedProduct &&
                  purchasedProduct.map((product) => (
                    <Product5
                      key={product.id}
                      product={product}
                      productActionOff
                    />
                  ))}
              </SliderWithAutoPlayTwoRows>
            )}
          </div> */}
        </div>
      </div>
      {/* most-purchased-item End */}

      {/* <div className="banner-area mb-60">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 wow fadeInLeft"
              data-delay="1.5s"
              style={{ visibility: "visible" }}
            >
              <div className="banner mb-30 transition-3 position-relative over-hidden ">
                <a className="d-block" href="/shop">
                  <img
                    className="img-zoom transition-3 width100 h-100"
                    src="/images/banner/banner-img.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                  <span className="banner-sub-tittle mt--4 d-block text-white font500" />
                  <h3 className="font500 pb-45 text-white">
                    <a href="/shop" />
                  </h3>
                  <p className="text-white font300 pb-1" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 wow fadeInRight"
              data-delay="1.5s"
              style={{ visibility: "visible" }}
            >
              <div className="banner mb-30 transition-3 position-relative over-hidden ">
                <a className="d-block" href="/shop">
                  <img
                    className="img-zoom transition-3 width100 h-100"
                    src="/images/banner/banner-img2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                  <span className="banner-sub-tittle mt--4 d-block banner-sub-tittle2 font500" />
                  <h3 className="font500 pb-45 light-black-color2">
                    <a href="/shop" />
                  </h3>
                  <p className="light-black-color2 font300 pb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Home;
