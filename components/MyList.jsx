import React from 'react'

const MyList = ({listItems}) => {
  return (
    <div className='list'>
      <h1 className='text-4xl'>List Items</h1>
      <div className='saveMovies'>
      {listItems.length !==0 ? listItems.map((item)=>(
        <div className='movie' key={item.movie.id}>
         <img src={`https://image.tmdb.org/t/p/w200${item.movie.poster_path}`} alt="" />
          </div>
      )):
      <div className='empty'>
          There are no movies here
      </div>
      }
      </div>
    </div>
  )
}

export default MyList