import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducers/basketSlice";
import close from "/close.svg";
import "./Modal.scss";

export default function Modal({ data, closeModal }) {
  const { name, img, desc, ingredients, weight, calories, price } = data;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  function handleClick() {
    dispatch(addItem({ ...data, count }));
  }

  return (
    <div className="modal__overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__top">
          <h2 className="modal__title">{name}</h2>
          <button
            className="modal__close-button"
            onClick={() => closeModal(false)}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="modal__body">
          <img src={img} alt={name} className="modal__image" />
          <div className="modal__info">
            <div className="modal__info-description">{desc}</div>
            <div className="modal__info-composition">
              <h4 className="modal__info-composition-title">Ingridients:</h4>
              {Object.values(ingredients).map((item, index) => (
                <p key={index} className="modal__info-composition-item">
                  {item}
                </p>
              ))}
              <p className="modal__info-composition-info">
                {weight}g, ccal {calories}
              </p>
            </div>
          </div>
        </div>
        <div className="modal__controls">
          <button onClick={handleClick} className="modal__button">Add</button>
          <div className="modal__controls-info">
            <div className="modal__counter">
              <button onClick={() => count > 1 && setCount(count - 1)}>
                -
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <p className="modal__price">{(price * count).toFixed(2)}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
