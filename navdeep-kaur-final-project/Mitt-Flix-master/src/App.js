import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import WatchList from "./Components/WatchList";
import DetailPage from "./Components/DetailPage";
import Header from "./Components/Header";

function App() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  function findSelectedTvShow(previousFavourite, favouriteTvShow) {
    return previousFavourite.find((tvshow) => tvshow.id === favouriteTvShow.id);
  }

  function createFavouriteList(
    selectedTvShow,
    previousFavourite,
    favouriteTvShow
  ) {
    let newFavourite;
    if (selectedTvShow) {
      newFavourite = previousFavourite.filter(
        (tvshow) => tvshow.id !== favouriteTvShow.id
      );
    } else {
      newFavourite = [...previousFavourite, favouriteTvShow];
    }
    return newFavourite;
  }

  const addFavourite = (favouriteTvShow) => {
    setFavourites((previousFavourite) => {
      let selectedTvShow = findSelectedTvShow(previousFavourite,favouriteTvShow);
      let newFavourite = createFavouriteList(selectedTvShow,previousFavourite,favouriteTvShow);
      localStorage.setItem("favourites", JSON.stringify(newFavourite));
      return newFavourite;
    });
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            handleAddFavourite={addFavourite}
            favouriteTvShows={favourites}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            handleAddFavourite={addFavourite}
            favouriteTvShows={favourites}
          />
        </Route>
        <Route path="/my-watch-list">
          <WatchList
            handleAddFavourite={addFavourite}
            favouriteTvShows={favourites}
          />
        </Route>
        <Route path="/detail/:id">
          <DetailPage
            handleAddFavourite={addFavourite}
            favouriteTvShows={favourites}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
