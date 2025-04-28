import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Інформація користувача</h1>
            <button>Оновити профіль</button>
          </div>
          <div className="info">
            <span>
              Аватар:
              <img src="/profile.jpg" alt="" />
            </span>
            <span>
              Ім'я: <b>Олег</b>
            </span>
            <span>
              E-mail: <b>oleg@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Мій список</h1>
            <Link to="/add">
              <button>Створити оголошення</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Збережене</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
