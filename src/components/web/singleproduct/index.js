import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Nav, Tab } from "react-bootstrap";

import {
  getListProduct,
  getProductById,
} from "../../../actions/productActions";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cartAction";

const Singleproduct = (props) => {
  const products = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getListProduct());
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(products.product_detail);
  }, [products.product_detail]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = products.products.find(
      (product) => product._id === event.target.value
    );

    dispatch(addToCart(product));
  };
  return (
    <div className="product-details-area pro-top-thamb pro-bottom-thamb pt-80">
      <div className="container">
        <div className="product-details-content">
          <div
            className="single-product-tab-content tab-content"
            id="myTabContent2"
          >
            <div className="row">
              <div className="col-xxl-7 col-xl-7  col-lg-6  col-md-11  col-sm-12 col-12">
                <div className="product-left-img-tab mt-20">
                  <div className="d-flex align-items-start">
                        <Tab.Container defaultActiveKey="tab-0">
                          <Nav
                            as="div"
                            className="nav flex-column nav-pills me-4"
                          >
                            {product && product.productPictures &&
                              product.productPictures.map((img, i) => (
                                <Nav.Link
                                  as="button"
                                  eventKey={`tab-${i}`}
                                  key={i}
                                >
                                  <img
                                    className="product-thumbnail w-100 border-gray2"
                                    src={generatePublicUrl(
                                    img.img)}
                                    alt=""
                                  />
                                </Nav.Link>
                              ))}
                          </Nav>
                          <Tab.Content className="w-100">
                            {product && product.productPictures &&
                              product.productPictures.map((img, i) => (
                                <Tab.Pane
                                  eventKey={`tab-${i}`}
                                  className="position-relative"
                                  key={i}
                                >
                                  <div className="product-img border-gray2 w-100">
                                    <img
                                      src={generatePublicUrl(
                                        img.img)}
                                      alt="product"
                                      className="w-100"
                                    />
                                  </div>
                                </Tab.Pane>
                              ))}
                          </Tab.Content>
                        </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5  col-lg-6  col-md-11  col-sm-12 col-12">
                <div className="product-view-info mt-30">
                  <div className="product-left-img-info">
                    <h3 className="mb-20 product-name-detail">
                      {product.name}
                    </h3>

                    {/* <div className="rating rating-shop d-flex align-items-center">
                      <ul className="pro-rating d-flex mb-2">
                        <li>
                          <span>
                            <i className="fas fa-star" />{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-star" />{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-star" />{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-star" />{" "}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-star" />{" "}
                          </span>
                        </li>
                      </ul>
                      <span className="gray-color2 ms-1">(4 Đánh giá)</span>
                    </div> */}
                    <div className="price pb-18 pt-3">
                    { product.discount != 0 ?
                      (<> <a className="rc-price font700">{product.price -
                        (product.price *
                          product.discount) /
                          100} VNĐ</a><a className="text-muted ml-3"><del className="mx-3">{product.price} VNĐ</del></a></>
        ) :
                       (<h6 className="rc-price font700">{product.price} VNĐ</h6>) }
                    </div>
                    <div className="p-info-text pr-55">
                      <p className="gray-color2" />
                      <p className="gray-color2" />
                    </div>
                    <div className="all-info d-sm-flex align-items-center">
                      <div className="quick-add-to-cart d-sm-flex align-items-center mb-15" />
                      <div className="pro-list-btn d-inline-block mr-10 mb-15">
                      <button  value={product._id}
                       onClick={(e) => handleAddToCart(e)}
                          href="#"
                          className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                      {/* <div className="pro-wishlist d-inline-block mb-15">
                        <a
                          href="#"
                          className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden plr-16 ptb-15   "
                        >
                          <span className="icon-heart" />
                        </a>
                      </div> */}
                    </div>
                    {/* <ul className="review-cat d-sm-flex align-items-center pt-20 pb-15">
                      <li className="mb-1 mb-2 mr-6 d-inline-block">
                        <span className="cat-title dark-black-color font600">
                          Phân loại :
                        </span>
                      </li>
                      <li className="mr-6 mb-2 d-inline-block position-relative">
                        <a
                          className="gray-color2 font600 text-capitalize me-1"
                          href="/shop/category/hoodies-vs-sweatshirts"
                        >
                          Hoodies vs Sweatshirts{" "}
                        </a>
                      </li>
                    </ul> */}
                    <p className="mb-4">{product.description}</p>
                    <ul className="social-link mt-10">
                      <li className="d-block d-sm-inline-block mr-12">
                        <span className="cat-title dark-black-color font600">
                          Chia sẻ:
                        </span>
                      </li>
                      <li
                        className="d-inline-block"
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <button
                          aria-label="facebook"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "0px",
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <a className="d-inline-block font13 text-uppercase transition-3 mb-20">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </button>
                      </li>
                      <li
                        className="d-inline-block"
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <button
                          aria-label="twitter"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "0px",
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <a
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="#"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-twitter" />
                            </span>
                          </a>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="product-review-tab-area mt-60">
                <div className="nav-pills mb-3 nav" role="tablist">
                  <div className="nav-item">
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="des"
                      aria-selected="true"
                      className=" bg-transparent pl-0 title position-relative hvr2 font600 nav-link active"
                    >
                      Mô tả
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="info"
                      aria-selected="false"
                      className="bg-transparentt pl-0 title position-relative hvr2 font600 nav-link"
                    >
                      Thông tin chi tiết
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="review"
                      aria-selected="false"
                      className="nav-link bg-transparentt pl-0 title position-relative hvr2 font600 nav-link"
                    >
                      Bình luận (4)
                    </a>
                  </div>
                </div>
                <div className="mt-30 tab-content">
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="fade tab-pane active show"
                  >
                    <div className="describe-area">
                      <div className="product-details-text pr-10 mb-50">
                        <p className="gray-color2 dc-text1 pb-6">
                          <span style={{ whiteSpace: "pre-line" }}>
                            Áo sweater nỉ đôi bạn, Áo Hoodie Ulzzang Form rộng
                            Avocado ?THÔNG TIN SẢN PHẨM : - Màu sắc : nhiều màu
                            - Kích thước : freesize dưới 75kg - Chất liệu : Nỉ
                            bông ?Lưu ý : + Giao hàng tận nơi. Nhận hàng thanh
                            toán. + Cam kết: Chất lượng tương xứng giá tiền. +
                            Trả hàng hoàn tiền trong 24h nếu sản phẩm bị lỗi.
                            (Nếu Sản phẩm bị lỗi Quý khách vui lòng inbox liên
                            hệ Shop để được hỗ trợ đổi hàng hoặc Trả hàng/Hoàn
                            tiền cho Khách ạ. Rất mong Quý Khách đừng vì lỗi nhỏ
                            mà cho Shop 1 - 2 sao tội nghiệp Shop! Và Quý khách
                            sẽ mất đi quyền lợi đổi hàng nha!) + Tiết kiệm hơn
                            khi mua nhiều. ? Quý Khách vui lòng đọc kỹ Thông Tin
                            Sản Phẩm trước khi đặt hàng, tránh đặt rồi hủy hàng
                            nhé, hoặc có hủy thì hủy sớm trước khi đơn hàng đưa
                            vận chuyển nhé. Vì sau khi đặt hàng, hàng sẽ được
                            Shop gói và gửi đi liền trong ngày hoặc ngày hôm
                            sau. Vì thế việc hủy hàng sẽ gây nhiều khó khăn cho
                            Shop. Rất mong Quý Khách cảm thông và đắn đo giúp
                            Shop!!! ? Theo quy định của Shopee Khách hàng sẽ
                            KHÔNG ĐƯỢC XEM HÀNG trước khi thanh toán nhưng được
                            đổi trả sau 24h nếu sản phẩm bị lỗi tính từ thời
                            điểm nhận được hàng. Hãy chắc chắn nhận hàng và để
                            thông tin chính xác khi ấn Mua hàng tránh trường hợp
                            giao đi rồi lại quay về. ? Hàng sẽ được Shop giao
                            cho vận chuyển trong 1 ngày kể từ khi đặt hàng. Vì
                            vậy, nếu có yêu cầu hủy đơn hàng vui lòng inbox Shop
                            và quyết định trước khi shop giao cho vận chuyển.
                            Vận chuyển của Shopee sẽ liên hệ quý khách để giao
                            hàng. (Nội thành HCM HN 1-2 ngày, Ngoại thành và các
                            Tỉnh TP khác 3-5 ngày) #áosweater #áo_sweater
                            #aosweater #ao_sweater #samsam4896
                            #áosweaternỉđôibạn #áo_sweater_nỉ_đôi_bạn #áođôibạn
                            #áo_đôi_bạn #áonỉđôibạn #áo_nỉ_đôi_bạn #áohoodie
                            #áo_hoodie #aohoodie #ao_hoodie #áohoodienữ
                            #áo_hoodie_nữ #aohoodienu #ao_hoodie_nu #aohoodienam
                            #ao_hoodie_nam #hoodienữ #hoodie_nữ #hoodienu
                            #hoodie_nu #áokhoáchoodie #áo_khoác_hoodie
                            #aokhoachoodie #ao_khoac_hoodie
                          </span>
                        </p>
                      </div>{" "}
                      <div className="p-review-area pb-90">
                        <div className="row">
                          <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12 mb-20">
                            <img src="/images/banner/banner-img.jpg" alt="" />
                          </div>
                          <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12 mb-20">
                            <img src="/images/banner/banner-img2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="fade tab-pane"
                  >
                    <div className="additional-information mt-50 h2-gray-background pt-40 pl-50 pr-50 pb-50 mb-100">
                      <div className="row">
                        <div className="col-xl-12">
                          <h5 className="title mb-20 font600">
                            Thêm thông tin sản phẩm
                          </h5>
                          <table className="table border mt-25 table-responsive">
                            <tbody>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Danh Mục</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>
                                      ShopeeWomen ClothesHoodies &amp;
                                      SweatshirtsHoodies{" "}
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">
                                    Chiều dài tay áo
                                  </h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Dài tay </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Chất liệu</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Nỉ </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Petite</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Không </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Xuất xứ</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Việt Nam </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Mẫu</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Họa tiết </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Kho hàng</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>286332 </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Gửi từ</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li>Quận 10, TP. Hồ Chí Minh</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-color-area aditional-info border-bottom border-top ">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Màu</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li className="me-1"> </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr className="add-brand-area aditional-info border-bottom h2-gray-background">
                                <td className="tbl-title pl-5">
                                  <h6 className="add-title">Size</h6>
                                </td>
                                <td className="tbl-content">
                                  <ul className="add-color d-flex">
                                    <li className="me-1 text-capitalize">
                                      Xanh ngọc,{" "}
                                    </li>
                                    <li className="me-1 text-capitalize">
                                      Trắng,{" "}
                                    </li>
                                    <li className="me-1 text-capitalize">
                                      Cam Đất{" "}
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="fade tab-pane"
                  >
                    <div className="col-xl-11 col-lg-11  col-md-12  col-sm-12 col-12">
                      <div className="review-comments-area pb-60 mt-20">
                        <h5 className="primary-color font600">
                          4 đánh giá cho sản phẩm
                        </h5>
                        <div className="review-comments-area mt-35">
                          <div className="row align-items-center align-items-sm-start align-items-md-center">
                            <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-sm-0 pr-md-3">
                              <div className="client-avatar">
                                <img
                                  className="avatar-img width100 height100"
                                  src="/images/bg/avater3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-xl-9  col-lg-9  col-md-10  col-sm-10 col-12 pl-0 mt-10">
                              <div className="review-text pl-60">
                                <div className="review-head d-sm-flex justify-content-between align-items-center">
                                  <div className="d-sm-flex">
                                    <h5 className="font600 pr-10">
                                      Dương TrươngHoàngMinh
                                    </h5>
                                    <div className="rating rating-shop d-flex">
                                      <ul className="pro-rating d-flex mb-2">
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <span className="primary-color font600">
                                    30/12/2021 22:48:24
                                  </span>
                                </div>
                                <p className="dc-text1 gray-color2 mb-2 mt-10">
                                  Chất vải khá ok, màu đỉnh thật sự. ở ngoài màu
                                  tươi hơn ảnh á. tui m62 mặc đến mông quá là
                                  điẹp luôngggg phần cổ áo đẹp lắmmm nkaaa với
                                  giá tiền này quá là rẻ ổn áp thì chất vải cũng
                                  ok. Khuyên mọi người nên mua nha Sẽ ủng hộ
                                  shop thêm nha Chất vải khá ok, màu đỉnh thật
                                  sự.Chất vải khá ok, màu đỉnhCảm ơn Shop mình
                                  nhận dc áo rồi nè !!!!!!!!! Áo siêu ưng luôn
                                  dáng Unisex tay lỡ form rộng, mặc tây cực kỳ.
                                  Mua dc giá sale mua dc áo đẹp như thế này thì
                                  tuyệt luôn. Shop còn có cả thư cảm ơn trong
                                  gói hàng, rất thích cách phục vụ của shop Sẽ
                                  ủng hộ thêm ạ Cảm ơn shop nha..- Shop này bán
                                  áo giá hợp lý, giao hàng nhanh - Áo được đóng
                                  gói rất ok, chất lượng tuyệt vời mặc rất thoải
                                  mái và mát - Mk mua hơn trục mẫu mặc dần :) AE
                                  mua ủng hộ shop nhé !!!!!Quá tuyệt vời, đánh
                                  giá 5 sao cả chất lượng sản phẩm lẫn tư vấn
                                  khách hàng nhé. Áo chất rất đẹp, k thô , ko
                                  quá dày k quá mỏng, mặc k bị rát, vải ko quá
                                  nóng. Tư vấn khách hàng quá dễ thương, mình
                                  thật sự rất thích thái độ làm việc của shop.
                                  Chắc chắn sẽ mua tiếp ủng hộ shop nhé
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center align-items-sm-start align-items-md-center">
                            <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-sm-0 pr-md-3">
                              <div className="client-avatar">
                                <img
                                  className="avatar-img width100 height100"
                                  src="/images/bg/avater3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-xl-9  col-lg-9  col-md-10  col-sm-10 col-12 pl-0 mt-10">
                              <div className="review-text pl-60">
                                <div className="review-head d-sm-flex justify-content-between align-items-center">
                                  <div className="d-sm-flex">
                                    <h5 className="font600 pr-10">
                                      Hợp PhạmQuang
                                    </h5>
                                    <div className="rating rating-shop d-flex">
                                      <ul className="pro-rating d-flex mb-2">
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <span className="primary-color font600">
                                    30/12/2021 22:48:24
                                  </span>
                                </div>
                                <p className="dc-text1 gray-color2 mb-2 mt-10">
                                  Chất vải khá ok, màu đỉnh thật sự. ở ngoài màu
                                  tươi hơn ảnh á. tui m62 mặc đến mông quá là
                                  điẹp luôngggg phần cổ áo đẹp lắmmm nkaaa với
                                  giá tiền này quá là rẻ ổn áp thì chất vải cũng
                                  ok. Khuyên mọi người nên mua nha Sẽ ủng hộ
                                  shop thêm nha Chất vải khá ok, màu đỉnh thật
                                  sự.Chất vải khá ok, màu đỉnhCảm ơn Shop mình
                                  nhận dc áo rồi nè !!!!!!!!! Áo siêu ưng luôn
                                  dáng Unisex tay lỡ form rộng, mặc tây cực kỳ.
                                  Mua dc giá sale mua dc áo đẹp như thế này thì
                                  tuyệt luôn. Shop còn có cả thư cảm ơn trong
                                  gói hàng, rất thích cách phục vụ của shop Sẽ
                                  ủng hộ thêm ạ Cảm ơn shop nha..- Shop này bán
                                  áo giá hợp lý, giao hàng nhanh - Áo được đóng
                                  gói rất ok, chất lượng tuyệt vời mặc rất thoải
                                  mái và mát - Mk mua hơn trục mẫu mặc dần :) AE
                                  mua ủng hộ shop nhé !!!!!Quá tuyệt vời, đánh
                                  giá 5 sao cả chất lượng sản phẩm lẫn tư vấn
                                  khách hàng nhé. Áo chất rất đẹp, k thô , ko
                                  quá dày k quá mỏng, mặc k bị rát, vải ko quá
                                  nóng. Tư vấn khách hàng quá dễ thương, mình
                                  thật sự rất thích thái độ làm việc của shop.
                                  Chắc chắn sẽ mua tiếp ủng hộ shop nhé
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center align-items-sm-start align-items-md-center">
                            <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-sm-0 pr-md-3">
                              <div className="client-avatar">
                                <img
                                  className="avatar-img width100 height100"
                                  src="/images/bg/avater3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-xl-9  col-lg-9  col-md-10  col-sm-10 col-12 pl-0 mt-10">
                              <div className="review-text pl-60">
                                <div className="review-head d-sm-flex justify-content-between align-items-center">
                                  <div className="d-sm-flex">
                                    <h5 className="font600 pr-10">
                                      Giang NguyễnTrường
                                    </h5>
                                    <div className="rating rating-shop d-flex">
                                      <ul className="pro-rating d-flex mb-2">
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <span className="primary-color font600">
                                    30/12/2021 22:48:24
                                  </span>
                                </div>
                                <p className="dc-text1 gray-color2 mb-2 mt-10">
                                  Chất vải khá ok, màu đỉnh thật sự. ở ngoài màu
                                  tươi hơn ảnh á. tui m62 mặc đến mông quá là
                                  điẹp luôngggg phần cổ áo đẹp lắmmm nkaaa với
                                  giá tiền này quá là rẻ ổn áp thì chất vải cũng
                                  ok. Khuyên mọi người nên mua nha Sẽ ủng hộ
                                  shop thêm nha Chất vải khá ok, màu đỉnh thật
                                  sự.Chất vải khá ok, màu đỉnhCảm ơn Shop mình
                                  nhận dc áo rồi nè !!!!!!!!! Áo siêu ưng luôn
                                  dáng Unisex tay lỡ form rộng, mặc tây cực kỳ.
                                  Mua dc giá sale mua dc áo đẹp như thế này thì
                                  tuyệt luôn. Shop còn có cả thư cảm ơn trong
                                  gói hàng, rất thích cách phục vụ của shop Sẽ
                                  ủng hộ thêm ạ Cảm ơn shop nha..- Shop này bán
                                  áo giá hợp lý, giao hàng nhanh - Áo được đóng
                                  gói rất ok, chất lượng tuyệt vời mặc rất thoải
                                  mái và mát - Mk mua hơn trục mẫu mặc dần :) AE
                                  mua ủng hộ shop nhé !!!!!Quá tuyệt vời, đánh
                                  giá 5 sao cả chất lượng sản phẩm lẫn tư vấn
                                  khách hàng nhé. Áo chất rất đẹp, k thô , ko
                                  quá dày k quá mỏng, mặc k bị rát, vải ko quá
                                  nóng. Tư vấn khách hàng quá dễ thương, mình
                                  thật sự rất thích thái độ làm việc của shop.
                                  Chắc chắn sẽ mua tiếp ủng hộ shop nhé
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center align-items-sm-start align-items-md-center">
                            <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-sm-0 pr-md-3">
                              <div className="client-avatar">
                                <img
                                  className="avatar-img width100 height100"
                                  src="/images/bg/avater3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-xl-9  col-lg-9  col-md-10  col-sm-10 col-12 pl-0 mt-10">
                              <div className="review-text pl-60">
                                <div className="review-head d-sm-flex justify-content-between align-items-center">
                                  <div className="d-sm-flex">
                                    <h5 className="font600 pr-10">
                                      Nhân ĐinhThành
                                    </h5>
                                    <div className="rating rating-shop d-flex">
                                      <ul className="pro-rating d-flex mb-2">
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fas fa-star" />{" "}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <span className="primary-color font600">
                                    30/12/2021 22:48:24
                                  </span>
                                </div>
                                <p className="dc-text1 gray-color2 mb-2 mt-10">
                                  Chất vải khá ok, màu đỉnh thật sự. ở ngoài màu
                                  tươi hơn ảnh á. tui m62 mặc đến mông quá là
                                  điẹp luôngggg phần cổ áo đẹp lắmmm nkaaa với
                                  giá tiền này quá là rẻ ổn áp thì chất vải cũng
                                  ok. Khuyên mọi người nên mua nha Sẽ ủng hộ
                                  shop thêm nha Chất vải khá ok, màu đỉnh thật
                                  sự.Chất vải khá ok, màu đỉnhCảm ơn Shop mình
                                  nhận dc áo rồi nè !!!!!!!!! Áo siêu ưng luôn
                                  dáng Unisex tay lỡ form rộng, mặc tây cực kỳ.
                                  Mua dc giá sale mua dc áo đẹp như thế này thì
                                  tuyệt luôn. Shop còn có cả thư cảm ơn trong
                                  gói hàng, rất thích cách phục vụ của shop Sẽ
                                  ủng hộ thêm ạ Cảm ơn shop nha..- Shop này bán
                                  áo giá hợp lý, giao hàng nhanh - Áo được đóng
                                  gói rất ok, chất lượng tuyệt vời mặc rất thoải
                                  mái và mát - Mk mua hơn trục mẫu mặc dần :) AE
                                  mua ủng hộ shop nhé !!!!!Quá tuyệt vời, đánh
                                  giá 5 sao cả chất lượng sản phẩm lẫn tư vấn
                                  khách hàng nhé. Áo chất rất đẹp, k thô , ko
                                  quá dày k quá mỏng, mặc k bị rát, vải ko quá
                                  nóng. Tư vấn khách hàng quá dễ thương, mình
                                  thật sự rất thích thái độ làm việc của shop.
                                  Chắc chắn sẽ mua tiếp ủng hộ shop nhé
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-review mt-80 pb-10">
                          <h5 className="mb-30 font600">Thêm bình luận </h5>
                          <div className="d-flex">
                            <span className="pr-15 mb-15">Bạn đánh giá:</span>
                            <div className="rating rating-shop d-flex mb-15">
                              <div className="rating rating-shop d-flex">
                                <div
                                  className="star-ratings"
                                  title="0 Stars"
                                  style={{
                                    position: "relative",
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                  }}
                                >
                                  <svg
                                    className="star-grad"
                                    style={{
                                      position: "absolute",
                                      zIndex: 0,
                                      width: "0px",
                                      height: "0px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    <defs>
                                      <linearGradient
                                        id="starGrad946486281122685"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                      >
                                        <stop
                                          offset="0%"
                                          className="stop-color-first"
                                          style={{
                                            stopColor: "rgb(254, 189, 0)",
                                            stopOpacity: 1,
                                          }}
                                        />
                                        <stop
                                          offset="0%"
                                          className="stop-color-first"
                                          style={{
                                            stopColor: "rgb(254, 189, 0)",
                                            stopOpacity: 1,
                                          }}
                                        />
                                        <stop
                                          offset="0%"
                                          className="stop-color-final"
                                          style={{
                                            stopColor: "rgb(203, 211, 227)",
                                            stopOpacity: 1,
                                          }}
                                        />
                                        <stop
                                          offset="100%"
                                          className="stop-color-final"
                                          style={{
                                            stopColor: "rgb(203, 211, 227)",
                                            stopOpacity: 1,
                                          }}
                                        />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <div
                                    className="star-container"
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      paddingRight: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 51 48"
                                      className="widget-svg"
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                        transition:
                                          "transform 0.2s ease-in-out 0s",
                                      }}
                                    >
                                      <path
                                        className="star"
                                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        style={{
                                          fill: "rgb(203, 211, 227)",
                                          transition:
                                            "fill 0.2s ease-in-out 0s",
                                        }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="star-container"
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      paddingLeft: "7px",
                                      paddingRight: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 51 48"
                                      className="widget-svg"
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                        transition:
                                          "transform 0.2s ease-in-out 0s",
                                      }}
                                    >
                                      <path
                                        className="star"
                                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        style={{
                                          fill: "rgb(203, 211, 227)",
                                          transition:
                                            "fill 0.2s ease-in-out 0s",
                                        }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="star-container"
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      paddingLeft: "7px",
                                      paddingRight: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 51 48"
                                      className="widget-svg"
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                        transition:
                                          "transform 0.2s ease-in-out 0s",
                                      }}
                                    >
                                      <path
                                        className="star"
                                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        style={{
                                          fill: "rgb(203, 211, 227)",
                                          transition:
                                            "fill 0.2s ease-in-out 0s",
                                        }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="star-container"
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      paddingLeft: "7px",
                                      paddingRight: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 51 48"
                                      className="widget-svg"
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                        transition:
                                          "transform 0.2s ease-in-out 0s",
                                      }}
                                    >
                                      <path
                                        className="star"
                                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        style={{
                                          fill: "rgb(203, 211, 227)",
                                          transition:
                                            "fill 0.2s ease-in-out 0s",
                                        }}
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="star-container"
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      paddingLeft: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 51 48"
                                      className="widget-svg"
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                        transition:
                                          "transform 0.2s ease-in-out 0s",
                                      }}
                                    >
                                      <path
                                        className="star"
                                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        style={{
                                          fill: "rgb(203, 211, 227)",
                                          transition:
                                            "fill 0.2s ease-in-out 0s",
                                        }}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reply-form contact-form-right mb-60">
                          <div>
                            <div className="comment mb-10">
                              <label>Nhập đánh giá của bạn</label>
                              <textarea
                                name="message"
                                className="form-control  primary-bg2 mt-10"
                                id="message"
                                defaultValue={""}
                              />
                            </div>
                            <button
                              type="button"
                              className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17"
                            >
                              Đánh giá
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
         <div className="row px-xl-5">
          <div className="col">
           
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3  bg-transparent pl-0 title position-relative hvr2 font600 nav-link active">Mô tả sản phẩm</h4>
                <div className="pb-30"
                      dangerouslySetInnerHTML={{
                        __html: product.description_detail,
                      }}
                    />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
