import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <div className="priceAndIcons">
          <p className="price">{item.price.toLocaleString("uk-UA")} грн</p>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/size.png" alt="" />
              <span>{item.size} м²</span>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>
                {item.bedroom} {item.bedroom == 1 ? "спальня" : "спальні"}
              </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>
                {item.bathroom}{" "}
                {item.bathroom == 1 ? "ванна кімната" : "ванні кімнати"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
