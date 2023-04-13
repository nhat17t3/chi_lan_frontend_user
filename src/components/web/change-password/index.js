import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordUser } from "../../../actions/userAction";

const ChangePassword = (props) => {
  const auth = useSelector((state) => state.auth);
  const setting = useSelector((state) => state.settings);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!setting.loading) {
      setPassword("");
      setConfirmPassword("");
    }
  }, [setting.loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ChangePass = (e) => {
    e.preventDefault();
    const user = {
      id: auth.user._id,
      password,
    };
    dispatch(ChangePasswordUser(user));

    setMessage("Cập nhật mật khẩu thành công");
  };

  const validate = (e, type = 1) => {
    e.preventDefault();
    let value = password;
    // var reg = new RegExp("(?=.*[a-z])(?=.*[A-Z]}.{6,32}$");
    // var test = reg.test(value);
    // type === 1 ? setPassword(value) : setConfirmPassword(value);
    switch (type) {
      case 1:
        if (value.length < 6) {
          setMessage("Mật khẩu phải có ít nhất 6 kí tự");
          break;
        }
        if (confirm_password.length > 0 && confirm_password !== value) {
          setMessage("Mật khẩu không khớp");
          break;
        }
        if (confirm_password === value && value.length > 6) {
          setMessage("");
          break;
        }
        break;
      case 2:
        if (password !== value) {
          setMessage("Entered Password is not matching!!");
        } else {
          setMessage("Password matching!!");
        }
        break;
      default:
        break;
    }
  };

  // if (!auth.authenticate) {
  //   return <Redirect to={`/login`} />;
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
                onSubmit={(e)=>{
                  validate(e);
                  if(message == "") ChangePass(e);
                }}>
                            <div className="row">
                              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                                <div className="checkbox-form">
                                  <h4 className="pb-10 mb-20 border-b-light-gray2">
                                    Thay đổi mật khẩu
                                  </h4>
                                  <h6 className="text-success"> {message}</h6>
                                  <div className="different-address">
                                    <div className="row">
                                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                                        <div className="checkout-form-list mb-30">
                                          <label htmlFor="password">
                                            Mật khẩu mới{" "}
                                            <span className="required">*</span>
                                          </label>
                                          <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="form-control primary-bg2 border-gray mb-0"
                                            value={password} required onChange={(e)=>setPassword(e.target.value)}
                                          />
                                          <div
                                            id="val-username1-error"
                                            className="invalid-feedback animated fadeInUp mb-3"
                                            style={{ display: "block" }}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                                        <div className="checkout-form-list mb-30">
                                          <label htmlFor="repassword">
                                            Nhập lại mật khẩu mới{" "}
                                            <span className="required">*</span>
                                          </label>
                                          <input
                                            id="repassword"
                                            type="password"
                                            name="repassword"
                                            className="form-control primary-bg2 border-gray mb-0"
                                            value={confirm_password} required onChange={(e) => setConfirmPassword(e.target.value)}
                                          />
                                          <div
                                            id="val-username1-error"
                                            className="invalid-feedback animated fadeInUp mb-3"
                                            style={{ display: "block" }}
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

export default ChangePassword;
