/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // let a = numbers.map((i) => target - i)
    // let x = []
    // for(let i = 0; i < numbers.length; i++){
    //     if( numbers.lastIndexOf(a[i]) != -1){
    //         x.push(i + 1)
    //         x.push(numbers.lastIndexOf(a[i]) + 1)
    //         break
    //     } else continue
    // }
    // return x

    let left = 0, right = numbers.length - 1
    while(left <= right){
        let sum = numbers[left] + numbers[right]
        if(sum ===  target){
            return [left+1, right+1]
        }else if(sum > target){
            right--
        }else left++
    }
    return []
};