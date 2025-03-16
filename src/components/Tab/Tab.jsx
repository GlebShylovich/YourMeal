import { NavLink } from "react-router-dom";
import "./Tab.scss";

export default function Tab({ data }) {
  const { path, title, img } = data;
  
  return (
    <NavLink className="tab" to={path}>
      <img className="tab__image" src={img} alt={title} />
      <p className="tab__title">{title}</p>
    </NavLink>
  );
}
