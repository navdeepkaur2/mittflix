import React from "react";
import TvShow from './TvShow';

const WatchList = (props) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>My Watch List</h1>
        <div className="titles-wrapper">
          {
            props.favouriteTvShows?.map((watchListTvShow) => {
              return (
                <TvShow
                  key={watchListTvShow.id}
                  tvShow={watchListTvShow}
                  handleAddFavourite={props.handleAddFavourite}
                  handleRemoveFavourite={props.handleRemoveFavourite}
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
export default WatchList;