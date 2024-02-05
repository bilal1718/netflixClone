import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Romantic_Movie = ({AddtoList}) => {
    const [movies, setMovies] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [disableScroll, setDisableScroll] = useState(false);
    const itemsPerPage = 6;
    const genreId=10749;
    useEffect(() => {
        if (selectedMovie) {
            setDisableScroll(true);
        } else {
            setDisableScroll(false);
        }
    }, [selectedMovie]);

    const handleDetail = async (id) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=58eec0999b7db5c6b801fecec14d2b51`);
            setSelectedMovie(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };
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
        <h1 className='bg-zinc-900 text-white font-extrabold text-4xl p-4'>Romantic Movies</h1>
        <div className={`relative flex bg-zinc-900 ${disableScroll ? 'overflow-hidden' : ''}`}>
                <section className="mx-8 p-8 flex flex-row overflow-x-auto">
                    {movies.slice(current, current + itemsPerPage).map((movie) => (
                        <div key={movie.id} className="m-4 hover-effect tool" >
                        <span className='tooltiptext'>{movie.title}</span>
                            <a onClick={() => handleDetail(movie.id)}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-48 h-57 object-cover cursor-pointer"
                                />
                            </a>
                        </div>
                    ))}
                </section>
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                    <FaArrowAltCircleLeft className='left-arrow' onClick={handleClickPrev} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={handleClickNext} />
                </div>
            </div>
            {selectedMovie && (
                <div className="modal-overlay fixed top-10 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-container max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
                        <button onClick={handleCloseModal} aria-label="close" className="relative top-0 right-4 text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                            alt={selectedMovie.title}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
                        <p className="text-gray-600 mb-2">{selectedMovie.overview}</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Play</button>
                            <button  onClick={() => AddtoList(selectedMovie)} className="bg-gray-700 text-white px-4 py-2 mb-4 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:border-gray-500">Add to List</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Romantic_Movie;
