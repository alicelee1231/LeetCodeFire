
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
    for(const num of a){
        const complemet = value - num
        if(numSet.has(complemet)){
            return true
        }
        numSet.add(num)
    }
    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */