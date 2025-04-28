import Map from "../../components/map/Map";
import "./newPostPage.scss";

function NewPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Додати нове оголошення</h1>
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Заголовок</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Ціна</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Адреса</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Опис</label>
              <textarea name="" id=""></textarea>
            </div>
            <div className="item">
              <label htmlFor="city">Місто</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Кількість спалень</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Кількість ванних кімнат</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Широта</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Довгота</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Тип операції</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Оренда
                </option>
                <option value="buy">Купівля</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Тип нерухомості</label>
              <select name="property">
                <option value="apartment">Квартира</option>
                <option value="house">Будинок</option>
                <option value="condo">Кондо</option>
                <option value="land">Земля</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Комунальні послуги</label>
              <select name="utilities">
                <option value="owner">Оплачує власник</option>
                <option value="tenant">Оплачує орендар</option>
                <option value="shared">Спільна оплата</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Політика щодо тварин</label>
              <select name="pet">
                <option value="allowed">Дозволено</option>
                <option value="not-allowed">Заборонено</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Вимоги до доходу</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Вимоги до доходу"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Загальна площа (кв. метрів)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">Школи поблизу (кількість)</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Зупинки поблизу (кількість)</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Ресторани поруч (кількість)</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Додати</button>
          </form>
        </div>
      </div>
      <div className="sideContainer">
        <Map />
      </div>
    </div>
  );
}

export default NewPostPage;
