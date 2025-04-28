import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(false);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Повідомлення</h1>
        <div className="message" onClick={() => setChat(true)}>
          <img src="/profile.jpg" alt="Профіль" />
          <span>Іван Петренко</span>
          <p>Привіт! Цікавить квартира на вулиці Шевченка...</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src="/profile.jpg" alt="Профіль" />
          <span>Марія Коваленко</span>
          <p>Чи актуальне оголошення про оренду?</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img src="/profile.jpg" alt="Профіль" />
          <span>Олександр Іванов</span>
          <p>Хотів би домовитись про перегляд будинку.</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="/profile.jpg" alt="Профіль" />
              Іван Петренко
            </div>
            <span className="close" onClick={() => setChat(false)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Доброго дня! Зацікавив ваш об'єкт.</p>
              <span>1 годину тому</span>
            </div>
            <div className="chatMessage own">
              <p>Вітаю! Так, квартира ще доступна.</p>
              <span>50 хвилин тому</span>
            </div>
            <div className="chatMessage">
              <p>Чи можна домовитись про перегляд?</p>
              <span>45 хвилин тому</span>
            </div>
            <div className="chatMessage own">
              <p>Звісно, коли вам буде зручно?</p>
              <span>30 хвилин тому</span>
            </div>
          </div>
          <div className="bottom">
            <textarea placeholder="Введіть повідомлення..."></textarea>
            <button>Надіслати</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;