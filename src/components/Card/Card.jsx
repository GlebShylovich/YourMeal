import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Card.scss"

export default function Card({ data }) {
  const { name, img, price, weight } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card" onClick={() => setIsOpen(true)}>
      <img className="card__image" src={img} alt={name} />
      <h3 className="card__price">{price}$</h3>
      <p className="card__name">{name}</p>
      <p className="card__weight">{weight}g</p>
      <button className="card__button">Add</button>
      {isOpen && <Modal data={data} closeModal={setIsOpen}/>}
    </div>
  );
}
