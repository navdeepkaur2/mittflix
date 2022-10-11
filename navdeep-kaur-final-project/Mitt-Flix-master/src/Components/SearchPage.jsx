import React, { useState, useEffect } from "react";
import TvShow from './TvShow';
import { useLocation } from "react-router-dom";
import * as TvShowAPI from '../Services/TvShowAPI';

const SearchPage = (props) => {
  
  const [tvShowList, settvShowList] = useState([]);
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    TvShowAPI.getAllTvShows(searchInput).then((tvShowList) => {
      settvShowList(tvShowList);
    });
  }, [searchInput]);

  return (
    <div className="titleList">
      <div className="title">
        <h1>Results</h1>
        <div className="titles-wrapper">
          {
            tvShowList.map((tvShow) => {
              return (
                <TvShow
                  key={tvShow.id}
                  tvShow={tvShow}
                  handleAddFavourite={props.handleAddFavourite}
                  favouriteTvShows={props.favouriteTvShows}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default SearchPage;