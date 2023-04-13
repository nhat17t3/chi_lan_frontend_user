import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Mobileheader from "../header/mobile-header";
import { useDispatch, useSelector } from "react-redux";
import { getListCategory } from "../../../actions/categoryAction";
import { getListBrand } from "../../../actions/brandAction";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cartState);
  const brands = useSelector((state) => state.brand);
  const categories = useSelector((state) => state.category);
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListBrand());
    dispatch(getListCategory());
  }, [dispatch]);

  const [subMenu, setSubMenu] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const openAndCloseMenu = (name) => setSubMenu(subMenu !== name ? name : "");

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      data-toggle="tooltip"
      data-selector="true"
      data-placement="bottom"
      title="My Account"
      className="dark-black-color"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span>
        <i className="fal fa-user-circle" />
      </span>
    </a>
  ));

  return (
    <>
      <div className="container-fluid">
        <header className="d-none d-lg-block">
          <div className="header-area header-area1">
            <div className="header extra-padding-55">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xxl-1 col-xl-1 col-xl-1  col-lg-2  col-md-2  col-sm-12 col-12 pr-md-0">
                    <div className="logo-area">
                      <div className="logo white-bg z-index1 position-relative">
                        <Link to="/">
                          <a
                            className="d-block"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="shopm"
                          >
                            <img style={{width: "100px"}} src="/images/ca-nhan/logo90x90.jpg" alt="shopm" />
                          </a>
                        </Link>
                      </div>
                      {/* <DasktopMenu /> */}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-xxl-11 col-xl-11  col-lg-10  col-md-10 col-sm-12 col-12 pl-md-0">
                    <div className="header-right-area pl-90">
                      <div className="header-top position-relative ptb-17 over-y-hidden">
                        <div className="row">
                          <form
                            className="col-xxl-8 col-xl-7  col-lg-7  col-md-3  col-sm-12 col-12 pr-0"
                            action={`/product/search?${search}`}
                          >
                            <div
                              className="header-search position-relative mr-1 d-lg-inline-block"
                              data-toggle="tooltip"
                              data-selector="true"
                              data-placement="bottom"
                              title="Search"
                            >
                              <div>
                                <div className="search-form">
                                  <div className="d-none  d-lg-inline-block width100">
                                    <input
                                      type="text"
                                      placeholder="Nhập tên sản phẩm"
                                      className="border-0 pl-45 width100 gray-bg4"
                                      value={search}
                                      name="search"
                                      onChange={(e) =>
                                        setSearch(e.target.value)
                                      }
                                    />
                                    <span className="position-absolute">
                                      <span className="icon-search" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /header-search */}
                            <div className="float-right d-none d-lg-inline-block ms-1">
                              <button
                                type="submit"
                                // onClick={(e) => handerSearch(e)}
                                className="web-btn header-btn theme-border1 d-inline-block text-capitalize white theme-bg position-relative over-hidden pl-35 pr-35 ptb-12"
                              >
                                Tìm kiếm
                              </button>
                            </div>
                          </form>
                          {/* /col */}
                          <div className="col-xxl-4 col-xl-5  col-lg-5  col-md-9  col-sm-0 col-0  pl-0 d-flex  align-items-center justify-content-end">
                            <div className="header-right d-flex align-items-center">
                              {/* <ul className="header-account d-none d-md-block mr-26">
                            <li className="d-none d-md-inline-block">
                              {auth.authenticate ? (<AuthorIcon />) : (<LoginIcon />)}
                            </li>
                          </ul> */}
                              <ul className="header-compare header-wishlist d-none d-md-block position-relative mr-26 pl-30">
                                {/* <li className="d-none d-md-inline-block">
                              <NotifyMe color="theme-bg" />
                            </li> */}
                              </ul>
                              {/* <ul className="header-compare header-wishlist d-none d-md-block position-relative mr-26 pl-30">
                                <li className="d-none d-md-inline-block">
                                  <Link to="/compare">
                                    <a
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="So sánh sản phẩm"
                                      className="dark-black-color"
                                    >
                                      <span>
                                        <i className="fal fa-random" />
                                      </span>
                                      <span
                                        className={`s-count position-absolute theme-bg text-white text-center`}
                                      >
                                        {wishlist && wishlist.length}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul> */}
                              <ul className="header-wishlist d-none d-md-block mr-26 pl-30 position-relative">
                                <li className="position-relative">
                                  <Link to="/wishlist">
                                    <a
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="View wishlist"
                                      className="dark-black-color"
                                    >
                                      <span>
                                        <i className="fal fa-heart" />
                                      </span>
                                      <span
                                        className={`s-count position-absolute theme-bg text-white text-center`}
                                      >
                                        {wishlist && wishlist.length}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>

                              <ul className="header-wishlist d-none d-md-block mr-26 pl-30 position-relative">
                                <li className="position-relative">
                                  <Link to="/carts">
                                    <a
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="View cart"
                                      className="dark-black-color"
                                    >
                                      <span>
                                        <i className="fal fa-shopping-bag" />
                                      </span>
                                      <span
                                        className={`s-count position-absolute theme-bg text-white text-center`}
                                      >
                                        {cartState.cart}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                              <ul className="header-wishlist d-none d-md-block mr-26 pl-30 position-relative">
                                <li className="d-none d-md-inline-block">
                                  {/* {auth.authenticate ? (<AuthorIcon />) : (<Link to="/login"> */}
                                  {auth.authenticate ? (
                                    <Dropdown autoClose={true}>
                                      <Dropdown.Toggle
                                        as={CustomToggle}
                                        id="dropdown-custom-components"
                                      ></Dropdown.Toggle>

                                      <Dropdown.Menu renderMenuOnMount={true}>
                                        <Dropdown.Item>
                                          <Link to="/my-account">
                                            Tài khoản của tôi
                                          </Link>
                                        </Dropdown.Item>
                                        {/* <Dropdown.Item > */}
                                        <Link className="ms-3" to="/logout">
                                          Đăng xuất
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  ) : (
                                    <Link to="/login">
                                      <a
                                        data-toggle="tooltip"
                                        data-selector="true"
                                        data-placement="bottom"
                                        title="Đăng nhập"
                                        className="dark-black-color"
                                      >
                                        Đăng nhập
                                      </a>
                                    </Link>
                                  )}
                                </li>
                              </ul>
                              {/* /h-shop */}
                            </div>
                            {/* /header-right */}
                          </div>
                          {/* /col */}
                        </div>
                        {/* /row */}
                      </div>
                      {/* header-top */}
                      <div
                        className="header-bottom home1-header-bottom"
                        id="header-sticky"
                      >
                        <div className="row align-items-center justify-content-lg-between position-relative">
                          <div className="col-xxl-8 col-xl-8 col-lg-9 col-md-1 col-sm-1 col-1 pr-0 d-flex align-items-center position-static">
                            <div className="main-menu main-menu-1">
                              <nav id="mobile-menu">
                                <ul className="d-block">
                                  <li className="mx-2">
                                    <Link to={`/`}>
                                      <a className="active">Trang chủ</a>
                                    </Link>
                                  </li>
                                  <li className="mx-2">
                                    <Link to={`/products`}>
                                      <a className="active ">Cửa hàng</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={`/products`}>
                                      <a className="active dp-menu">
                                        Danh mục sản phẩm
                                      </a>
                                    </Link>
                                    <ul className="mega-menu box-shadow-gray pt-25 pb-20 pl-30 pr-30">
                                      {categories.listCategory.map(
                                        (category) => (
                                          <li>
                                            <Link
                                              to={`/category/${category._id}`}
                                            >
                                              <a>{category.name}</a>
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </li>

                                  <li className="mx-2">
                                    <Link to={`/`}>
                                      <a className="active ">Liên hệ</a>
                                    </Link>
                                  </li>
                                  <li className="mx-2">
                                    <Link to={`/`}>
                                      <a className="active">Bài viết</a>
                                    </Link>
                                  </li>
                                  {/* {categories ? (categories?.map((category) => (
          // <Product2 product={product} key={product.id} />
          category.child_category.length > 0 ? (
            <li>
              <Link  to={`/shop?category_parent=${category.slug}`}>
                <a className="active dp-menu">{category.category_name}</a>
              </Link>
              <ul className="mega-menu box-shadow-gray pt-25 pb-20 pl-30 pr-30">
                {category.child_category.map((child) => (
                  <li>
                    <Link to={`/shop?category_name=${child.category_name}`}>
                      <a>{child.category_name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : null
        ))) : null} */}
                                </ul>
                              </nav>
                            </div>
                            {/* /main-menu */}
                          </div>
                          {/* /col */}
                          <div className="col-xxl-4 col-xl-4  col-lg-3 col-md-11 col-sm-12 col-12 pl-0">
                            <div className="header-bottom-right d-flex align-items-center justify-content-end">
                              <ul className="free-order d-xl-block pr-20">
                                <li>
                                  {/* <Link to="/shop">
                                    <a>Miễn phí giao hàng</a>
                                  </Link> */}
                                </li>
                              </ul>
                              {/* /free-order */}
                              <ul className="track-order pl-20 pr-20 position-relative">
                                <li>
                                  {/* <a to="/my-account">Theo dõi đơn hàng</a> */}
                                  {/* {auth.authenticate ? (<div className="dropdown">
                                <a className="dropbtn">Theo dõi đơn hàng</a>
                                <div className="dropdown-content">
                                  {lastOrder.map((order) => (
                                    <Link to={`/my-account/history-order/${order.order_code}`}>
                                      <a className="p-name drowpdown-text-color">Mã: {order.order_code}</a>
                                    </Link>
                                    // <a to="#">Mã: {order.order_code}</a>
                                  ))}
                                  <Link to={`/my-account/history-order`}>
                                    <a className="p-name drowpdown-text-color" style={{ textAlign: 'center' }}>Xem tất cả</a>
                                  </Link>
                                </div>
                              </div>) : (<a to="/login">Theo dõi đơn hàng</a>)} */}
                                </li>
                              </ul>
                              {/* /news-letter */}
                              <div className="d-block d-lg-none">
                                <a
                                  className="mobile-menubar pt-0 ml-20 hvr"
                                  to="#"
                                >
                                  <span className="icon-menu" />
                                </a>
                              </div>
                              {/* /mobile-menubar */}
                            </div>
                            {/* /header-bottom-right */}
                          </div>
                          {/* /col */}
                        </div>
                        {/* /row */}
                      </div>
                      {/* /header-bottom */}
                    </div>
                    {/* /header-right-area */}
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container-f */}
            </div>
            {/* /header */}
          </div>
          {/* /header-area */}
        </header>

        <Fragment>
          <div className="mobile-menu-area pt-10 pb-10 d-lg-none">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6">
                  <Link to="/">
                    <a>
                      <div className="logo">
                        <img style={{width: "100px"}} src="/images/ca-nhan/logo90x90.jpg" alt="" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-6 ">
                  <div className="d-flex justify-content-end">
                    <ul className="header-account  d-sm-block">
                      {/* <li className="d-none d-md-inline-block">
                        <Link to="/login">
                          <a
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="My Account"
                            className="dark-black-color"
                          >
                            <span>
                              <i className="fal fa-user-circle"></i>
                            </span>
                          </a>
                        </Link>
                      </li> */}
                      <li className=" d-md-inline-block">
                                  {/* {auth.authenticate ? (<AuthorIcon />) : (<Link to="/login"> */}
                                  {auth.authenticate ? (
                                    <Dropdown autoClose={true}>
                                      <Dropdown.Toggle
                                        as={CustomToggle}
                                        id="dropdown-custom-components"
                                      ></Dropdown.Toggle>

                                      <Dropdown.Menu renderMenuOnMount={true}>
                                        <Dropdown.Item>
                                          <Link to="/my-account">
                                            Tài khoản của tôi
                                          </Link>
                                        </Dropdown.Item>
                                        {/* <Dropdown.Item > */}
                                        <Link className="ms-3" to="/logout">
                                          Đăng xuất
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  ) : (
                                    <Link to="/login">
                                      <a
                                        data-toggle="tooltip"
                                        data-selector="true"
                                        data-placement="bottom"
                                        title="Đăng nhập"
                                        className="dark-black-color"
                                      >
                                        <span>
                              <i className="fal fa-user-circle"></i>
                            </span>
                                      </a>
                                    </Link>
                                  )}
                                </li>
                    </ul>
                    {/* <ul className="header-compare header-wishlist d-none d-sm-block position-relative pl-25">
                      <li className="d-none d-md-inline-block">
                        <Link to="/compare">
                          <a
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="So sánh sản phẩm"
                            className="dark-black-color"
                          >
                            <span>
                              <i className="fal fa-random" />
                            </span>
                            <span
                              className={`s-count position-absolute h2-theme-bg text-white text-center`}
                            >
                              {wishlist && wishlist.length}
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul> */}
                    {/* <ul className="header-wishlist d-none d-sm-block pl-25 position-relative">
                      <li className="position-relative">
                        <Link to="/wishlist">
                          <a
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="View wishlist"
                            className="dark-black-color"
                          >
                            <span>
                              <i className="fal fa-heart" />
                            </span>
                            <span
                              className={`s-count position-absolute h2-theme-bg  text-white text-center`}
                            >
                              {wishlist && wishlist.length}
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul> */}
                    <ul className="header-wishlist  d-sm-block pl-25 position-relative">
                      <li className="position-relative">
                        <Fragment>
                          <Link to="/carts">
                            <a
                              data-toggle="tooltip"
                              data-selector="true"
                              data-placement="bottom"
                              title="View cart"
                              className="dark-black-color"
                            >
                              <span>
                                <i className="fal fa-shopping-bag" />
                              </span>
                              <span
                                className={`s-count position-absolute h2-theme-bg  text-white text-center`}
                              >
                                {cartState && cartState.cart}
                              </span>
                            </a>
                          </Link>
                        </Fragment>
                      </li>
                    </ul>

                    <button
                      className="mobile-menubar bar-style"
                      onClick={() => setOpenMenu(true)}
                    >
                      <i className="fal fa-bars" />
                    </button>
                  </div>
                  {/* /h-shop */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`side-mobile-menu bg-white pt-20 pb-30 pl-40 pr-40 pb-100 d-lg-none ${
              openMenu ? "open-menubar" : ""
            }`}
          >
            <div className="close-icon d-flex justify-content-end mt-0">
              <a
                className="close-menu d-block"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}
              >
                <span className="icon-clear" />
              </a>
            </div>
            <div className="header-search-content position-relative d-block d-xl-none mt-20">
              <form
                action={`/product/search?${search}`}
                className="position-relative"
              >
                <input
                  className="form-control rounded-0 h5-theme-color px-0"
                  type="text"
                  name="search"
                  value={search}
                  placeholder="Tìm kiếm..."
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* <button
                  className="position-absolute primary-color d-block"
                  type="submit"
                >
                  <span className="icon-search" />
                </button> */}
              </form>
            </div>
            <div className="mobile-menu mt-10 mean-container">
              <div className="mean-bar">
                <nav className="mean-nav">
                  <ul className="d-block" id="metismenu">
                    <li className="mean-last" onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/products" >
                        <a  className="mr-0">Cửa hàng</a>
                      </Link>
                    </li>
                    <li className="mean-last">
                      <Link to="/products">
                        <a className="dp-menu" aria-expanded="true">
                          Danh mục sản phẩm
                        </a>
                      </Link>
                      <ul
                        className="mega-menu box-shadow-gray pt-25 pb-20 pl-30 pr-30"
                        style={{
                          display: subMenu === "home" ? "block" : "none",
                        }}
                      >
                        {categories.listCategory.map((category) => (
                          <li onClick={(e) => {
                            e.preventDefault();
                            setOpenMenu(false);
                            setSubMenu("");
                          }}>
                            <Link to={`/category/${category._id}`}>
                              <a>{category.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <a
                        className="mean-expand"
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openAndCloseMenu("home");
                        }}
                      >
                        {subMenu === "home" ? "-" : "+"}
                      </a>
                    </li>

                    <li className="mean-last" onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/">
                        <a>Bài viết</a>
                      </Link>
                    </li>
                    <li className="mean-last" onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/">
                        <a>Liên hệ</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="menu-login pt-10 d-block ">
              {auth.authenticate ? (
                <>
                  <ul className="header-login d-flex justify-content-between mobile-border-b ">
                    <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/my-account">
                        <a>Tài khoản của tôi</a>
                      </Link>
                    </li>
                    <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/my-account">
                        <a>
                          <i className="fal fa-user-circle" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="header-login d-flex justify-content-between mobile-border-b ">
                    <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/logout">
                        <a>Đăng xuất</a>
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="header-login d-flex justify-content-between mobile-border-b ">
                    <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/login">
                        <a>Đăng nhập</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="header-login d-flex justify-content-between mobile-border-b ">
                    <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                      <Link to="/register">
                        <a>Đăng kí</a>
                      </Link>
                    </li>
                  </ul>
                </>
              )}

              <ul className="header-heart d-flex justify-content-between mobile-border-b">
                <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                  <Link to="/carts">
                    <a>Giỏ hàng</a>
                  </Link>
                </li>
                <li onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(false);
                  setSubMenu("");
                }}>
                  <Link to="/carts">
                    <a>
                      <span className="fal fa-shopping-bag" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* /header-right */}
            <h6 className="light-black-color2 font600 mt-30 pb-1 border-primary-b d-inline-block">
              Liên hệ với chúng tôi
            </h6>
            <ul className="contact-add mt-20">
              <li className="mb-15 primary-color">
                <span className="pe-1">
                  <i className="fas fa-map-marker-alt" />
                </span>
                Chợ Cạn, Triệu Sơn, Triệu Phong, Quảng Trị
              </li>
              <li className="mb-20 primary-color">
                <span className="pe-1">
                  <i className="far fa-envelope" />
                </span>
                tranlan@gmail.com
              </li>
              <li className="mb-15">
                <a className=" primary-color" to="tell:+01500123994">
                  <span className="pe-1">
                    <i className="fas fa-phone" />
                  </span>
                  0919 410 234
                </a>
              </li>
            </ul>
            <ul className="social-link pt-2 mb-150">
              <li className="d-inline-block">
                <a
                  className="active  primary-color-center pr-0 d-inline-block transition-3"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className=" primary-color text-center pr-0 d-inline-block transition-3"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className=" primary-color text-center pr-0 d-inline-block transition-3"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className=" primary-color text-center pr-0 d-inline-block transition-3"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-behance" />
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className=" primary-color text-center pr-0 d-inline-block transition-3"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
            {/* social-link */}
          </div>

          <div
            className={`body-overlay ${openMenu ? "opened" : ""}`}
            onClick={() => {
              setOpenMenu(false);
              setSubMenu("");
            }}
          />
        </Fragment>
      </div>
    </>
  );
};

export default Header;
