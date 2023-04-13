import React, { Component, useEffect, useState } from "react";
import { Grid, Modal, Paper } from "@material-ui/core/";
import Summarycart from "./summarycart";
import { connect, useDispatch, useSelector } from "react-redux";
import { productQuantity, clearProduct } from "../../../actions/cartQuantity";
import { Link, Redirect } from "react-router-dom";
import { addOrder, addOrderDefault } from "../../../actions/orderAction";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Checkout = () => {
  const auth = useSelector((state) => state.auth);
  const cartProps = useSelector((state) => state.cartState);
  const orderProps = useSelector((state) => state.order);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpend] = useState(false);
  //0 : chua hoan thanh, 1: thanh toan bang the, 2: thanh toan papal, 3: thanh toan giao hang tai nha
  const [typePayment, setTypePayment] = useState(3);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
      setEmail(auth.user.email);
      // setUsername(auth.user.username);
      setPhoneNumber(auth.user.phoneNumber);
      setAddress(auth.user.address);
    }
  }, [auth]);

  let productsInCart = [];
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
    setMessage("");
  }, []);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const order = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      typePayment,
    };
    
    if(auth.authenticate){
      dispatch(addOrder(order));
      alert("Chúc mừng bạn đã đặt hàng thành công");
      // return <Redirect to={`/history`} />;
    } else {
      dispatch(addOrderDefault(order));
      alert("Chúc mừng bạn đã đặt hàng thành công 1");
      // return <Redirect to={`/`} />;
    }
    
  };
  const handleOpen = () => {
    if (phoneNumber === "") {
      setMessage("Phone number cannot be empty");
      window.scrollTo(0, 0);
      setOpend(false);
      return;
    }
    if (address === "") {
      setMessage("Address cannot be empty");
      window.scrollTo(0, 0);
      setOpend(false);
      return;
    }
    setOpend(true);
  };
  const handleClose = () => {
    setOpend(false);
  };

  if (!cartProps.cart) {
    return <Redirect to={`/`} />;
  }
  if (orderProps.addOrder) {
    return <Redirect to={`/history`} />;
  }
  // if (!auth.authenticate) {
  //   return <Redirect to={`/login`} />;
  // }

  return (
    <>
      <div className="checkout-area mb-60 mt-60">
        <div className="container">
          <form action="#" onSubmit={handleSubmitOrder}>
            <div className="row">
              <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                <div className="checkbox-form">
                  <h4 className="pb-10 mb-20 border-b-light-gray2">
                    Thông tin giao hàng
                  </h4>
                  <div className="different-address">
                    <div className="row">
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="firstName">
                            Họ <span className="required">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            className="form-control primary-bg2 border-gray mb-0"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="lastName">
                            Tên <span className="required">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            className="form-control primary-bg2 border-gray mb-0"
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="phoneNumber">
                            Số điện thoại <span className="required">*</span>
                          </label>
                          <input
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            className="form-control primary-bg2 border-gray mb-0"
                            value={phoneNumber}
                            required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control primary-bg2 border-gray mb-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="email">
                            Địa chỉ <span className="required">*</span>
                          </label>
                          <input
                            id="address"
                            type="text"
                            name="address"
                            className="form-control primary-bg2 border-gray mb-0"
                            value={address}
                            required
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12">
                          <div className="country-select mb-30">
                            <label>
                              Tỉnh/Thành phố <span className="required">*</span>
                            </label>
                            <select
                              name="province"
                              className="nice-select w-100 primary-bg2 mb-20 mb-0"
                            >
                              <option value>Chọn 1 tỉnh</option>
                              <option value="thanh_pho_ha_noi">
                                Thành phố Hà Nội
                              </option>
                              <option value="tinh_ha_giang">
                                Tỉnh Hà Giang
                              </option>
                              <option value="tinh_cao_bang">
                                Tỉnh Cao Bằng
                              </option>
                              <option value="tinh_bac_kan">Tỉnh Bắc Kạn</option>
                              <option value="tinh_tuyen_quang">
                                Tỉnh Tuyên Quang
                              </option>
                              <option value="tinh_lao_cai">Tỉnh Lào Cai</option>
                              <option value="tinh_dien_bien">
                                Tỉnh Điện Biên
                              </option>
                              <option value="tinh_lai_chau">
                                Tỉnh Lai Châu
                              </option>
                              <option value="tinh_son_la">Tỉnh Sơn La</option>
                              <option value="tinh_yen_bai">Tỉnh Yên Bái</option>
                              <option value="tinh_hoa_binh">
                                Tỉnh Hoà Bình
                              </option>
                              <option value="tinh_thai_nguyen">
                                Tỉnh Thái Nguyên
                              </option>
                              <option value="tinh_lang_son">
                                Tỉnh Lạng Sơn
                              </option>
                              <option value="tinh_quang_ninh">
                                Tỉnh Quảng Ninh
                              </option>
                              <option value="tinh_bac_giang">
                                Tỉnh Bắc Giang
                              </option>
                              <option value="tinh_phu_tho">Tỉnh Phú Thọ</option>
                              <option value="tinh_vinh_phuc">
                                Tỉnh Vĩnh Phúc
                              </option>
                              <option value="tinh_bac_ninh">
                                Tỉnh Bắc Ninh
                              </option>
                              <option value="tinh_hai_duong">
                                Tỉnh Hải Dương
                              </option>
                              <option value="thanh_pho_hai_phong">
                                Thành phố Hải Phòng
                              </option>
                              <option value="tinh_hung_yen">
                                Tỉnh Hưng Yên
                              </option>
                              <option value="tinh_thai_binh">
                                Tỉnh Thái Bình
                              </option>
                              <option value="tinh_ha_nam">Tỉnh Hà Nam</option>
                              <option value="tinh_nam_dinh">
                                Tỉnh Nam Định
                              </option>
                              <option value="tinh_ninh_binh">
                                Tỉnh Ninh Bình
                              </option>
                              <option value="tinh_thanh_hoa">
                                Tỉnh Thanh Hóa
                              </option>
                              <option value="tinh_nghe_an">Tỉnh Nghệ An</option>
                              <option value="tinh_ha_tinh">Tỉnh Hà Tĩnh</option>
                              <option value="tinh_quang_binh">
                                Tỉnh Quảng Bình
                              </option>
                              <option value="tinh_quang_tri">
                                Tỉnh Quảng Trị
                              </option>
                              <option value="tinh_thua_thien_hue">
                                Tỉnh Thừa Thiên Huế
                              </option>
                              <option value="thanh_pho_da_nang">
                                Thành phố Đà Nẵng
                              </option>
                              <option value="tinh_quang_nam">
                                Tỉnh Quảng Nam
                              </option>
                              <option value="tinh_quang_ngai">
                                Tỉnh Quảng Ngãi
                              </option>
                              <option value="tinh_binh_dinh">
                                Tỉnh Bình Định
                              </option>
                              <option value="tinh_phu_yen">Tỉnh Phú Yên</option>
                              <option value="tinh_khanh_hoa">
                                Tỉnh Khánh Hòa
                              </option>
                              <option value="tinh_ninh_thuan">
                                Tỉnh Ninh Thuận
                              </option>
                              <option value="tinh_binh_thuan">
                                Tỉnh Bình Thuận
                              </option>
                              <option value="tinh_kon_tum">Tỉnh Kon Tum</option>
                              <option value="tinh_gia_lai">Tỉnh Gia Lai</option>
                              <option value="tinh_dak_lak">Tỉnh Đắk Lắk</option>
                              <option value="tinh_dak_nong">
                                Tỉnh Đắk Nông
                              </option>
                              <option value="tinh_lam_dong">
                                Tỉnh Lâm Đồng
                              </option>
                              <option value="tinh_binh_phuoc">
                                Tỉnh Bình Phước
                              </option>
                              <option value="tinh_tay_ninh">
                                Tỉnh Tây Ninh
                              </option>
                              <option value="tinh_binh_duong">
                                Tỉnh Bình Dương
                              </option>
                              <option value="tinh_dong_nai">
                                Tỉnh Đồng Nai
                              </option>
                              <option value="tinh_ba_ria_vung_tau">
                                Tỉnh Bà Rịa - Vũng Tàu
                              </option>
                              <option value="thanh_pho_ho_chi_minh">
                                Thành phố Hồ Chí Minh
                              </option>
                              <option value="tinh_long_an">Tỉnh Long An</option>
                              <option value="tinh_tien_giang">
                                Tỉnh Tiền Giang
                              </option>
                              <option value="tinh_ben_tre">Tỉnh Bến Tre</option>
                              <option value="tinh_tra_vinh">
                                Tỉnh Trà Vinh
                              </option>
                              <option value="tinh_vinh_long">
                                Tỉnh Vĩnh Long
                              </option>
                              <option value="tinh_dong_thap">
                                Tỉnh Đồng Tháp
                              </option>
                              <option value="tinh_an_giang">
                                Tỉnh An Giang
                              </option>
                              <option value="tinh_kien_giang">
                                Tỉnh Kiên Giang
                              </option>
                              <option value="thanh_pho_can_tho">
                                Thành phố Cần Thơ
                              </option>
                              <option value="tinh_hau_giang">
                                Tỉnh Hậu Giang
                              </option>
                              <option value="tinh_soc_trang">
                                Tỉnh Sóc Trăng
                              </option>
                              <option value="tinh_bac_lieu">
                                Tỉnh Bạc Liêu
                              </option>
                              <option value="tinh_ca_mau">Tỉnh Cà Mau</option>
                              Bạn cần chọn tỉnh thành
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12">
                          <div className="country-select mb-30">
                            <label>
                              Quận/Huyện <span className="required">*</span>
                            </label>
                            <select
                              name="district"
                              className="nice-select w-100 primary-bg2 mb-20 mb-0"
                            >
                              <option value>Chọn 1 quận huyện</option>
                              <option value="thanh_pho_dong_ha">
                                Thành phố Đông Hà
                              </option>
                              <option value="thi_xa_quang_tri">
                                Thị xã Quảng Trị
                              </option>
                              <option value="huyen_vinh_linh">
                                Huyện Vĩnh Linh
                              </option>
                              <option value="huyen_huong_hoa">
                                Huyện Hướng Hóa
                              </option>
                              <option value="huyen_gio_linh">
                                Huyện Gio Linh
                              </option>
                              <option value="huyen_da_krong">
                                Huyện Đa Krông
                              </option>
                              <option value="huyen_cam_lo">Huyện Cam Lộ</option>
                              <option value="huyen_trieu_phong">
                                Huyện Triệu Phong
                              </option>
                              <option value="huyen_hai_lang">
                                Huyện Hải Lăng
                              </option>
                              <option value="huyen_con_co">Huyện Cồn Cỏ</option>
                              Bạn cần chọn quận huyện
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12">
                          <div className="country-select mb-30">
                            <label>
                              Phường/xã <span className="required">*</span>
                            </label>
                            <select
                              name="wards"
                              className="nice-select w-100 primary-bg2 mb-20 mb-0"
                            >
                              <option value>Chọn 1 phường xã</option>
                              <option value="thi_tran_ai_tu">
                                Thị Trấn Ái Tử
                              </option>
                              <option value="xa_trieu_an">Xã Triệu An</option>
                              <option value="xa_trieu_van">Xã Triệu Vân</option>
                              <option value="xa_trieu_phuoc">
                                Xã Triệu Phước
                              </option>
                              <option value="xa_trieu_do">Xã Triệu Độ</option>
                              <option value="xa_trieu_trach">
                                Xã Triệu Trạch
                              </option>
                              <option value="xa_trieu_thuan">
                                Xã Triệu Thuận
                              </option>
                              <option value="xa_trieu_dai">Xã Triệu Đại</option>
                              <option value="xa_trieu_hoa">Xã Triệu Hòa</option>
                              <option value="xa_trieu_lang">
                                Xã Triệu Lăng
                              </option>
                              <option value="xa_trieu_son">Xã Triệu Sơn</option>
                              <option value="xa_trieu_long">
                                Xã Triệu Long
                              </option>
                              <option value="xa_trieu_tai">Xã Triệu Tài</option>
                              <option value="xa_trieu_trung">
                                Xã Triệu Trung
                              </option>
                              <option value="xa_trieu_ai">Xã Triệu Ái</option>
                              <option value="xa_trieu_thuong">
                                Xã Triệu Thượng
                              </option>
                              <option value="xa_trieu_giang">
                                Xã Triệu Giang
                              </option>
                              <option value="xa_trieu_thanh">
                                Xã Triệu Thành
                              </option>
                              Bạn cần chọn phường xã
                            </select>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label htmlFor="street">
                            Địa chị cụ thể <span className="required">*</span>
                          </label>
                          <input
                            id="street"
                            type="text"
                            name="street"
                            placeholder="Địa chỉ cụ thể"
                            className="form-control primary-bg2 border-gray mb-0"
                            defaultValue
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp mb-3"
                            style={{ display: "block" }}
                          >
                            Bạn cần nhập số nhà
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                <div className="your-order mb-30 pt-30 pr-40 pb-60 pl-40 mt-15">
                  <h4 className="pb-10 mb-20 border-b-light-gray3">
                    Thông tin đơn hàng
                  </h4>
                  {/* <div className="coupon-accordion">
                    <div className="accordion">
                      <h6 className="pt-15 pl-40 pb-15 mb-25 position-relative">
                        Bạn có mã giảm giá không?{" "}
                        <span
                          id="couponshow"
                          className="light-black-color2 font600 transition-3"
                        >
                          Nhập mã tại đây
                        </span>
                      </h6>
                      <div
                        id="checkout-coupon"
                        className="checkout-content collapse"
                      >
                        <div className="coupon-info">
                          <div className="coupon-and-update-area">
                            <div className="row">
                              <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                                <div className="coupon-code-area">
                                  <input
                                    className="pl-15 mr-10 pt-0 mb-15 d-inline-block width100"
                                    type="text"
                                    name="coupon"
                                    placeholder="Mã giảm giá"
                                    defaultValue
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                                <button
                                  type="button"
                                  className="web-btn h2-theme-border1 d-inline-block text-uppercase white  rounded-0 h2-theme-color cart-c-btn h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17 mr-20"
                                >
                                  Áp dụng
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="your-order-table table-responsive">
                    <table className="width100">
                      <thead>
                        <tr>
                          <th className="product-name">Sản phẩm</th>
                          <th className="product-total">Tổng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productsInCart.map((product, index) => (
                          <tr className="cart_item">
                            <td className="product-name">
                              {product.name}
                              <strong className="product-quantity">
                                {"    "}
                                X{product.quantity_buy}
                              </strong>
                            </td>
                            <td className="product-total">
                              <span className="amount">
                                {product.price_discount} VNĐ
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Tổng giỏ hàng</th>
                          <td>
                            <span className="amount">{Math.round(cartProps.cartPrice)} VNĐ</span>
                          </td>
                        </tr>
                        {/* <tr className="shipping">
                          <th rowSpan={3}>Đơn vị vận chuyển</th>
                        </tr> */}
                        {/* <tr className="shipping">
                          <td className="d-flex">
                            <input
                              type="radio"
                              className="r-inpt mb-2 mr-1"
                              name="delivery"
                              defaultValue={1}
                              style={{ marginTop: "5px" }}
                            />
                            <label>
                              Viettel Post:{" "}
                              <span className="amount"> 30000 VND</span>
                            </label>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <td className="d-flex">
                            <input
                              type="radio"
                              className="r-inpt mb-2 mr-1"
                              name="delivery"
                              defaultValue={2}
                              style={{ marginTop: "5px" }}
                            />
                            <label>
                              Giao Hàng Nhanh:{" "}
                              <span className="amount"> 45000 VND</span>
                            </label>
                          </td>
                        </tr> */}
                        <tr className="cart-subtotal">
                          <th>Phí vận chuyển</th>
                          <td>
                            {/* <strong> */}
                              <span className="amount">25 000 VNĐ</span>
                            {/* </strong> */}
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng thanh toán</th>
                          <td>
                            <strong>
                              <span className="amount">{Math.round(cartProps.cartPrice + 25000)} VNĐ</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="order-button-payment mt-20">
                    <button type="submit" className="bt-btn theme-btn">
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
  auth: state.auth,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Checkout
);
