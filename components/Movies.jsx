import React, { useState } from 'react'
import Popular from './movies/Popular'
import Top_Rated from './movies/Top_Rated'
import TV_Shows from './movies/TV_Shows'
import Top_Rated_Tv from './movies/Top_Rated_Tv_Shows'
import Comedy_Movies from './movies/comedy_movie'
import Romantic_Movie from './movies/romantic_movie'
import Horror_Movie from './movies/horror_movies'

const Movies = ({AddtoList}) => {
  return (
    <div>
        <Popular AddtoList={AddtoList} />
        <Top_Rated AddtoList={AddtoList} />
        <Top_Rated_Tv AddtoList={AddtoList} />
        <TV_Shows AddtoList={AddtoList} />
        <Comedy_Movies AddtoList={AddtoList} />
        <Romantic_Movie AddtoList={AddtoList} />
        <Horror_Movie AddtoList={AddtoList} />
    </div>
  )
}

export default Movies