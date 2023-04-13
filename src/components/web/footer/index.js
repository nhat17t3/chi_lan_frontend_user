import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
      
    <footer>
      
      <div
        className={`footer-area footer-bg pt-80 dark`}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row d-flex border-b-gray1 border-t-gray1 pt-25 pb-40">
              <div className="col-xxl-5 col-xl-5  col-lg-6  col-md-12  col-sm-12 col-12 border-l-gray1">
                <div className="row">
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 ">
                    <div className="footer-widget pb-30">
                      <ul className="footer-account">
                        <li>
                          <Link href={`/my-account`}>
                            <a
                              className="position-relative d-inline-block"
                            >
                              Tài khoản của tôi
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href='/my-account/history-order'>
                            <a
                              className="position-relative d-inline-block"
                            >
                              Đơn hàng của tôi
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/my-account/history-order'>
                            <a
                              className="position-relative d-inline-block"
                            >
                              Theo dõi đơn hàng
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                    <div className="footer-widget pb-30">
                      <ul className="footer-account">
                        <li>
                          <a
                            href="#"
                            className="position-relative d-inline-block"
                          >
                            Dịch vụ chăm sóc khách hàng
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="position-relative d-inline-block"
                          >
                            Bạn cần trợ giúp?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /col */}
              <div className="col-xxl-4 col-xl-4  col-lg-6  col-md-12  col-sm-12 col-12 border-l-gray1">
                <div className="row">
                  <div className="footer-widget f-adress pb-30 pr-60">
                    <ul className="footer-address">
                      
                      
    <div className="">
      <div className="section-title mb-30">
        <h4 className="light-black-color2 font300 hp-mod-card-subscription">
          
        </h4>
        <p className="light-black-color7 font300">
          Nhận thông báo ưu đãi mới nhất của cửa hàng
        </p>
      </div>
      {/* /section-title */}
      <div className="subscribe-form-area subscribe-form-area1">
        {/* <form onSubmit={(e) => handleSubscribe(e)}> */}
        <div >
          <div className="d-sm-flex align-items-center">
            <div className="subscribe-info position-relative mr-6 mb-15">
              <input
                className={`sub-name form-control border-0 pl-35 theme-color light-theme-bg rounded-0`}
                type="email"
                name="name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                id="n-sub-name"
                placeholder="Nhập địa chỉ email"
              />
            </div>
            <div className="subscribe-btn mb-15">
              <div className="d-inline-block">
                <button 
                  className={`web-btn  d-inline-block rounded-0 text-capitalize white theme-bg theme-border1 position-relative over-hidden pl-35 pr-35 ptb-12`}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
          <div className="save-info d-flex mb-15 align-items-center">
            <input
              className="p-0 mr-10 mt-3-px"
              type="checkbox"
              aria-label="Checkbox for following text input"
              // value={checked}
              // onChange={(e) => { setChecked(!checked) }}
            />
            <p className="mb-0 cursor-pinter light-black-color7">
              Tôi đồng ý với
              <Link href="/terms-and-condition">
                <a className="light-black-color7 line-height-1 mx-1" style={{ color: '#6199e0' }}>
                  Điều khoản &amp; điều kiện
                </a>
              </Link>
              và
              <Link href="/privacy-page">
                <a className="light-black-color7 line-height-1 ms-1" style={{ color: '#6199e0' }}>
                  chính sách
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
                    </ul>
                  </div>
                </div>
                {/* /row */}
              </div>
              {/* /col */}
              {/* /col */}
              <div className="col-xxl-3 col-xl-3  col-lg-6  col-md-12  col-sm-12 col-12 border-l-gray1">
                <div className="row">
                  {/* /col */}
                  <div className="footer-widget pb-30 f-link ml--3">
                    <p className="font500">
                      Chợ Cạn, Triệu Sơn, Triệu Phong, Quảng Trị
                    </p>
                    <p className="font500">
                      0919 410 234  
                    </p>
                    <div className="f-social mt-20">
                      <a href="#" target="_blank" >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-github" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        <div className="footer-bottom pt-25">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {/* ====== service-area-start ========================================= */}
              <div className="col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12">
                <div className="service-area">
                  <ul>
                    {/* <li className="d-inline-block mr-50">
                      <div className="single-service d-flex align-items-center mb-25">
                        <div className="s-ser-icon mr-15">
                          <span className="theme-color">
                            <i className="fal fa-shipping-fast" />
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0">30 ngày miễn phí giao hàng</p>
                        </div>
                      </div>
                    </li> */}
                    <li className="d-inline-block mr-50">
                      <div className="single-service d-flex align-items-center mb-25">
                        <div className="s-ser-icon mr-15">
                          <span className="theme-color">
                            <i className="fal fa-tram" />
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0">30 ngày hoàn trả sản phẩm</p>
                        </div>
                      </div>
                    </li>
                    <li className="d-inline-block mr-50">
                      <div className="single-service d-flex align-items-center mb-25">
                        <div className="s-ser-icon mr-15">
                          <span className="theme-color">
                            <i className="fal fa-gift" />
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0">Giao hàng nhanh</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col */}
              <div className="col-xl-4  col-lg-4  col-md-12  col-sm-12 pr-0 col-12 d-flex justify-content-lg-end">

                <div className="footer-widget f-payment pb-25">
                  <div className="footer-payment">
                    <img src="/images/footer/payment.png" alt="" />
                  </div>
                </div>
                <div style={{ marginLeft: '18px', marginTop: '10px' }}>
                  <p className="mb-0">
                    {/* © {moment().year()}{" "} */}
                    <a href="#" className="c-theme">
                      Hoàng Long Nhật
                    </a>{" "}
                    DUT
                  </p>
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
      </div>
    </footer>
      </>
    );
  }
}
