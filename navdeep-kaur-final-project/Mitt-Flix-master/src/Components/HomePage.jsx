import React from "react";
import TvShowsSection from './TvShowsSection';
const HomePage = (props) => {
  const providerList = ['Netflix', 'Crave', 'Disney', 'Apple Plus'];
  return (
    <>
      {
        providerList.map((provider, index) => {
          return (
            <TvShowsSection
              key={index}
              providerTitle={provider}
              handleAddFavourite={props.handleAddFavourite}
              handleRemoveFavourite={props.handleRemoveFavourite}
              favouriteTvShows={props.favouriteTvShows}
            />
          )
        })
      }
    </>
  );
}

export default HomePage;