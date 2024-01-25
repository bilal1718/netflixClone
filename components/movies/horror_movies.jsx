import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Horror_Movie = () => {
    const [movies, setMovies] = useState([]);
    const [current, setCurrent] = useState(0);
    const itemsPerPage = 6;
    const genreId=27;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
              params: {
                api_key: `58eec0999b7db5c6b801fecec14d2b51`,
                with_genres: genreId,
              },
            });
            setMovies(response.data.results);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [genreId]);

    const handleClickNext = () => {
        if (current + itemsPerPage >= movies.length) {
            setCurrent((prev) => prev + itemsPerPage - movies.length);
        } else {
            setCurrent((prev) => prev + itemsPerPage);
        }
    };

    const handleClickPrev = () => {
        if (current === 0) {
            setCurrent((prev) => prev - itemsPerPage + movies.length);
        }
        setCurrent((prev) => Math.max(prev - itemsPerPage, 0));
    };

    return (
        <>
        <h1 className='bg-zinc-900 text-white font-extrabold text-4xl p-4'>Horror Movies</h1>
        <div className="relative flex bg-zinc-900">
            <section className=" mx-8 p-8 flex flex-row overflow-x-auto">
                {movies.slice(current, current + itemsPerPage).map((movie) => (
                    <div key={movie.id} className="m-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-48 h-57 object-cover"
                        />
                    </div>
                ))}
            </section>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                <FaArrowAltCircleLeft className='left-arrow' onClick={handleClickPrev} />
                <FaArrowAltCircleRight className='right-arrow' onClick={handleClickNext} />
            </div>
        </div>
        </>
    );
};

export default Horror_Movie;
