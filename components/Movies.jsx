import React from 'react'
import Popular from './Popular'
import Top_Rated from './Top_Rated'
import TV_Shows from './TV_Shows'
import Top_Rated_Tv from './Top_Rated_Tv_Shows'
import Comedy_Movies from './comedy_movie'
import Romantic_Movie from './romantic_movie'
import Horror_Movie from './horror_movies'

const Movies = () => {
  return (
    <div>
        <Popular />
        <Top_Rated />
        <Top_Rated_Tv />
        <TV_Shows />
        <Comedy_Movies />
        <Romantic_Movie />
        <Horror_Movie />
    </div>
  )
}

export default Movies