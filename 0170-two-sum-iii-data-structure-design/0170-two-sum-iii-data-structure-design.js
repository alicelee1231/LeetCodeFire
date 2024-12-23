
var TwoSum = function() {
    this.numbers = []
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.numbers.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    let a = this.numbers
    
    const numSet = new Set()
    for(let i = 0; i< a.length; i++){
        const complement = value - a[i]
        if(numSet.has(complement)){
            return true
        }
        numSet.add(a[i])
    }
    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */