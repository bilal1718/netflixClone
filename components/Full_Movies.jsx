import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Nav from './Nav';

const Full_Movies = ({AddtoList}) => {
    const [movies, setMovies] = useState([]);
    const [filteredData,setFilteredData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [disableScroll, setDisableScroll] = useState(false);
    const [pageNumber,setPageNumber]=useState(1);
    const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    window.addEventListener('scroll', scrollFunction);
  }, []);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=58eec0999b7db5c6b801fecec14d2b51&page=${pageNumber}`);
          setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
          setFilteredData((prevMovies) => [...prevMovies, ...response.data.results])
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
    useEffect(() => {
            fetchData();
    }, [pageNumber]);
    const handleScroll=()=>{
        if (  window.innerHeight +
            document.documentElement.scrollTop
            !==
            document.documentElement.offsetHeight ||
            isLoading ) {
            return ;
          }
          setPageNumber((prev)=>prev+1);
        //   fetchData();
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);
      const FilterByMovieName = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFilteredData(
            movies.filter((item) => {
            const movieTitle =item.title || item.name;
            return movieTitle.toLowerCase().includes(searchTerm);
          })
        );
      };
  return (
    <>
    <Nav FilterByMovieName={FilterByMovieName} />
    {showBackToTop && (
        <button className='back-to-top' onClick={backToTop}>
          Back to top
        </button>
      )}
    <h1 className='bg-zinc-900 mt-16 text-white font-extrabold text-4xl p-4'>Movies</h1>
    <div className={`relative flex bg-zinc-900 ${disableScroll ? 'overflow-hidden' : ''}`}>
            <section className="mx-8 p-8 flex flex-wrap overflow-x-auto">
                {filteredData.map((movie,i) => (
                    <div key={i} className="m-4 hover-effect">
                        <a onClick={() => handleDetail(movie.id)}>
                            {movie.poster_path==null ? "" : <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-48 h-57 object-cover cursor-pointer"
                            />}
                        </a>
                    </div>
                ))}
            </section>
        </div>
        {isLoading && <p>Loading...</p>}
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


export default Full_Movies