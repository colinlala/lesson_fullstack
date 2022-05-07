## package.json 与 package-lock.json 的关系


- package.json上依赖版本，在多人合作的项目下可能不太一样，package-lock.json就是来解决这个不同人电脑安装的所有依赖版本都是一致的，确保项目代码在安装所执行的运行结果都一样。

- **package-lock.json**对整个依赖树进行版本固定的（锁死）。

- package-lock.json记录了项目的一些信息和所依赖的模块。





JSON 的常规用途是同 web 服务器进行数据传输。

在从 web 服务器接收数据时，数据永远是字符串。

1. 通过 JSON.parse() 解析数据，这些数据会成为 JavaScript 对象。
    服务器文本：
    ```
    '{ "name":"LiMing", "age":37, "city":"Beijing"}'
    ```
    JSON.parse()之后:
    ```
    var obj = JSON.parse('{ "name":"LiMing", "age":37, "city":"Beijing"}');
    ```

2. 通过 JSON.stringify() 把 JavaScript 对象转换为字符串。

    服务器文本：
    ```
    var obj = { name:"LiMing", age:37, city:"Beijing"};
    ```
    JSON.stringify()之后:
    ```
    var obj = JSON.stringify('{"name":"LiMing","age":37,"city":"Beijing"}');
    ```