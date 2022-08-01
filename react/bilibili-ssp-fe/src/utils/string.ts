// 工具函数（中大型项目标配）   提供api之外的，字符串相关的操作

/**
 * @func 格式化数字  1218807 => 121.9万
 * @params num: number
 * @reaturn string
 * */ 
export function formatTenThousand(num: number):string{
    const numStr = String(num);
    if(numStr.length <= 4){
        return numStr
    }
    let wholeNumber = numStr.substring(0, numStr.length - 4)
    const thousands = numStr.substring(numStr.length - 4)
    // 通过首位（千位）与 余位得到的小数，toFixed四舍五入
    // thousands.substring(0, 1) 取第一位      thousands.substring(1) 取后几位
    let descimalNumber = Number(thousands.substring(0, 1) + "." + thousands.substring(1)).toFixed(0)
    // 千位toFixed 进位后可能是10
    if(descimalNumber.length === 2){
        descimalNumber = "0"
        wholeNumber = String(Number(wholeNumber) + 1)
    }
    return `${wholeNumber}.${descimalNumber}万`
}