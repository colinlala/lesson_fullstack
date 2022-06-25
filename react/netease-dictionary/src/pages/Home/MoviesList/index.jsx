import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function MoviesList({ movies }) {
    return (
        <Wrapper>
            <div className="waterfall_conter">
                {
                    movies.map(item => (
                        <Link
                            className='movielist'
                            to={`/movielist/${item.author_id}`}
                            key={item.author_id}
                        >
                            <img src={item.movie_url} alt="" />
                            <p className='desc'>{item.desc}</p>
                            <p className="name">{item.author}</p>
                            <p className="like">
                                {item.like}
                                <i className='iconfont icon-aixin'></i>
                            </p>
                        </Link>
                    ))
                }
            </div>

        </Wrapper>
    )
}
