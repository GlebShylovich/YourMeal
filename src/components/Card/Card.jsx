import "./Card.scss"

export default function Card({ data }) {
  const { name, img, price, weight } = data;
  return (
    <div className="card">
      <img className="card__image" src={img} alt={name} />
      <h3 className="card__price">{price}$</h3>
      <p className="card__name">{name}</p>
      <p className="card__weight">{weight}g</p>
      <button className="card__button">Add</button>
    </div>
  );
}
