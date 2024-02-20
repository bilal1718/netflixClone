import React, { lazy, Suspense } from 'react';
import '../App.css';

const LazyPopular = lazy(() => import('./movies/Popular'));
const LazyTopRated = lazy(() => import('./movies/Top_Rated'));
const LazyTopRatedTv = lazy(() => import('./movies/Top_Rated_Tv_Shows'));
const LazyTVShows = lazy(() => import('./movies/TV_Shows'));
const LazyComedyMovies = lazy(() => import('./movies/comedy_movie'));
const LazyRomanticMovie = lazy(() => import('./movies/romantic_movie'));
const LazyHorrorMovie = lazy(() => import('./movies/horror_movies'));

const Movies = ({ AddtoList }) => {
  return (
    <Suspense fallback={<div className="loading-message">Loading...</div>}>
      <div>
        <LazyPopular AddtoList={AddtoList} />
        <LazyTopRated AddtoList={AddtoList} />
        <LazyTopRatedTv AddtoList={AddtoList} />
        <LazyTVShows AddtoList={AddtoList} />
        <LazyComedyMovies AddtoList={AddtoList} />
        <LazyRomanticMovie AddtoList={AddtoList} />
        <LazyHorrorMovie AddtoList={AddtoList} />
      </div>
    </Suspense>
  );
};

export default Movies;
