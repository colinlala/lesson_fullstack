import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'
// const Home = lazy(() => import ('@/pages/Home'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/search" element={<Search />}></Route> */}
            </Routes>
        </>
    )
}

  
