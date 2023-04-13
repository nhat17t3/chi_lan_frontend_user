import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../../../actions/authAction";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    if (auth.error !== "") {
      setMessage(auth.error);
    }
    if (auth.block === true && click === true) {
      setMessage("Tài khoản của bạn đã bị khóa");
    }
  }, [auth.block, click]);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const handleLogin = (e) => {
    setClick(true);
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signin(user));
    setEmail("");
    setPassword("");
    // setMessage("Register a new customer successfully!");
  };
  return (
    <section className="login-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="basic-login">
              <h3 className="text-center mb-45">Đăng nhập tài khoản</h3>
              {message ? (
              <div
                style={{
                
                  textAlign: "center",
                }}
              >
                <div  style={{ color: "red" }}>
                  {message}
                </div>
              </div>
            ) : null}
              <form enctype="multipart/form-data"
              onSubmit={handleLogin} method="post">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input className="form-control primary-bg2 border-gray mb-0" type="email" placeholder="" name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                
                <button type="submit" className="bt-btn theme-btn-2 w-100">
                  Đăng nhập
                </button>
                <div className="or-divide">
                  <span>hoặc</span>
                </div>
                <Link
                  className="bt-btn bt-btn-black w-100 text-center"
                  to="/register"
                >
                  Đăng ký tài khoản
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
