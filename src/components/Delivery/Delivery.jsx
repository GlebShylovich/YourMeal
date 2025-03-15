import { useState } from "react";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../../redux/reducers/basketSlice";
import { addOrder } from "../../redux/reducers/orderSlice";
import donut from "/img/pic.png";
import close from "/close.svg";
import "./Delivery.scss";

export default function Delivery({ closeDelivery, total }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [deliveryType, setDeliveryType] = useState("Delivery");

  function handleDelivery(e) {
    e.preventDefault();
    if (
      !username ||
      !number ||
      (deliveryType === "Delivery" && (!address || !floor))
    ) {
      return;
    }
    dispatch(
      addOrder({
        deliveryType,
        username,
        number,
        address,
        floor,
        date: Date.now(),
        total,
      })
    );
    dispatch(emptyBasket());
    setTimeout(() => {
      closeDelivery(false);
    }, 2000);
  }

  return (
    <div className="delivery__overlay">
      <div className="delivery">
        <img
          className="delivery__close"
          onClick={() => closeDelivery(false)}
          src={close}
          alt="close"
        />
        <div className="delivery__image">
          <img src={donut} alt="donut" />
        </div>
        <form onSubmit={handleDelivery} className="delivery__form">
          <div className="delivery__form-body">
            <h1 className="delivery__title">{deliveryType}</h1>
            <input
              className={!username && "delivery__input--error"}
              type="text"
              placeholder={!username ? "Enter username" : "Your name"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={!number && "delivery__input--error"}
              type="tel"
              placeholder={!number ? "Enter your number" : "Your number"}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label>
              <input
                type="radio"
                value="Pickup"
                checked={deliveryType === "Pickup"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              Pickup
            </label>
            <label>
              <input
                type="radio"
                value="Delivery"
                checked={deliveryType === "Delivery"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              Delivery
            </label>
            {deliveryType === "Delivery" && (
              <>
                <input
                  className={!address && "delivery__input--error"}
                  type="text"
                  placeholder={!address ? "Enter your address" : "Your address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  className={!floor && "delivery__input--error"}
                  type="text"
                  placeholder={!floor ? "Enter your floor" : "Your floor"}
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                />
              </>
            )}
          </div>
          <button type="submit" className="delivery__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
