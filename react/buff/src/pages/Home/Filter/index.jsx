import React from 'react'
import { Link } from 'react-router-dom'
import { FilterWrapper } from './style'
import MajorPrinting from '../../../assets/images/Major_printing.png'
import Printing from '../../../assets/images/printing_guns.png'
import Mix from '../../../assets/images/mix.png'
import Type from '../../../assets/images/type_filter.png'

export default function Filter() {
    return (
        <FilterWrapper>
            {/* <div className='link_img'> */}
                <Link to="/search_printing">
                    <img className={"linkImg"} src={Printing} alt="" />
                </Link>
                <Link to="/search_type">
                    <img className={"linkImg"} src={Type} alt="" />
                </Link>
                <Link to="/search_mix">
                    <img className={"linkImg"} src={Mix} alt="" />
                </Link>
                <Link to="/search_majorprinting">
                    <img className={"linkImg"} src={MajorPrinting} alt="" />
                </Link>
            {/* </div> */}
        </FilterWrapper>
    )
}
