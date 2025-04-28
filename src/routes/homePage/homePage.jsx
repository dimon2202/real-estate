import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Купуйте, орендуйте або продавайте свою нерухомість легко
          </h1>
          <p>
            Чудова платформа для купівлі, продажу або оренди вашої нерухомості
            без будь-яких комісій. Легко знаходьте ідеальне житло або
            розміщуйте свої об'єкти за кілька кліків.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Років досвіду</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Отриманих нагород</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Угод</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/map.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
