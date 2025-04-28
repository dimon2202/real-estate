import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Створити акаунт</h1>
          <input name="username" type="text" placeholder="Ім'я" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Пароль" />
          <button>Зареєструватися</button>
          <Link to="/login">Вже маєте акаунт?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/map.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
