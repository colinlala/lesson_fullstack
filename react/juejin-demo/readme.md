- 单页应用 SPA
    - BrowserRouter/HashRouter  包着App
        路由思维先于组件化思维-设计路由
        - MySQL id自增  唯一
        - 时间戳 + 随机数
        - mongodb NOSQL 非关系型数据库  hashCode  hash运算
    - 某用户的所有文章列表
        ```
        <!-- 一级路由 -->
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/user/:id" element={<User />} />
        <!-- 二级路由 -->
        <Route path="/user/:id/posts" element={<UserPosts />} />
        ```