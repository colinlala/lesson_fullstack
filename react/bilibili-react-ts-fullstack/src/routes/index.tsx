import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'

// const Home = lazy(() => import('@/pages/Home'))
// 为何要做路由的封装？
// 架构层面更清晰，方便管理，简化App.tsx
export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    )
}
