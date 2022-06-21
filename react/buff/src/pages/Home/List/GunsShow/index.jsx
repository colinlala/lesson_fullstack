import React from 'react'
import {Wrapper} from './style'
import { Link } from 'react-router-dom'

export default function GunsShow({guns}) {
  return (
    <Wrapper>
      {
        guns.map(item => {
          <Link
            to="/gunsdes"
            className="gunsdes"
            key={item.id}
          >
            <div className="list_card">
              <ul className="goods">
                <li>
                  <img src={item.img} />
                  <h3>{item.name}</h3>
                  <p>{item.price} {item.number}</p>
                </li>
              </ul>
            </div>
          </Link>
        })
      }
    </Wrapper>
  )
}
