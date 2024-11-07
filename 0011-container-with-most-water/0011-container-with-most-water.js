/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0
   
    let left = 0
    let right = height.length - 1
    
    while(left < right){
        const maxH = Math.min(height[left], height[right])
        const cur = maxH * (right - left)
        
        result = Math.max(result, cur)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    
    return result
     
};