import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listofRestaurants, setlistofRestaurants] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

  const [serachText, setSerachText] = useState("");

  // Whenever state variables update, react truggers a reconcilation cycles(re-renders the component)
  console.log("Body Renderred");

  useEffect(() => {
    fetchData();
    // console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4256918752776&lng=77.03149031957025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const res =
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    // setlistofRestaurants(res);
    //console.log(res);
    console.log(res);
    // setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serachText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //console.log(serachText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.name.toLowerCase().includes(serachText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setlistofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
