import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Результати пошуку для <bold>Київ</bold>
      </h1>
      <div className="top">
        <div className="item">
          {/* <label htmlFor="city">Місцезнаходження</label> */}
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Місто"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Тип операції</label>
          <select name="type" id="type">
            <option value="">Всі</option>
            <option value="buy">Купити</option>
            <option value="rent">Орендувати</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Тип нерухомості</label>
          <select name="property" id="property">
            <option value="">Всі</option>
            <option value="apartment">Квартира</option>
            <option value="house">Будинок</option>
            <option value="room">Кімната</option>
            <option value="land">Земля</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Мін. ціна</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="від"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Мак. ціна</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="до"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Кількість спалень</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="будь-яка"
          />
        </div>
        <button>
          <img src="/search.png" alt="Пошук" />
        </button>
      </div>
    </div>
  );
}

export default Filter;