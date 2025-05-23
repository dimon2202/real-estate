import { useState } from "react";
import "./searchBar.scss";

const types = ["Купити", "Орендувати"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Купити",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Місто" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Мін. ціна"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Макс. ціна"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
