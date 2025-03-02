import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/reducers/basketSlice";
import "./BasketItem.scss";

export default function BasketItem({ data }) {
  const { img, name, weight, price, count, id } = data;
  const dispatch = useDispatch();
  return (
    <div className="basket__item">
      <div className="basket__item-body">
        <img src={img} alt={name} className="basket__item-image" />
        <div className="basket__item-info">
          <p className="basket__item-name">{name}</p>
          <p className="basket__item-weight">{weight}g</p>
          <p className="basket__item-price">{price}$</p>
        </div>
      </div>
      <div className="basket__item-counter">
        <button onClick={() => dispatch(removeItem({id}))}>-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(addItem({id}))}>+</button>
      </div>
    </div>
  );
}
