import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../../actions/authAction";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (click === true) {
      if (auth.error !== "") {
        setMessage(auth.error);
      }
    }
  }, [auth.error, click]);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleRegister = (e) => {
    setClick(true);
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      // address,
    };
    dispatch(signup(user));
    // setUsername("");
    setPhoneNumber("");
    // setAddress("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (
    <section className="login-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="basic-login">
              <h3 className="text-center mb-45">Đăng ký tài khoản</h3>
              <form method="post"
              enctype="multipart/form-data"
              onSubmit={handleRegister}>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input className="form-control primary-bg2 border-gray mb-0" type="text" placeholder="" name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp mb-3"
                  style={{ display: "block" }}
                />
                <div className="row">
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                    <label htmlFor="firstName">
                      Họ <span className="required">*</span>
                    </label>
                    <input className="form-control primary-bg2 border-gray mb-0" type="text" placeholder="" name="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
                    <div
                      id="val-username1-error"
                      className="invalid-feedback animated fadeInUp mb-3"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                    <label htmlFor="lastName">
                      Tên <span className="required">*</span>
                    </label>
                    <input className="form-control primary-bg2 border-gray mb-0" type="text" placeholder="" name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required />
                    <div
                      id="val-username1-error"
                      className="invalid-feedback animated fadeInUp mb-3"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
                <div className="row d-none">
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                    <div className="country-select">
                      <label>
                        Giới tính <span className="required">*</span>
                      </label>
                      <select
                        name="gender"
                        className="nice-select w-100 primary-bg2 mb-20 mb-0"
                        style={{ height: "60px", fontSize: "15px" }}
                      >
                        <option value={1}>Nam</option>
                        <option value={2}> Nữ</option>
                        <option value={3}> Khác</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
                    <label>
                      Ngày sinh <span className="required">*</span>
                    </label>
                    <div className="react-datepicker-wrapper">
                      <div className="react-datepicker__input-container">
                        <input
                          type="text"
                          className
                          defaultValue="10/12/2022"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label htmlFor="phoneNumber">
                  Số điện thoại <span className="required">*</span>
                </label>
                <input className="form-control primary-bg2 border-gray mb-0" type="text" placeholder="" name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required />
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp mb-3"
                  style={{ display: "block" }}
                />
                <label htmlFor="password">
                  Mật khẩu <span className="required">*</span>
                </label>
                <input className="form-control primary-bg2 border-gray mb-0"   type="password"
                  name="password"
                  value={password}
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
                
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp mb-3"
                  style={{ display: "block" }}
                />
                <button className="bt-btn theme-btn-2 w-100" type="submit">
                  Đăng ký
                </button>
                <div className="or-divide">
                  <span>or</span>
                </div>
                <Link
                  className="bt-btn bt-btn-black w-100 text-center"
                  to="/login"
                >
                  Đăng nhập
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
