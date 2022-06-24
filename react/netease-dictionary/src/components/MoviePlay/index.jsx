import React from 'react'
import ReactPlayer from 'react-player';

export default function MoviePlay({movies}) {
  return (
    <div>
     <ReactPlayer
          url={'${movies.url}'}
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
    </div>
  )
}
