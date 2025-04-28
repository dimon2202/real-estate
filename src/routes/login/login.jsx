import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Вхід на сайт</h1>
          <input name="username" type="text" placeholder="Ім'я" />
          <input name="password" type="password" placeholder="Пароль" />
          <button>Увійти</button>
          <Link to="/register">Ще не маєте облікового запису?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/map.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
