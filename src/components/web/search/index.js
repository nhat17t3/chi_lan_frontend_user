import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { addToCart } from "../../../actions/cartAction";
import { getSearch } from "../../../actions/productActions";
import { generatePublicUrl } from "../../../urlConfig";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const products = useSelector((state) => state.product);

  let name= useQuery().get("search");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(name));
    window.scrollTo(0, 0);
  }, [dispatch, name]);
  const handleAddToCart = (id) => {
    // event.preventDefault();
    const product = products.products.find(
      // (product) => product._id === event.target.value
      (product) => product._id === id
    );

    dispatch(addToCart(product));
  };

  return (
    
    <>
   {/* most-purchased-item Start */}
   <div
        className="handpick-items-area wow fadeInUp animated"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="row free-shopping-area light-theme-bg  mlr-1">
            <div className="col-xl-12 col-lg-12  col-md-  col-sm- col-">
              <div className="free-shopping pt-15 pb-15 text-center">
                <h4 className="theme-color mb-0 font600 title-buy-most">
                  Danh sách sản phẩm tìm kiếm
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
                        <Link href={`/shop/${product.slug}`}>
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
                          <button
                            href="#"
                            className="d-inline-block gray-bg bor-radius5 light-black-color9 plr-32 font14 font600 mr-6"
                            value={product._id}
                            onClick={(e) => handleAddToCart(e)}
                          >
                            Add to Cart
                          </button>
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
    </>
  );
};

export default Search;
