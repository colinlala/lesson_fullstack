import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function MoviesList({ movies }) {
    return (
        <Wrapper>
            {
                movies.map(item => (
                    <Link
                        className='movielist'
                        to={`/moviedetail/${item.author_id}`}
                        key={item.author_id}
                    >
                        <div className="waterfall_conter">
                            <div className="waterfall_detail">
                                <div className="waterfall_item">
                                    <img src={item.movie_url} alt="" />
                                    <p className='desc'>{item.desc}</p>
                                    <div className='waterfall_item_desc'>
                                        <div className='name'>{item.author}</div>
                                        <div className='like'>{item.like}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </Wrapper>
    )
}
