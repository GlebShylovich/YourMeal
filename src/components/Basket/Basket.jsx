import { useMemo } from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import scooter from "/img/basket-delivery.png";
import "./Basket.scss";

export default function Basket() {
  const basket = useSelector((state) => state.basket.items) || [];

  const total = useMemo(() => {
    return basket
      .reduce((sum, item) => sum + item.count * item.price, 0)
      .toFixed(2);
  }, [basket]);
  
  return (
    <div className="basket">
      <div className="basket__top">
        <h4 className="basket__title">Cart</h4>
        <div className="basket__amount">{basket.length}</div>
      </div>
      {basket.length > 0 ? (
        <>
          <div className="basket__body">
            {basket.map((item, index) => (
              <BasketItem key={index} data={item} />
            ))}
          </div>
          <div className="basket__controls">
            <div className="basket__total">
                <p className="basket__total-text">Total:</p>
                <p className="basket__total-price">{total}$</p>
            </div>
            <div className="basket__button">Order</div>
            {total > 10 && (
                <div className="basket__delivery">
                    <img className="basket__delivery-image" src={scooter} alt="free delivery" />
                    <p className="basket__delivery-text">Free delivery</p>
                </div>
            )}
          </div>
        </>
      ) : (
        <div className="basket__body">
          <p className="basket__body-empty">Nothing here yet</p>
        </div>
      )}
    </div>
  );
}
