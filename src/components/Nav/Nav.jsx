import { useContext } from "react";
import { GlobalContext } from "../../App";
import Tab from "../Tab/Tab";
import "./Nav.scss";

export default function Nav() {
  const paths = useContext(GlobalContext);
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        {paths.map((item, index) => (
          <Tab key={index} data={item} />
        ))}
      </ul>
    </nav>
  );
}
