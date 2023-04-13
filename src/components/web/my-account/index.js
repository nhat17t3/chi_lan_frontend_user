import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeInformation } from "../../../actions/userAction";

const MyAccount = (props) => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      setFirstName(auth.user.firstName);
      setLastName(auth.user.lastName);
      setEmail(auth.user.email);
      setUsername(auth.user.username);
      setPhoneNumber(auth.user.phoneNumber);
      setAddress(auth.user.address);
    }
  }, [auth]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInfo = (e) => {
    e.preventDefault();
    const infor = {
      id: auth.user._id,
      firstName,
      email,
      lastName,
      address,
      phoneNumber,
    };
    dispatch(ChangeInformation(infor));
    setMessage("Cập nhật thông tin thành công!");
  };

  // if (!auth.authenticate) {
  //   return <Redirect to={`/`} />;
  // }
  return (
    
    <>
      <div className="checkout-area mt-60">
        <div className="container">
          <div action="#">
            <div className="row">
              <div className="col-xl-3  col-lg-3  col-md-12  col-sm-12 col-12">
                <div className="your-order mb-30 pt-30 pr-40 pb-60 pl-40 mt-15">
                  <h4 className="pb-10 mb-20 border-b-light-gray3">
                    Tài khoản của tôi
                  </h4>
                  <div className="your-order-table table-responsive">
                    <table className="width100">
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            <Link className="text-capitalize" to="/my-account">
                              <strong className="product-quantity">
                                Thông tin giao hàng
                              </strong>
                            </Link>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="product-name">
                            <Link
                              className="text-capitalize"
                              to="/history"
                            >
                              <strong className="product-quantity">
                                Lịch sử đơn hàng
                              </strong>
                            </Link>
                          </td>
                        </tr>
                       
                        <tr className="cart_item">
                          <td className="product-name">
                            <Link
                              className="text-capitalize"
                              to="/change-password"
                            >
                              <strong className="product-quantity">
                                Thay đổi mật khẩu
                              </strong>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xl-9  col-lg-9  col-md-12  col-sm-12 col-12">
                <div className="checkbox-form">
                  <h4 className="pb-10 mb-20 border-b-light-gray2" />
                  <div className="cart-area">
                    <div className="container border-b-light-gray pb-100">
                      <div className="checkout-area mb-60">
                        <div className="container">
                          <form method="post"
                  enctype="multipart/form-data"
                  onSubmit={changeInfo}>
                            <div className="row">
                              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                                <div className="checkbox-form">
                                  <h4 className="pb-10 mb-20 border-b-light-gray2">
                                    Thông tin cá nhân
                                  </h4>
                                  <h6 className="text-success"> {message}</h6>
                                  
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
                            // required
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                                </div>
                                <div className="order-button-payment mt-20">
                                  <button
                                    type="submit"
                                    className="bt-btn theme-btn"
                                  >
                                    Lưu
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
