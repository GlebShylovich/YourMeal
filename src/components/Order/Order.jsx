import { useSelector } from "react-redux";
import OrderItem from "../OrderItem/OrderItem";
import close from "/close.svg";
import "./Order.scss";

export default function Order({ closeOrder }) {
  const orders = useSelector((state) => state.order.items || []);
  return (
    <div className="order__overlay">
      <div className="order">
        <div className="order__top">
          <h2 className="order__title">Order history</h2>
          <img
            onClick={() => closeOrder(false)}
            className="order__close"
            src={close}
            alt="close"
          />
        </div>
        <div className="order__head">
          <p className="orders__head-date">Date:</p>
          <p className="orders__head-number">Order ID:</p>
          <p className="orders__head-total">Total:</p>
        </div>
        <div className="order__body">
          {orders.slice(0, 10).map((item, index) => (
            <OrderItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
