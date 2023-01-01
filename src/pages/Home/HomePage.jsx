import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SliderComponent, GridHomeContainer } from "../../components";
import {
  getAllCategoriesMovies,
  getAllCategoriesTv,
  getTrending,
} from "../../features/moviesAndTv/moviesAndTvSlice";

const HomePage = () => {
  const {
    isLoading,
    trendingMovies,
    trendingTv,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
    popularTv,
    topRatedTv,
  } = useSelector((store) => store.moviesAndTv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending());
    dispatch(getAllCategoriesMovies());
    dispatch(getAllCategoriesTv());
  }, []);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  return (
    <ContentWrapper className="section">
      {/* Movie content*/}
      <GridHomeContainer title="Popular" type="movie" data={popularMovies} />
      <SliderComponent text="Movies" data={trendingMovies} />
      <GridHomeContainer title="Upcoming" type="movie" data={upcomingMovies} />
      <GridHomeContainer title="Top rated" type="movie" data={topRatedMovies} />
      {/* Tv content */}
      <GridHomeContainer title="Top rated" type="tv" data={topRatedTv} />
      <SliderComponent text="TV" data={trendingTv} />
      <GridHomeContainer title="Popular" type="tv" data={popularTv} />
    </ContentWrapper>
  );
};

export default HomePage;

const ContentWrapper = styled.section``;
