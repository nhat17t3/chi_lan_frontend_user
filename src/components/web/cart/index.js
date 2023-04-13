import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../../actions/cartQuantity";
import "./cart.css";
import { generatePublicUrl } from "../../../urlConfig";

function Cart({ cartProps, productQuantity, clearProduct }) {
  let productsInCart = [];
  // window.scrollTo(0, 0);
  let value = 0;
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
      value +=
        cartProps.products[item].price * cartProps.products[item].quantity_buy;
    }
  });

  productsInCart.map((product, index) => {});

  // console.log("cart number", cartProps)
  return (
    
    <div className="cart-area mt-100">
    <div className="container border-b-light-gray pb-100">
      <div className="cart-table text-center table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              {/* <th scope="col">Loại</th> */}
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng</th>
              <th scope="col">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {productsInCart &&
              productsInCart.map((cart, index) => (
                <tr key={cart._id}>
                  <td>
                    <Link to={`/product-details/${cart._id}`}>
                      <a className="cart-img d-block">
                        <img src={
                                cart.productPictures
                                  ? generatePublicUrl(
                                      cart.productPictures[0].img
                                    )
                                  : "/images/phone.png"
                              } alt="Cart image" />
                      </a>
                    </Link>
                  </td>
                  <td>
                  <Link to={`/product-details/${cart._id}`}>
                      <a className="p-name primary-color">{cart.name}</a>
                    </Link>
                  </td>
                  <td>
                    <div className="cart-price">
                      {" "}
                      {Number(cart.price - cart.price*cart.discount/100)} VND
                    </div>
                  </td>
                  {/* <td>
                    <div className="cart-price">
                      {cart.sizeSelected}
                    </div>
                  </td> */}
                  <td>
                    <div className="all-info product-view-info text-center mt-35">
                      <div className="quick-add-to-cart d-sm-flex align-items-centerm-auto  mb-15 mr-10">
                        <div className="quantity-field position-relative d-inline-block m-auto">
                          <button
                            className="custom-prev c-pointer"
                            onClick={() =>
                              productQuantity("increase", cart._id)
                            }
                          >
                            <i className="icon-plus" />
                          </button>
                          <input
                            type="text"
                            name="select1"
                            defaultValue={1} min={1} value = {cart.quantity_buy}
                            disabled
                            className="quantity-input-arrow quantity-input text-center border-gray"
                          />
                          <button
                            className="custom-next enable c-pointer"
                            onClick={() =>
                              productQuantity("decrease", cart._id)
                            }
                          >
                            <i className="icon-minus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cart-price">
                      {" "}
                      {Math.round(
                            cart.price_discount * cart.quantity_buy
                          )} VND
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="p-remove theme-color"
                      onClick={() => clearProduct(cart._id)}
                    >
                      <span className="icon-clear" />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 offset-xl-6 offset-lg-6">
          <div className="total-price-area mt-60">
            <h2 className="font600">Thanh toán giỏ hàng</h2>
            <ul className="pt-15 pb-25">
              <li className="d-flex justify-content-between align-items-center border-gray1 mb-2 pl-25 pr-25 pt-15 pb-15">
                <span>Tiền hàng</span>
                <span>{Math.round(cartProps.cartPrice)} VND</span>
              </li>
              {/* <li className="d-flex justify-content-between align-items-center border-gray1 mb-2 pl-25 pr-25 pt-15 pb-15">
                <span>Vận chuyển</span>
                <span>25 000 VND</span>
              </li> */}
              <li className="d-flex justify-content-between align-items-center border-gray1 pl-25 pr-25 pt-15 pb-15">
                <span>Tổng thanh toán </span>
                <span>{Math.round(cartProps.cartPrice)} VND</span>
              </li>
            </ul>
            <Link to={cartProps.cart>0?("/checkout"):"/carts"}>
              <a className="web-btn h2-theme-border1 d-inline-block text-uppercase white  rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17 mr-20">
                Thanh toán
              </a>
            </Link>
          </div>
        </div>
        {/* /col */}
      </div>
    </div>
    {/* /container */}
  </div>
 
 );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
