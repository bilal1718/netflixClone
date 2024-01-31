import React from 'react';
import Nav from './Nav';

const MyList = ({ filteredData,FilterByMovieName }) => {
  return (
    <div className='list bg-black h-screen text-white'>
      <Nav FilterByMovieName={FilterByMovieName} />
      <h1 className='text-4xl mb-6'>List Items</h1>
      <div className='saveMovies flex flex-wrap justify-center'>
        {filteredData.length !== 0 ? (
          filteredData.map((item) => (
            <div className='movie relative hover-effect mb-10 mt-3' key={item.movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.movie.poster_path}`}
                alt={item.movie.title}
                className='w-full h-auto transition-transform duration-300 transform scale-100 hover:scale-110'
              />
              <div className='movie-info absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-2 text-center opacity-0 transition-opacity duration-300'>
                <p className='text-sm'>{item.movie.title ||  item.movie.name}</p>
                <p className='text-xs'>Rating: {item.movie.vote_average}</p>
              </div>
            </div>
          ))
        ) : (
          <div className='empty flex justify-center items-center text-center'>
            There are no movies here
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
