import React from "react";
import { Link } from "react-router-dom";
import ImageNotAvailable from '../Images/ImageNotAvailable.jpg';

const TvShow = ({ tvShow, handleAddFavourite, favouriteTvShows }) => {

  const { name, overview, popularity, poster_path } = tvShow;

  return (
    <div className="movie">
      <Link to={`/detail/${tvShow.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          onError={(e) => {
            e.target.onerror = '';
            e.target.src = ImageNotAvailable
          }}
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{name}</div>
          <div className="rating">{popularity}</div>
          <div className="plot">{overview}</div>
        </div>
      </Link>

      <div
        data-toggled={favouriteTvShows.some(item => item.id === tvShow.id)}
        className="listToggle"
        onClick={() => handleAddFavourite(tvShow)}
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}

export default TvShow;
