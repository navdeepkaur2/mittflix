import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as TvShowAPI from '../Services/TvShowAPI';

const DetailPage = (props) => {

  const [selectedTvShow, setSelectedTvShow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    TvShowAPI.getSelectedTvShow(id).then((selectedTvShow) => {
      setSelectedTvShow(selectedTvShow);
    });
  }, [id]);

  const { name, overview, backdrop_path } = selectedTvShow;

  const toggleAddButton = () => {
    const isFavourite = props.favouriteTvShows.some(item => item.id === selectedTvShow.id);
    if (isFavourite) return { className: 'remove-to-watchlist', html: '- Remove to watch list' };
    return { className: 'add-to-watchlist', html: '+ Add to watch list' };
  }

  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
      <div className="show-details-inner">
        <h1>{name}</h1>
        <div className="description">{overview}
        </div>
        <button
          className={toggleAddButton().className}
          onClick={() => props.handleAddFavourite(selectedTvShow)}
        >
          {toggleAddButton().html}
        </button>
      </div>
    </div>
  );
}

export default DetailPage;