import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { listData, singlePostData, userData } from "../../lib/dummydata";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();

  const post = listData.find((item) => item.id.toString() === id);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">{post.price} грн</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{post.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          {/* <p className="title">Загальна інформація</p> */}
          {/* <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div> */}
          <p className="title">Розміри</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.size} м²</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>
                {post.bedroom} {post.bedroom == 1 ? "спальня" : "спальні"}
              </span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>
                {post.bathroom}{" "}
                {post.bathroom == 1 ? "ванна кімната" : "ванні кімнати"}
              </span>
            </div>
          </div>
          <p className="title">Найближчі місця</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Школа</span>
                <p>{post.school}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Автобусна зупинка</span>
                <p>{post.bus}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Ресторан</span>
                <p>{post.restaurant}</p>
              </div>
            </div>
          </div>
          <p className="title">Pозташування</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Надіслати повідомлення
            </button>
            <button>
              <img src="/save.png" alt="" />
              Зберегти місце
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
