export const isPathPartlyExisted = (path) => {
    const arr = ['/Search'];
    // 任何情况 结果数组第二项都是arr里匹配的单项 
    // '/homedetail/123'  -> ['','homedetail','123']
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
    return false
}