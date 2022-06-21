import { Link } from 'react-router-dom'
import React from 'react'
import {MarkListWrapper} from './style'

export default function List({ guns }) {
  const showGunsList = () => {
    return guns.map(item => {
      return (
        <Link
          to="/gunsdes"
          className="gunsdes"
          key={item.id}
        >
          <div className="market">
            <ul className='card'>
              <li>
                <p>
                  <img src={item.img} />
                </p>
                <h3>
                  {item.name}
                </h3>
                <p>
                  {item.price}
                </p>
                <span>
                  {item.number}
                </span>
              </li>
            </ul>
          </div>
        </Link>
      )
    })
  }
  return (
    <MarkListWrapper>
      <div className='guns_list'>
        {showGunsList()}
      </div>
    </MarkListWrapper>

  )
}
