const apiKey = `02f5d3847dfcb55ed317924dc9b17d62`;

export const getAllTvShows = async (searchInput) => {
  if (searchInput === "" || searchInput === undefined) {
    return [];
  }
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${searchInput}&include_adult=false`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

const selectProviderId = (provider) => {
  let providerId = 0;
  if (provider === "netflix") {
    return (providerId = 8);
  }
  if (provider === "crave") {
    return (providerId = 230);
  }
  if (provider === "disney") {
    return (providerId = 337);
  }
  if (provider === "appleplus") {
    return (providerId = 350);
  }
  return providerId;
};
export const getTvShows = async (provider) => {
  let providerId = selectProviderId(provider);
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_providers=${providerId}&watch_region=CA&with_watch_monetization_types=flatrate`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const getSelectedTvShow = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
