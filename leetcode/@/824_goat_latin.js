<<<<<<< HEAD
// 山羊拉丁文
/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    const letterArr = ['a', 'e', 'i', 'o', 'u'];
    const sentenceArr = sentence.split(' ');
    const result = [];
    let temp = 'a';
    for(let item of sentenceArr){
        if(letterArr.includes(item[0].toLocaleLowerCase())){
            item += 'ma' + temp;
        }else{
            item = item.substr(1) + item[0] + 'ma' + temp;
        }
        temp += 'a';
        result.push(item);
    }
    return result.join(' ');

=======
// 山羊拉丁文
/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    const letterArr = ['a', 'e', 'i', 'o', 'u'];
    const sentenceArr = sentence.split(' ');
    const result = [];
    let temp = 'a';
    for(let item of sentenceArr){
        // 先转小写，然后判断是否存在元音字母
        if(letterArr.includes(item[0].toLocaleLowerCase())){
            item += 'ma' + temp;
        }else{
            item = item.substr(1) + item[0] + 'ma' + temp;
        }
        temp += 'a';
        result.push(item);
    }
    return result.join(' ');

>>>>>>> 3060b42 (第一次Git提交所有文件)
};