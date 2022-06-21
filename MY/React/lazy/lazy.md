- 加载首页的时候并不需要加载其他业务模块，因此这些业务模块对应的组件都可以通过懒加载的形式来引入，加快首屏渲染速度，提高用户转化率。

- 路由中使用**React.lazy**
    1. 通过lazy() api来动态import需要懒加载的组件
    2. import的组件目前只支持export default的形式导出
    3. Suspense来包裹懒加载的组件进行加载，可以设置fallback现实加载中效果
        ```jsx
            import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
            import React, { Suspense, lazy } from 'react';

            const Home = lazy(() => import('./routes/Home'));
            const UserManage = lazy(() => import('./routes/UserManage'));
            const AssetManage = lazy(() => import('./routes/AssetManage'));
            const AttendanceManage = lazy(() => import('./routes/AttendanceManage'));

            const App = () => (
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/userManage" component={UserManage}/>
                            <Route path="/assetManage" component={AssetManage}/>
                            <Route path="/attendanceManage" component={AttendanceManage}/>
                        </Switch>
                    </Suspense>
                </Router>
            )
        ```