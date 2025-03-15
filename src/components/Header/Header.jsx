import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserData } from "../../../services";
import Hamburger from "hamburger-react";
import Order from "../Order/Order";
import promo from "/img/promo-burger.png";
import background from "/img/bg.png";
import logo from "/logo.svg";
import account from "/account.svg";
import logout from "/logout.svg";
import close from "/close.svg";
import "./Header.scss";

export default function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { email, username, id } = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket.items || []);
  const orders = useSelector((state) => state.order.items || []);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [adaptive, setAdaptive] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) setAdaptive(true);
  }, []);

  async function logOut() {
    await setUserData(basket, id, "/basket");
    await setUserData(orders, id, "/orders");
    signOut(auth);
    navigate("/login");
  }
  return (
    <header className="header">
      {adaptive && (
        <div className="header__toggle">
          <Hamburger
            toggled={hamburger}
            toggle={setHamburger}
            size={24}
            color="#FFFFFF"
            distance="lg"
            rounded
          />
        </div>
      )}
      <img src={background} alt="background" className="header__background" />
      <div className="header__container">
        {!adaptive && (
          <div className="header__controls">
            <img
              onClick={() => setIsHovered((prevState) => !prevState)}
              src={account}
              alt="account"
            />
            <img onClick={logOut} src={logout} alt="logout" />
            {isHovered && (
              <div className="account">
                <p>Name: {username}</p>
                <p>Email: {email}</p>
                <button onClick={() => setIsOpen(true)}>Order history</button>
              </div>
            )}
          </div>
        )}
        <img src={logo} alt="your meal" className="header__logo" />
        <section className="header__promo">
          <img src={promo} alt="promo" className="header__promo-image" />
          <div className="header__promo-text">
            <h1 className="header__promo-title">
              Only the <br />
              <span>juiciest burgers!</span>
            </h1>
            <p className="header__promo-subtitle">
              Free delivery from <span>10$</span>
            </p>
          </div>
        </section>
      </div>
      {isOpen && <Order closeOrder={setIsOpen} />}
      {hamburger && (
        <div className={`hamburger ${hamburger ? "hamburger--open" : ""}`}>
          <div className="header__toggle">
            <Hamburger
              toggled={hamburger}
              toggle={setHamburger}
              size={24}
              color="#FFFFFF"
              distance="lg"
              rounded
            />
          </div>
          <p
            onClick={() => setIsHovered((prevState) => !prevState)}
            className="hamburger__item"
          >
            Account
          </p>
          <p onClick={logOut} className="hamburger__item">
            Logout
          </p>
          {isHovered && (
            <div className="hamburger__account">
              <img onClick={() => setIsHovered((prevState) => !prevState)} src={close} alt="close" />
              <p>Name: {username}</p>
              <p>Email: {email}</p>
              <button onClick={() => setIsOpen(true)}>Order history</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
