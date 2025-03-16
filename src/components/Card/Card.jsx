import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducers/basketSlice";
import { useNotification } from "../Notification/use-notification";
import Notification from "../Notification/Notification";
import Modal from "../Modal/Modal";
import "./Card.scss";

export default function Card({ data }) {
  const { name, img, price, weight } = data;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { showNotification, showNotificationTimeout } = useNotification();

  function handleClick(e) {
    e.stopPropagation();
    dispatch(addItem(data));
    showNotificationTimeout();
  }

  return (
    <div className="card" onClick={() => setIsOpen(true)}>
      <img className="card__image" src={img} alt={name} />
      <h3 className="card__price">{price}$</h3>
      <p className="card__name">{name}</p>
      <p className="card__weight">{weight}g</p>
      <button onClick={handleClick} className="card__button">
        Add
      </button>
      {isOpen && <Modal data={data} closeModal={setIsOpen} />}
      {showNotification && <Notification title={"Added to cart 🎉"} />}
    </div>
  );
}
