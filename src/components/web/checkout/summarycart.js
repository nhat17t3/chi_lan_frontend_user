import React, { Component, useState } from "react";
import {
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";
import Paypal from "../payment/component/Paypal";

const Summarycart = (props) => {
  const { cartProps, user, setTypePayment, totalMoney } = props;
  const [type1, setType1] = useState(true);
  const [type2, setType2] = useState(true);
  const [type3, setType3] = useState(true);
  const [statusPaypal, setStatusPaypal] = useState(0);
  const [message, setMessage] = useState("");

  const handlePaymentDelivery = () => {
    setTypePayment(3);
    setType1(false);
    setType2(false);
    setType3(true);
  };
  const handlePaymentPaypalSuccess = () => {
    setTypePayment(2);
    setStatusPaypal(1);
    setType1(false);
    setType2(true);
    setType3(false);
  };

  const handlePaymentPaypalFailed = () => {
    setStatusPaypal(2);
    setType1(false);
    setType2(false);
    setType3(false);
  };
  let productsInCart = [];

  const handleAddDay = (days) => {
    var newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    let today = newDate.toISOString().slice(0, 10);
    return today;
  };
  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
  });
  return (
    <>
    
    </>
  );
};

export default Summarycart;
