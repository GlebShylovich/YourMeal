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
        <img className="delivery__close" src={close} alt="close" />
        <div className="delivery__image">
          <img src={donut} alt="donut" />
        </div>
        <form onSubmit={handleDelivery} className="delivery__form">
          <div className="delivery__form-body">
            <h1 className="delivery__title">{deliveryType}</h1>
            <input
              type="text"
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Your number"
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
                  type="text"
                  placeholder="Your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Your floor"
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
