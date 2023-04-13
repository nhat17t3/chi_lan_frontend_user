import { Card, Grid, Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderById,
  orderCanceled,
  orderDeliveryed,
} from "../../../actions/orderAction";
import { ConvertIOStoDate } from "./ConvertStringToTime";


const HistoryOrder = (props) => {
  const auth = useSelector((state) => state.auth);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.user._id) {
      dispatch(getOrderById(auth.user._id));
    }
  }, [auth.user._id]);

  const handleConfirm = (event) => {
    dispatch(orderDeliveryed(event.target.value, auth.user._id));
  };

  const handleCancled = (event) => {
    dispatch(orderCanceled(event.target.value, auth.user._id));
  };

  let order_list = [];
  console.log(orders);
  orders?.map((order, index) => {
    const id = order._id;
    const status = order.orderStatus.find(
      (status) => status.isCompleted === true
    );
    order.productDetail.map((product) => {
      var data = {
        id,
        name: product.productId ? product.productId.name : null,
        price: product.payablePrice,
        quantity: product.purchasedQty,
        paymentStatus: order.paymentStatus,
        orderStatus: status?.type,
        createdAt : ConvertIOStoDate(order.createdAt)
      };
      order_list.push(data);
    });
  });
  if (!auth.authenticate) {
    return <Redirect to={`/`} />;
  }

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
                            <Link className="text-capitalize" to="/history">
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
                      <div className="cart-table text-center table-responsive">
                        <br />
                        <br />
                        <br />
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Tên sản phẩm</th>
                              <th scope="col">Đơn giá</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Ngày đặt hàng</th>
                              <th scope="col">Tình trạng order</th>
                              <th scope="col">Tình trạng thanh toán</th>
                              <th scope="col">Hành động</th>
                            </tr>
                          </thead>
                          <tbody>
                          {order_list.map((order, index) => (

<>

     <tr>
      
       <td>{order.name}</td>
       <td>{order.price}</td>
       <td>{order.quantity}</td>
       <td>{order.createdAt}</td>
       <td >{order.orderStatus}</td>
       <td >{order.paymentStatus}</td>
       {order.orderStatus === "ordered" 
                          ? (
                           <td >
                             {/* <button
                               className=" btn-success"
                               type="button"
                               value={order.id}
                               onClick={handleConfirm}
                             >
                               Đã nhận
                             </button> */}
                             <button
                               className="bt-btn theme-btn btn-danger"
                               type="button"
                               value={order.id}
                               onClick={handleCancled}
                               style={{ padding: "9px 14px"  }}

                             >
                               Hủy
                             </button>
                           </td>
                         ) : order.orderStatus === "shipped" ?
                         <td >
                             <button
                               className=" bt-btn theme-btn"
                               type="button"
                               value={order.id}
                               onClick={handleConfirm}
                               style={{ padding: "9px 14px", backgroundColor: "green" }}

                             >
                               Đã nhận
                             </button>
                             
                           </td> :
                          <td />}
     </tr>
    
     </>
        ))}
                          </tbody>
                        </table>
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

export default HistoryOrder;
