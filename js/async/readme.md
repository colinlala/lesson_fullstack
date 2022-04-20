## json 主流数据交换格式
    1. db.json 数据 posts comments {}来组织
    2. 交换 json格式一般用于其那段和后端 交换数据


- json格式的文件
    {} 对象字面量  json object

- 博客
    - 文章
    - 评论
    - 用户

- 数据可以存在数据库中，导出来，也是文件 .csv
    也可以存在json文件中 json 后缀的文件，放的是数据
    前端的视角 -> 数据存储和使用
    - mysql  数据表   json 有不同的key： 集合的名字 []
    - 每一行记录        对象字面量
    - 很多列            key：val
    - 表之间也有关系    


- mysql  数据库服务
    db.json   数据库    后端资源 来访问
    1. 把当前项目转换成为全栈项目   npm init -y   后端项目的初始化 for db
        根目录下会多一个package.json文件    项目描述文件   
    2. 安装一些工具包 npm i json-server
        json-server 基于json格式的数据文件提供数据访问服务，http


- live-server 启动了 前端网页的访问（http）
    前端项目        http://127.0.0.1:5555/js/async/index.html
    mysql           数据库服务 127.0.0.1:3306
    后端json-server http://localhost:3000/posts

- 前端 后端 数据通信   json  通信的基本格式
    xhr
    前端主动去拉取后端的数据服务（http）