import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.svg" alt="logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Головна</a>
        <a href="/">Про нас</a>
        <a href="/">Контакти</a>
        <a href="/">Агенства</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="/profile.jpg"
              alt="profile"
            />
            <span>Олег</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Профіль</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Увійти</a>
            <a href="/" className="register">
              Зареєструватися
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Увійти</a>
          <a href="/">Зареєструватися</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
