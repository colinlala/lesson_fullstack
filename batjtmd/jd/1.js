// 函数，判断文件是否是图片文件

/**
 * 代码最重要的是：功能（在学校），合作（大厂）
 * 可读性
 * @param {string} file 文件名
 * @return { boolean } 是否是图片
 * @suthor zyh
 * @date 2022-3-29
 */
function checkIsImage(file){
    //console.log(file);
    //file 不能为空
    if(!file){
        return false;
    }
    //切割  .的前后  [ 'a', 'txt' ]
    //1.
    // if(file.split('.')[1] == 'jpg' 
    //     || file.split('.')[1] == 'jpeg'
    //     || file.split('.')[1] == 'gif'
    //     || file.split('.')[1] == 'png'
    //     || file.split('.')[1] == 'svg'
    //     || file.split('.')[1] == 'webp'
    //     || file.split('.')[1] == 'awebp'){
    //     return true;
    // }

    //2.
    //.indexof ，如果是jpg就是0，如果是ipeg就是1......如果不是数组里面的就返回-1
    // let pos = ['jpg','jpeg','gif','png','svg','webp','awebp'].indexOf(file.split('.')[1]);  
    // if(pos == -1){
    //     return false;
    // }else{
    //     return true;
    // }

    //3.
    let imgFormats = ['jpg','jpeg','gif','png','svg','webp','awebp'];
    return imgFormats.indexOf(file.split('.')[1])  == -1 ? false : true;
    
    // return false; 

}

console.log(checkIsImage('a.png'));
