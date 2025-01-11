import { useLocation } from "react-router-dom";
import AnimeCard from "./animeCards";
import { useState, useEffect } from "react";

function Search() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const encodedQuery = encodeURIComponent(searchQuery);
  const searchURL = "https://api.jikan.moe/v4/anime?q=" + encodedQuery + "&limit=18&order_by=popularity&sort=asc";

  const [searchAnimes, setSearchAnimes] = useState([]);

  const searchAnime = () => {
    fetch(searchURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchAnimes(data.data);
      });
  };
  useEffect(() => {
    searchAnime();
  }, []);

  return (
    <div>
      <div className="ongoing-anime-nav">
        <div className="ongoing row">
          <div className="col-lg-10 col-sm-8">
            <p>Found results for <i><b>{searchQuery || "Search Items "}</b></i></p>
          </div>
        </div>
      </div>

      <div className="anime-card-view">
        {searchAnimes.map((find) => (
          <AnimeCard all={find} key={find.mal_id} />
        ))}
      </div>
    </div>
  );
}
export default Search;
