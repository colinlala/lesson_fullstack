// 独立配置文件，路由配置
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
const Contacts = lazy(() => import('@/pages/Contacts'))
const Dynamic = lazy(() => import('@/pages/Dynamic'))


export default function RoutesConfig() {
  return (
    <Suspense fallback={null}>
      <Routes>
              {/* 实现首页路由的默认跳转 */}
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dynamic" element={<Dynamic />} />
      </Routes>
    </Suspense>
  );
}
