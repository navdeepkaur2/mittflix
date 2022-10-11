import React, { useState, useEffect } from "react";
import * as TvShowAPI from '../Services/TvShowAPI';
import { stringCleaner } from '../Services/UtilityFunctions';
import TvShow from './TvShow';

const TvShowsSection = (props) => {
  
  const { providerTitle } = props;
  const [tvShowList, setTvShowList] = useState([]);

  useEffect(() => {
    TvShowAPI.getTvShows(stringCleaner(providerTitle)).then((tvShows) => {
      setTvShowList(tvShows);
    })
  }, [providerTitle]);

  return (
    <div className="titleList">
      <div className="title">
        <h1>{providerTitle}</h1>
        <div className="titles-wrapper">
          {
            tvShowList.map((tvShow) => {
              return (
                <TvShow
                  tvShow={tvShow}
                  key={tvShow.id}
                  handleAddFavourite={props.handleAddFavourite}
                  favouriteTvShows={props.favouriteTvShows}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TvShowsSection;